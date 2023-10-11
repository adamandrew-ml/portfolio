from flask import Flask, render_template, url_for, redirect, request
import pandas as pd
import numpy as np
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, StringField, SubmitField, HiddenField, IntegerRangeField
from wtforms.validators import InputRequired, Length, NumberRange
from datetime import datetime as dt
import matplotlib.pyplot as plt
from apphelpers.app_functions import SDK, FIFA_Processing

import os

# lsof -i :5000
# kill -9 <PORT>



class Filter(FlaskForm):

	FIFA        = FIFA_Processing(table_name = "players", database_name = "./data/fifa.db", process_from_scratch=False)
	main_df     = FIFA.select_from_database(return_as="DataFrame")
	working_df  = main_df.copy()
	FIFA_BASE = FIFA_Processing(table_name = "players", database_name = "./data/fifa.db", process_from_scratch=False)

	# INSERT POINT 1
	placeholder = [("Select all", "Select all")]
	all_fields = {
		"short_name"    : "filter_name",
		"year"          : "filter_year",
		"club_name"     : "filter_club",
		"league_name"   : "filter_league",
		"team_position" : "filter_teamposition",
		"nationality"   : "filter_nationality"
	}
	
	# INSERT POINT 2
	filter_name         = StringField(label = "Name:")
	filter_year         = SelectField(label = "Year:", choices = FIFA_BASE.set_options(working_df,   "year"))
	filter_club         = SelectField(label = "Club:", choices = FIFA_BASE.set_options(working_df,   "club_name"))
	filter_league       = SelectField(label = "League:", choices = FIFA_BASE.set_options(working_df, "league_name"))
	filter_teamposition = SelectField(label = "Plays As:", choices = FIFA_BASE.set_options(working_df, "team_position"))
	filter_nationality  = SelectField(label = "Nationality:", choices = FIFA_BASE.set_options(working_df, "nationality"))

	filter_age_min      = IntegerRangeField(label = "Age", id = "filter_slider_age_min_id")
	filter_age_max      = IntegerRangeField(label = "Age")
	filter_height_min   = IntegerRangeField(label = "Height")
	filter_height_max   = IntegerRangeField(label = "Height")
	filter_weight_min   = IntegerRangeField(label = "Weight")
	filter_weight_max   = IntegerRangeField(label = "Weight")
	filter_value_min    = IntegerRangeField(label = "Value")
	filter_value_max    = IntegerRangeField(label = "Value")
	filter_wage_min     = IntegerRangeField(label = "Wage")
	filter_wage_max     = IntegerRangeField(label = "Wage")
	filter_overall_min  = IntegerRangeField(label = "Rating")
	filter_overall_max  = IntegerRangeField(label = "Rating", validators=[NumberRange(min=2, max=8)])

	# INSERT POINT 3 (IN HTML)

	apply_filters = SubmitField("Apply filters")
	reset_filters = HiddenField()


app = Flask("myapp")
app.config['SECRET_KEY'] = 'temp_pw'


@app.route("/")
def home():
	return render_template("base.html")

@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/portfolio")
def portfolio():
	return render_template("portfolio.html")

@app.route("/sudoku", methods = ["GET","POST"])
def sudoku():
 
	form = SDK()
	for i in np.arange(1, 10):
		if (form.Puzzle.puzzle == i).sum() == 9:
			eval(f"form.valid_{i}").data = True
		else:
			eval(f"form.valid_{i}").data = False

	for row in range(9):
		for col in range(9):
			if form.Puzzle.puzzle[row,col] == 0:
				texteval = f"form.field{row+1}{col+1}"
				eval(texteval).data = None
				eval(texteval).render_kw = {}
			else:
				texteval = f"form.field{row+1}{col+1}"
				eval(texteval).data = form.Puzzle.puzzle[row,col]
				eval(texteval).render_kw = {"disabled": "disabled"}
	            
	if form.validate_on_submit():
	
		all_data = []

		for row in range(9):
			for col in range(9):
				texteval = f"form.field{row+1}{col+1}"

				if eval(texteval).render_kw != {"disabled": "disabled"}:
					allfields = request.form
					mydata = allfields[f"field{row+1}{col+1}"]
					eval(texteval).data = mydata

				try:
					all_data.append(int(eval(texteval).data))
				except:
					all_data.append(0)
	
		current_solution = np.array(all_data).reshape(9,9)

		if (current_solution == form.Puzzle.solution).all():
			form.is_solved = "SOLVED!!"
                  
		for i in np.arange(1,10):
			check_for_value = ((current_solution == i) == (form.Puzzle.solution == i)).all()
			texteval = f"form.valid_{i}"
			eval(texteval).data = check_for_value
		
		return render_template("sudoku.html", form = form)

	return render_template("sudoku.html", form = form)

@app.route("/sudoku/reset")
def sudoku_reset():
	return redirect(url_for("sudoku"))

@app.route("/sudoku/new")
def sudoku_new():
    SDK.Puzzle.reset_all()
    return redirect(url_for("sudoku"))





@app.route("/fifa", methods = ["GET", "POST"])
def fifa():

	form = Filter(csrf_enabled=False)

	if form.validate_on_submit():
		
		options = []
		logic_exceptions = ["short_name"]
		for db_field, form_field in form.all_fields.items():
			if eval(f"form.{form_field}").data != "Select all":
				options.append((db_field, eval(f"form.{form_field}").data))

		if len(options) > 0:
			import string
			for db_field, form_value in options:
				if db_field not in logic_exceptions:
					try:
						form.working_df = form.working_df[form.working_df[db_field] == int(form_value)]
					except:
						form.working_df = form.working_df[form.working_df[db_field] == form_value]
				elif db_field == "short_name":
					form.working_df = form.working_df[ (form.working_df[db_field].str.lower()).str.contains(form_value)]

			for db_field, form_field in form.all_fields.items():
				eval(f"form.{form_field}").choices = form.FIFA_BASE.set_options(form.working_df, db_field)



		if len(form.working_df) > 100:
			returnable = form.working_df.iloc[:100, :]
		else:
			returnable = form.working_df
		print(form.filter_overall_max.data)
		return render_template("fifa.html", fifa_data = returnable, form = form)
	
	return render_template("fifa.html", fifa_data = form.main_df.iloc[:100,:], form = form)




@app.route("/fifa/reset", methods = ["GET", "POST"])
def fifa_reset():
	Filter.working_df = Filter.main_df.copy()
	return redirect(url_for("fifa"))






if __name__ == "__main__":
	app.run(debug = True)













