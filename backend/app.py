from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from flask_jwt_extended import JWTManager
from config import Config
from models import db
from routes import auth

app = Flask(__name__)
app.config.from_object(Config)

# Инициализация расширений
db.init_app(app)
jwt = JWTManager(app)
CORS(app)

# Регистрация blueprint'ов
app.register_blueprint(auth, url_prefix="/api")


with app.app_context():
    db.create_all()
    print("Tables created successfully")


if __name__ == '__main__':
    app.run(debug=True)
