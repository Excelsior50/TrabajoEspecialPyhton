from flask import Flask, render_template
from app import app

#Rutas de la app
@app.route('/')
def home():    
    return render_template('index.html')

@app.route('/site/contacto')
def contacto():
    return render_template('site/contacto.html')

@app.route('/site/inicioSesion')
def inicioSesion():
    return render_template('site/inicioSesion.html')

@app.route('/site/productos')
def productos():
    return render_template('site/productos.html')

@app.route('/site/ProcesadoresAMC')
def ProcesadoresAMC():
    return render_template('site/ProcesadoresAMC.html')