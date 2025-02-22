from flask import Flask, jsonify
import numpy as np
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Hello, World!"


@app.route("/api/get_number", methods=["GET"])
def get_number():
    num = str(int(np.random.randint(0, 999)))
    return jsonify({"number": num})


if __name__ == "__main__":
    app.run(debug=True)
