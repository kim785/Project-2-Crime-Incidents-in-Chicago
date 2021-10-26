import os
import pandas as pd
import json

from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

# Create an instance of Flask
app = Flask(__name__)


#################################################
# Database Setup
#################################################
# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/chicago_crime")

# Route to render index.html template using data from Mongo
@app.route("/")
def index():
    # Find one record of data from the mongo database
    chicago_crime_data = mongo.db.collection.find_one()
    # Return template and data
    return render_template("index.html", chicago_crime_data=chicago_crime_data)


if __name__ == "__main__":
    app.run(debug=True)