from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:''@localhost/gl'
db=SQLAlchemy(app)
ma = Marshmallow(app)

class annonce(ma.Schema):
    class Meta:
        fields =('id_anno','modalite', 'lien', 'tarif', 'date_anno', 'description')


annonce_ob= annonce()

@app.route('/add',methods=['publier'])
def add_annonce():
        description = request.json['description']
        modalite = request.json['modalite']
        lien=request.json['lien']
        tarif=request.json['tarif']
        date_anno=request.json['date_anno']
        
        annonces=annonce(description,modalite,lien,tarif,date_anno)
        db.session.add(annonces)
        db.session.commit()
        return annonce_ob.jsonify(annonces)
    
