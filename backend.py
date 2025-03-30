import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle

flask_app = Flask(__name__)
CORS(flask_app)

model = pickle.load(open("mma_predictor.pkl", "rb"))


@flask_app.route("/")
def home():
    return jsonify({"message": "Welcome to the MMA Predictor API!"})


@flask_app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        fighter1 = data.get("fighter1", {})
        fighter2 = data.get("fighter2", {})

        features = [
            float(fighter1[key]) - float(fighter2[key]) for key in fighter1.keys()
        ]
        final_features = [np.array(features)]

        prediction = model.predict(final_features)
        output = int(prediction[0])

        return jsonify({"prediction": output})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    flask_app.run(debug=True)
