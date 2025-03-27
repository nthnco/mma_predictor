import numpy as np
from flask import Flask, request, jsonify, render_template

import pickle

flask_app = Flask(__name__)
model = pickle.load(open("mma_predictor.pkl", "rb"))


@flask_app.route("/")
def Home():
    return render_template("index.html")


@flask_app.route("/predict", methods=["POST"])
def predict():
    features = [float(x) for x in request.form.values()]
    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    output = int(prediction[0])
    return jsonify({"prediction": output})


if __name__ == "__main__":
    flask_app.run(debug=True)
