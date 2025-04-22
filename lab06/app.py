from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    # Asegúrate que la plantilla index.html usa la ruta correcta para el CSS:
    # /lab06/static/style.css
    return render_template('index.html')