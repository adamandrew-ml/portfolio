from flask import Flask, render_template, url_for, redirect, request
import pandas as pd
import numpy as np
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, StringField, SubmitField, HiddenField
from wtforms.validators import InputRequired, Length
from datetime import datetime as dt
import matplotlib.pyplot as plt


app = Flask("myapp")
app.config['SECRET_KEY'] = 'temp_pw'


class Sudoku:
    
    def __init__(self):
        self.reset_all()

    def reset_all(self):
        self.difficulty_choice = "Average"
        self.set_structure()
        self.set_difficulties()
        self.generate_puzzle()
    
    def set_structure(self):
        self.vals = np.zeros((9,9)).astype(int)
        self.rows = np.array([[i] * 9 for i in range(9)]).astype(int)
        self.cols = np.array([np.arange(0,9) for i in range(9)]).astype(int)
        self.boxs = np.array([
            np.array([np.array([[i + 0] * 3 for i in range(3)]).reshape(9)] * 3),
            np.array([np.array([[i + 3] * 3 for i in range(3)]).reshape(9)] * 3),
            np.array([np.array([[i + 6] * 3 for i in range(3)]).reshape(9)] * 3)
        ]).reshape(9,9).astype(int)
        self.vals_copy = self.vals.copy()
        
    def set_difficulties(self):
        self.difficulties = {
            "Very Easy" : 0.1,
            'Easy'      : 0.2,
            "Average"   : 0.3,
            "Hard"      : 0.4,
            "Very Hard" : 0.5
        }
         
    def get_availability(self, num_to_place):
        val_mask = self.vals_copy == 0
        row_mask = val_mask.copy()
        col_mask = val_mask.copy()
        box_mask = val_mask.copy()
        
        for row in range(9):
            if (self.rows[val_mask] == row).sum() < (10 - num_to_place):
                row_mask[self.rows == row] = False    
        for col in range(9):
            if (self.cols[val_mask] == col).sum() < (10 - num_to_place):
                col_mask[self.cols == col] = False     
        for box in range(9):
            if (self.boxs[val_mask] == box).sum() < (10 - num_to_place):
                box_mask[self.boxs == box] = False
        return row_mask & col_mask & box_mask
    
    
    def create_puzzle(self):
        self.solved = False
        while self.solved == False:
            if (self.vals == 0).sum() == 9:
                self.vals[self.vals == 0] = 9
                if self.vals.sum() == 405:
                    self.solved = True
                    break

            for i in range(8):
                num_to_place = i+1
                commit = False
                counter = 0
                while commit == False:
                    counter += 1
                    if counter > 100:
                        self.vals = np.zeros((9,9)).astype(int)
                        break
                    else:
                        self.vals_copy = self.vals.copy()

                    while ((self.vals_copy == num_to_place).sum() < 9 and
                            self.get_availability(num_to_place).sum() > 0):
                        availability = self.get_availability(num_to_place)
                        check_result = False
                        while check_result == False:
                            row = np.random.randint(9)
                            col = np.random.randint(9)
                            if availability[row,col] == True:
                                self.vals_copy[row, col] = num_to_place
                                check_result = True

                        if ((self.vals_copy == num_to_place).sum() == 9 and
                             np.max(self.vals[self.vals_copy == num_to_place]) == 0):
                            commit = True
                            self.vals = self.vals_copy
                            
        self.solution = self.vals
        
    def generate_puzzle(self):
        self.create_puzzle()
        del_perc = self.difficulties[self.difficulty_choice]
        del_mask = np.random.choice(
            [0, 1], p = [del_perc, 1 - del_perc],
            size = 81).reshape((9,9))
        self.puzzle = self.solution * del_mask



