from flask import Flask, render_template, url_for, redirect, request
import pandas as pd
import numpy as np
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, StringField, SubmitField, HiddenField
from wtforms.validators import InputRequired, Length
from datetime import datetime as dt
import matplotlib.pyplot as plt
from apphelpers.app_functions import SDK, FIFA_Processing

import os

# lsof -i :5000
# kill -9 <PORT>



class Filter(FlaskForm):
	placeholder = [("Select", "Select")] 
	FIFA_BASE = FIFA_Processing(table_name = "players", database_name = "./data/fifa.db", process_from_scratch=False)
	options_year = placeholder + [ (i[0], i[0]) for i in FIFA_BASE.cursor.execute("SELECT DISTINCT year FROM players").fetchall() ]
	options_club = placeholder + [ (i[0], i[0]) for i in FIFA_BASE.cursor.execute("SELECT DISTINCT club_name FROM players").fetchall() ]

	filter_year = SelectField(choices = options_year)
	filter_club = SelectField(choices = options_club)
	apply_filters = SubmitField("Apply filters")


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

	form = Filter()
	FIFA = FIFA_Processing(table_name = "players", database_name = "./data/fifa.db", process_from_scratch=False)
	main_df = FIFA.select_from_database(return_as="DataFrame")
	working_df = main_df.copy()

	if form.validate_on_submit():
		print(form.filter_year.data)
		working_df = working_df[working_df["club_name"] == form.filter_club.data]
		return render_template("fifa.html", fifa_data = working_df, form = form)
	
	return render_template("fifa.html", fifa_data = main_df.iloc[:100,:], form = form)



if __name__ == "__main__":
	app.run(debug = True)













