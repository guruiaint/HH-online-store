from flask import Flask, render_template, abort, request
import json
from data import data

app = Flask(__name__) # create a flask app

me = {
    "name": "Alex",
    "last_name": "Jones",
    "age": 33,
    "email": "guruiaint@gmail.com",
    "address": {
        "number": 42,
        "street": "Wallaby Way"
    }
}


@app.route('/')
def home_page():
    return render_template("index.html")




@app.route("/about")
def about_me():
    return me["name"] + " " + me["last_name"]



@app.route("/about/email")
def about_me_email():
    return me["email"]



@app.route("/api/catalog")
def get_catalog():
    return json.dumps(data)

@app.route("/api/catalog", methods = ['POST'])
def save_product():
    print(request)

    return "OK"


@app.route("/api/catalog/cheapest")
def get_cheapest():
    cheapest = data[0]
    for item in data:
        if(item["price"] < cheapest["price"]):
            cheapest = item.price

    return json.dumps(cheapest)

if __name__ == '__main__':
    app.run(debug=True)