from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager



app = Flask(__name__)
bcrypt = Bcrypt(app)

app.config['JWT_SECRET_KEY'] = 'secret'
jwt = JWTManager(app)

