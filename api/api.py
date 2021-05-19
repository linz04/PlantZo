from app import app
from shop import *
from form import *
from admin import *
from flask_cors import CORS

if __name__ == '__main__':
    app.run(debug=True)

CORS(app)
