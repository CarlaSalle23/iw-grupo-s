# app.py

from flask import Flask, render_template, jsonify

# 1. Creamos la instancia de Flask, indicando dónde están los static y templates
app = Flask(
    __name__,
    static_folder='static',
    template_folder='templates'
)

# 2. Ruta principal, ya existente
@app.route('/')
def index():
    return render_template('index.html')


# 3. NUEVO: endpoint GET /info
@app.route('/info', methods=['GET'])
def info():
    """
    Devuelve un JSON con información básica de la aplicación.
    Por Apache+mod_wsgi montada en /lab06, llegará como /lab06/info.
    """
    return jsonify({
        'app': 'LAB06 Flask App',
        'version': '1.0.0',
        'description': 'Aplicación de ejemplo con Flask y Docker'
    })


# Nota: no hace falta el bloque if __name__ == '__main__'
#       porque Apache/mod_wsgi lo ejecuta directamente.
