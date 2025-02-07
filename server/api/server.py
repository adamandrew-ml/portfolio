from flask import Flask
import numpy as np

app = Flask(__name__)


@app.route("/api/random_number", methods=['GET'])
def random_number():
    return np.random.randint(0, 999)


if __name__ == "__main__":
    app.run(debug=True)
