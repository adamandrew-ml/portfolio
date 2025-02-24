from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS  # Import CORS
import numpy as np
import os

app = Flask(__name__, static_folder = "./frontend-react/dist")
CORS(app)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/api/get_number")
def get_number():
    num = str(int(np.random.randint(0, 999)))
    return jsonify({"number": num})


if __name__ == "__main__":
    app.run()
