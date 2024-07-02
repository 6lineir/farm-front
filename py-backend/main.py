from flask import Flask, render_template,jsonify, request

import json


# Server API for TonCakeSwap Farm Coin

app = Flask(__name__)


user_object = {
    "user_id" : 1,
    "username": "usr",
    "frends": [0,1,2],
    "coin": 1000,
    
}


@app.route('/api', methods=['GET'])
def Api_index():
 return jsonify(user_object)






@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3003, debug=True)