from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/", methods=['GET'])
@cross_origin(supports_credentials=True)
def index():
    return jsonify("Connected")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)