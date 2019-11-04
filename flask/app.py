#!/usr/bin/python
from flask import Flask
from flask import render_template
from flask import request

# --------------------------------------------------

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

# --------------------------------------------------

# Serve the sample page
@app.route("/")
def main():
    return  render_template('index.html', title='Sample Flask App')

# --------------------------------------------------

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
