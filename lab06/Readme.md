# LAB06 - Aplicación Web con Flask y Docker

Este proyecto despliega una aplicación **Flask** bajo la ruta `/lab06` usando **Apache2 + mod_wsgi**, todo dentro de un contenedor **Docker**, replicando el entorno manual basado en Apache y PHP utilizado por el profesor, pero automatizado con Docker.

## Estructura del Proyecto

```
lab06/
├── static/           # Archivos CSS y otros recursos estáticos
├── templates/        # Plantillas HTML
├── app.py            # Aplicación Flask (sin app.run())
├── lab06.conf        # Configuración de Apache (VirtualHost/Alias + WSGI)
├── Dockerfile        # Dockerfile con Ubuntu 20.04 + Apache2 + mod_wsgi + Flask
├── requirements.txt  # Flask únicamente
```

## Cómo Ejecutar la Aplicación

Abre una terminal dentro del directorio `lab06` y ejecuta los siguientes comandos:
Clonar el repositorio
```
git clone https://github.com/CarlaSalle23/iw-grupo-s.git
```
NOTA: tener abierto docker antes de ejecutar los siguiente comandos 

# 1. Construir la imagen Docker:
```
docker build -t mi-lab06-apache-flask .
```
# 2. Ejecutar el contenedor:
```
docker run -d --name lab06-apache-flask-app -p 8085:80 mi-lab06-apache-flask
```

Luego abre tu navegador y visita:

```
http://localhost:8085/lab06
```

## Características Técnicas

- **Ubuntu 20.04** como base (igual que el entorno manual del profesor).
- **Apache2 + mod_wsgi** para servir la app Flask.
- **Alias /lab06/static** para servir recursos estáticos.
- **WSGIScriptAlias /lab06** para enrutar solicitudes hacia Flask.
- **Docker** para automatizar instalación y despliegue.

---

