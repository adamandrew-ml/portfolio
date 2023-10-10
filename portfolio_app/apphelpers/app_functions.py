from flask import Flask, render_template, url_for, redirect, request
import pandas as pd
import numpy as np
from flask_wtf import FlaskForm
from wtforms import StringField, StringField, SubmitField, HiddenField
# from wtforms.validators import InputRequired, Length
from datetime import datetime as dt
import pandas as pd
import numpy as np
from pandas.api.types import infer_dtype
import sqlite3
from tqdm import tqdm
import os

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
    



class FIFA_Processing:
    
    def __init__(self, database_name, table_name, process_from_scratch):
        
        self.database_name = database_name[::-1][:database_name[::-1].index("/")][::-1]
        self.database_path = database_name[:database_name.index(self.database_name)]

        self.table_name     = table_name
        self.from_scratch   = process_from_scratch
        self.connection     = None
        self.cursor         = None

        self.sysdata   = ["sofifa_id",  'real_face', 'player_url', 'year']
        self.constants = ['short_name','long_name', 'dob']
        self.variables = ["value_eur", 'nation_position', 'club_name', 'potential', 'wage_eur', 'international_reputation',
                          'release_clause_eur', 'loaned_from', 'weight_kg', 'league_name', 'contract_valid_until', 'player_positions',
                          'height_cm', 'preferred_foot', 'team_position', 'work_rate', 'joined', 'age', 'body_type',
                          'team_jersey_number', 'league_rank', 'nation_jersey_number', 'nationality', 'player_tags', 'player_traits']
        self.abilities = ['overall', 'shooting', 'dribbling', 'mentality_positioning', 'goalkeeping_positioning', 'goalkeeping_diving',
                          'goalkeeping_kicking', 'gk_speed', 'goalkeeping_handling', 'skill_moves', 'skill_ball_control',
                          'defending', 'gk_positioning', 'gk_reflexes', 'attacking_volleys', 'weak_foot', 'power_long_shots',
                          'movement_reactions', 'movement_balance', 'defending_standing_tackle', 'gk_diving', 'movement_acceleration',
                          'attacking_finishing', 'movement_sprint_speed', 'skill_curve', 'mentality_composure', 'skill_dribbling',
                          'mentality_aggression', 'attacking_heading_accuracy', 'gk_handling', 'power_shot_power', 'mentality_vision',
                          'goalkeeping_reflexes', 'passing', 'mentality_interceptions', 'pace', 'skill_long_passing', 'defending_marking',
                          'power_strength', 'defending_sliding_tackle', 'attacking_short_passing', 'physic', 'mentality_penalties',
                          'gk_kicking', 'skill_fk_accuracy', 'power_stamina',  'movement_agility', 'power_jumping', 'attacking_crossing']
        self.positions = ['cf','lb','ls','lm','rs','cb','rf','st','rm','lf','cm','rw','rb','lw',
                          'lcb','cam','rdm','lcm','ldm','rcm','rcb','rwb','lwb','ram','lam','cdm']
        self.to_remove = ["player_traits", "player_tags"]
        self.semantics = {}
        for i in "sysdata", "constants", "variables", "positions", "abilities", :
            for k in eval(f"self.{i}"):
                self.semantics[k] = i
        
        self.set_database_connection()
        if self.from_scratch == True:
            self.import_data()
            self.data_quality_fix()
            self.apply_tags()
            self.apply_traits()
            self.replace_nulls()
            self.upload_to_database()
        
    def get_metadata(self, df):
        meta = pd.DataFrame({
            "colname"       : [i for i in df.columns],
            "count"         : [len(df[i]) for i in df.columns],
            "null_count"    : [df[i].isnull().sum() for i in df.columns],
            "data_type"     : [infer_dtype(df[i]) for i in df.columns]
        })
        return meta

    def import_data(self):
        print("Importing data")
        print(os.getcwd())
        self.data = {}
        for year in np.arange(15, 22):
            self.data[f"df_{str(year)}"] = {"df": pd.read_csv(f"./data/players_{str(year)}.csv")}
            self.data[f"df_{str(year)}"]["df"]["year"] = int("20" + str(year))
        print("Successfully imported data\n")
    
    def data_quality_fix(self):
        print("Applying data quality fixes")
        for year in np.arange(15, 22):
            df = self.data[f"df_{str(year)}"]["df"]
            try:
                main_df = pd.concat([main_df, df[main_df.columns]], axis = 0).reset_index(drop=True)
            except:
                main_df = df.copy()
        group_cols  = ["long_name","short_name","player_url","dob","real_face"]
        checking_df = main_df[self.sysdata + self.constants]
        master      = checking_df.groupby(["sofifa_id"])[group_cols].agg("max")[group_cols].drop_duplicates().reset_index(drop=False)
        master_df   = pd.merge(left = main_df.drop(group_cols, axis = 1), right = master,
                               left_on = "sofifa_id", right_on = "sofifa_id", how = "left")
        self.master_df = master_df.copy()[~pd.isnull(master_df["club_name"])]
        for colname in ["short_name", "long_name", "club_name", "league_name", "loaned_from"]:
            self.master_df[colname] = self.master_df[colname].apply(lambda x: x.replace("'", "") if type(x) == str else x)
        print("Successfully applied data quality fixes\n")

    def apply_tags(self):
        print("Applying transformation to 'player_tags'")
        all_tags = []
        logic = lambda x: [k.replace("#", "").strip().replace(" ", "_") for k in str(x).split(",")]
        for i in self.master_df["player_tags"]:
            if not pd.isnull(i):
                all_tags.extend(logic(i))
        all_tags = list(set(all_tags))
        self.master_df["player_tags"] = self.master_df["player_tags"].apply(lambda x: logic(x))
        for tagname in all_tags:
            self.master_df[f"tag_{tagname}"] = self.master_df["player_tags"].apply(lambda x: 1 if tagname in x else 0)
        self.master_df = self.master_df.drop(["player_tags"], axis = 1)
        print("Successfully applied transformation to 'player_tags'\n")

    def apply_traits(self):
        print("Applying transformation to 'player_traits'")
        all_traits = []
        logic = lambda x: [k.replace("(AI)", "").strip().replace(" ","_").replace("-","") for k in str(x).split(",")]
        for i in self.master_df["player_traits"]:
            if not pd.isnull(i):
                all_traits.extend(logic(i))
        all_traits = list(set(all_traits))
        self.master_df["player_traits"] = self.master_df["player_traits"].apply(lambda x: logic(x))
        for traitname in all_traits:
            self.master_df[f"trait_{traitname}"] = self.master_df["player_traits"].apply(lambda x: 1 if traitname in x else 0)
        self.master_df = self.master_df.drop(["player_traits"], axis = 1)
        print("Successfully applied transformation to 'player_traits'\n")

    def replace_nulls(self):
        print("Replacing null values")
        null_replacements = {
            "nation_position" : "NA",
            "nation_jersey_number" : "NA",
            "loaned_from" : "NA"
        }
        for k, v in list(null_replacements.items()):
            self.master_df[k] = self.master_df[k].apply(lambda x: v if pd.isnull(x) else x)
        self.master_df["has_release_clause"] = self.master_df["release_clause_eur"].apply(lambda x: "No" if pd.isnull(x) else "Yes")
        print("Successfully replaced null values\n")

    def create_sql_statement(self):
        statement = ""
        type_refs = {"integer" : "INTEGER", "floating": "FLOAT", "string": "TEXT", "mixed": "TEXT"}
        generate_sql_statement = lambda x: f"{x['colname']} {type_refs[x['data_type']]}"
        meta = self.get_metadata(self.master_df)
        meta["sql_statement"] = meta.apply(lambda x: generate_sql_statement(x), axis = 1)
        statement += f"CREATE TABLE IF NOT EXISTS {self.table_name} ("
        for eachrow in range(len(meta)):
            statement += f"{meta.loc[eachrow, 'sql_statement']}, "
        statement = statement.strip()[:-1].strip()
        statement += ");"
        return statement

    def insert_sql_statement(self, x):
        statement = f"INSERT INTO {self.table_name} VALUES ("
        for i in x:
            statement += f"'{i}', "
        statement = statement.strip()[:-1].strip() + ");"
        return statement
    
    def upload_to_database(self):
        self.set_database_connection()
        self.failed_attempts = []
        if self.from_scratch == True:
            print("Dropping table")
            self.cursor.execute(f"DROP TABLE IF EXISTS {self.table_name};")
            print("Successfully dropped table\n")
        print("Creating table")
        self.cursor.execute(self.create_sql_statement())
        print("Successfully created table\n")
        print("Inserting data into table")
        for i in tqdm(range(len(self.master_df))):
            self.cursor.execute(self.insert_sql_statement(self.master_df.iloc[i, :]))
        print("Successfully inserted data into table\n")
        self.connection.commit()

    def set_database_connection(self):
        root_path = os.getcwd()
        os.chdir(self.database_path)
        self.connection = sqlite3.connect(self.database_name)
        self.cursor = self.connection.cursor()
        os.chdir(root_path)

    def end_database_connections(self):
        if self.connection is not None:
            self.connection.close()
        self.connection = None
        self.cursor = None

    def select_from_database(self, listed_columns = [], return_as = "raw"):
        
        if self.connection is None:
            self.set_database_connection()
        base = "SELECT "
        if len(listed_columns) > 0:
            for i in listed_columns:
                base += f"{i}, "
            base = base.strip()[:-1].strip() + " FROM players"
        else:
            base += f"* FROM players"
        output = self.cursor.execute(base)
        df_columns = [i[0] for i in output.description]
        output = output.fetchall()
        if return_as == "DataFrame":
            output = pd.DataFrame(output, columns = df_columns)
        return output
    


    