class SDK(FlaskForm):

	Puzzle = Sudoku()
      
	field11 = StringField(validators=[], default = Puzzle.puzzle[0,0])
	field12 = StringField(validators=[], default = Puzzle.puzzle[0,1])
	field13 = StringField(validators=[], default = Puzzle.puzzle[0,2])
	field14 = StringField(validators=[], default = Puzzle.puzzle[0,3])
	field15 = StringField(validators=[], default = Puzzle.puzzle[0,4])
	field16 = StringField(validators=[], default = Puzzle.puzzle[0,5])
	field17 = StringField(validators=[], default = Puzzle.puzzle[0,6])
	field18 = StringField(validators=[], default = Puzzle.puzzle[0,7])
	field19 = StringField(validators=[], default = Puzzle.puzzle[0,8])

	field21 = StringField(validators=[], default = Puzzle.puzzle[1,0])
	field22 = StringField(validators=[], default = Puzzle.puzzle[1,1])
	field23 = StringField(validators=[], default = Puzzle.puzzle[1,2])
	field24 = StringField(validators=[], default = Puzzle.puzzle[1,3])
	field25 = StringField(validators=[], default = Puzzle.puzzle[1,4])
	field26 = StringField(validators=[], default = Puzzle.puzzle[1,5])
	field27 = StringField(validators=[], default = Puzzle.puzzle[1,6])
	field28 = StringField(validators=[], default = Puzzle.puzzle[1,7])
	field29 = StringField(validators=[], default = Puzzle.puzzle[1,8])

	field31 = StringField(validators=[], default = Puzzle.puzzle[2,0])
	field32 = StringField(validators=[], default = Puzzle.puzzle[2,1])
	field33 = StringField(validators=[], default = Puzzle.puzzle[2,2])
	field34 = StringField(validators=[], default = Puzzle.puzzle[2,3])
	field35 = StringField(validators=[], default = Puzzle.puzzle[2,4])
	field36 = StringField(validators=[], default = Puzzle.puzzle[2,5])
	field37 = StringField(validators=[], default = Puzzle.puzzle[2,6])
	field38 = StringField(validators=[], default = Puzzle.puzzle[2,7])
	field39 = StringField(validators=[], default = Puzzle.puzzle[2,8])

	field41 = StringField(validators=[], default = Puzzle.puzzle[3,0])
	field42 = StringField(validators=[], default = Puzzle.puzzle[3,1])
	field43 = StringField(validators=[], default = Puzzle.puzzle[3,2])
	field44 = StringField(validators=[], default = Puzzle.puzzle[3,3])
	field45 = StringField(validators=[], default = Puzzle.puzzle[3,4])
	field46 = StringField(validators=[], default = Puzzle.puzzle[3,5])
	field47 = StringField(validators=[], default = Puzzle.puzzle[3,6])
	field48 = StringField(validators=[], default = Puzzle.puzzle[3,7])
	field49 = StringField(validators=[], default = Puzzle.puzzle[3,8])

	field51 = StringField(validators=[], default = Puzzle.puzzle[4,0])
	field52 = StringField(validators=[], default = Puzzle.puzzle[4,1])
	field53 = StringField(validators=[], default = Puzzle.puzzle[4,2])
	field54 = StringField(validators=[], default = Puzzle.puzzle[4,3])
	field55 = StringField(validators=[], default = Puzzle.puzzle[4,4])
	field56 = StringField(validators=[], default = Puzzle.puzzle[4,5])
	field57 = StringField(validators=[], default = Puzzle.puzzle[4,6])
	field58 = StringField(validators=[], default = Puzzle.puzzle[4,7])
	field59 = StringField(validators=[], default = Puzzle.puzzle[4,8])

	field61 = StringField(validators=[], default = Puzzle.puzzle[5,0])
	field62 = StringField(validators=[], default = Puzzle.puzzle[5,1])
	field63 = StringField(validators=[], default = Puzzle.puzzle[5,2])
	field64 = StringField(validators=[], default = Puzzle.puzzle[5,3])
	field65 = StringField(validators=[], default = Puzzle.puzzle[5,4])
	field66 = StringField(validators=[], default = Puzzle.puzzle[5,5])
	field67 = StringField(validators=[], default = Puzzle.puzzle[5,6])
	field68 = StringField(validators=[], default = Puzzle.puzzle[5,7])
	field69 = StringField(validators=[], default = Puzzle.puzzle[5,8])

	field71 = StringField(validators=[], default = Puzzle.puzzle[6,0])
	field72 = StringField(validators=[], default = Puzzle.puzzle[6,1])
	field73 = StringField(validators=[], default = Puzzle.puzzle[6,2])
	field74 = StringField(validators=[], default = Puzzle.puzzle[6,3])
	field75 = StringField(validators=[], default = Puzzle.puzzle[6,4])
	field76 = StringField(validators=[], default = Puzzle.puzzle[6,5])
	field77 = StringField(validators=[], default = Puzzle.puzzle[6,6])
	field78 = StringField(validators=[], default = Puzzle.puzzle[6,7])
	field79 = StringField(validators=[], default = Puzzle.puzzle[6,8])

	field81 = StringField(validators=[], default = Puzzle.puzzle[7,0])
	field82 = StringField(validators=[], default = Puzzle.puzzle[7,1])
	field83 = StringField(validators=[], default = Puzzle.puzzle[7,2])
	field84 = StringField(validators=[], default = Puzzle.puzzle[7,3])
	field85 = StringField(validators=[], default = Puzzle.puzzle[7,4])
	field86 = StringField(validators=[], default = Puzzle.puzzle[7,5])
	field87 = StringField(validators=[], default = Puzzle.puzzle[7,6])
	field88 = StringField(validators=[], default = Puzzle.puzzle[7,7])
	field89 = StringField(validators=[], default = Puzzle.puzzle[7,8])

	field91 = StringField(validators=[], default = Puzzle.puzzle[8,0])
	field92 = StringField(validators=[], default = Puzzle.puzzle[8,1])
	field93 = StringField(validators=[], default = Puzzle.puzzle[8,2])
	field94 = StringField(validators=[], default = Puzzle.puzzle[8,3])
	field95 = StringField(validators=[], default = Puzzle.puzzle[8,4])
	field96 = StringField(validators=[], default = Puzzle.puzzle[8,5])
	field97 = StringField(validators=[], default = Puzzle.puzzle[8,6])
	field98 = StringField(validators=[], default = Puzzle.puzzle[8,7])
	field99 = StringField(validators=[], default = Puzzle.puzzle[8,8])

	check = SubmitField()
	is_solved = "Not yet solved"

	valid_1 = HiddenField(id = "valid_1", default = False)
	valid_2 = HiddenField(id = "valid_2", default = False)
	valid_3 = HiddenField(id = "valid_3", default = False)
	valid_4 = HiddenField(id = "valid_4", default = False)
	valid_5 = HiddenField(id = "valid_5", default = False)
	valid_6 = HiddenField(id = "valid_6", default = False)
	valid_7 = HiddenField(id = "valid_7", default = False)
	valid_8 = HiddenField(id = "valid_8", default = False)
	valid_9 = HiddenField(id = "valid_9", default = False)










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
            
		print(form.valid_3.data)
		
		return render_template("sudoku.html", form = form)

	return render_template("sudoku.html", form = form)

@app.route("/sudoku/reset")
def sudoku_reset():
	return redirect(url_for("sudoku"))

@app.route("/sudoku/new")
def sudoku_new():
    SDK.Puzzle.reset_all()
    return redirect(url_for("sudoku"))



if __name__ == "__main__":
	app.run(debug = True)













