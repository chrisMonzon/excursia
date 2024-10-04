from flask import Flask, request
import Kayak_Webscraping
app = Flask(__name__)

# @app.route("/members")

#prices = Kayak_Webscraping.scrape()

@app.route("/members")
def members():
    from_location = request.args.get('from_location')  # Assuming you're passing these values as query parameters
    to_location = request.args.get('to_location')
    departure_date = request.args.get('departure_date')
    return_date = request.args.get('return_date')

    result = Kayak_Webscraping.scrape(from_location, to_location, departure_date, return_date)

    return {"result": result}

if __name__ == "__main__":
    app.run(debug=True)

# def members():
#     return {"members":  Kayak_Webscraping.scrape()}

# if __name__ == "__main__":
#     app.run(debug=True)
