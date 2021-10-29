from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.chicago_crime
crime_type_summary = db.crime_type_summary

@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    summary = crime_type_summary.find()

    new_data = []
    for dictionary in crime_type_summary:
        new_d = {k:v for k,v in dictionary.items() if k != '_id'}
        new_data.append(new_d)

    summary = {k:v for k,v in summary.items() if k not in ['_id']}

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", summary=summary)


if __name__ == "__main__":
    app.run(debug=True)