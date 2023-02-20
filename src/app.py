"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

#Integracion JWT
app.config["JWT_SECRET_KEY"] = "super-secret"
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route("/signup", methods=["POST"])  
def signup():
    body = request.get_json()
    if "email" not in body:
        print("email")
        return "falta email", 400
    if "password" not in body:
        print("pass")
        return "falta contraseña", 400

    email = body["email"]
    password = body["password"]

    user = User(email=email,password=password,is_active=True)
    db.session.add(user)
    db.session.commit()
  
    return jsonify({"email":email, "password":password})

@app.route('/login', methods=['POST'])
def login():
    #usuario contraseña :D
    body = request.get_json()
    if "email" not in body:
        return "falta email", 400
    if "password" not in body:
        return "falta contraseña", 400

    #validar datos, almacenar datos, mensaje de estado
    email = body["email"]
    password = body["password"]

    user = User.query.filter_by(email = email, password = password).first()

    if(user):
    #otorgar permisos
        expira = datetime.timedelta(minutes=3)
        token_access = create_access_token(identity=email, expires_delta=expira)
        return jsonify({"token": token_access, "email": email}), 200
    else:
        return jsonify({"msg": "Bad username or password"}), 401

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
