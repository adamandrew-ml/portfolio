from flask import Flask, request, jsonify
import sqlite3
from pprint import pprint
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
app.secret_key = "temp"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     email = db.Column(db.String(120), unique=True, nullable=False)


class Query:
    def __init__(self, db_path):
        self.db_path = db_path
        self.con = sqlite3.connect(self.db_path)
        self.cur = self.con.cursor()

        self.operators = {
            "eql": "=",
            "lik": "like",
            "lst": ">=",
            "mst": "<="
        }

        self.sql_query_open = "select * from players where 1=1 "
        self.query_main = ""
        self.sql_query_close = " order by overall desc limit 100;"

    def convert_to_sql(self, field_name, operator, value):
        value = str(value).lower()
        text_surr = "%" if operator == "lik" else ""
        return f"lower({field_name}) {self.operators[operator]} '{text_surr}{value}{text_surr}'"

    def set_arguments(self, args_dict):
        for key, value in args_dict.items():
            field_name = key[:key.index("__")]
            operator = key[key.index("__")+2:]
            self.query_main += f" and {self.convert_to_sql(field_name, operator, value)}"
        return self

    def set_query(self):
        self.query_string = self.sql_query_open + \
            self.query_main + self.sql_query_close
        self.query = self.cur.execute(self.query_string)
        return self

    def execute_query(self):
        self.results = self.query.fetchall()
        return self

    def get_results(self):
        returnable = {"Things": [{k: v for k, v in zip(
            [i[0] for i in self.query.description], i)} for i in self.results]}
        return returnable


@app.route("/query", methods=["GET", "POST"])
def query():
    args_dict = request.args.to_dict()
    query_class = Query("fifa.db")
    myquery = query_class.set_arguments(args_dict).set_query()
    returnable = myquery.execute_query().get_results()
    return jsonify(returnable)


if __name__ == "__main__":
    app.run(debug=True)
