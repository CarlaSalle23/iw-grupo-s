# LAB06 - Aplicación Web con Flask y Docker

Este proyecto implementa una aplicación web sencilla utilizando **Flask** como framework de desarrollo, Docker como contenedor y `docker-compose` para orquestación. El objetivo es replicar la estructura de un servidor web con VirtualHost, accediendo mediante la ruta:  
👉 `http://localhost:8088/lab06`

---

## 📁 Estructura del Proyecto

LAB06/
├── static/
│   └── style.css              # Archivo de estilos CSS para la aplicación
├── templates/
│   └── index.html             # Página principal de la aplicación (HTML con Jinja2)
├── app.py                     # Aplicación principal de Flask
├── default.conf               # Configuración del servidor (por ejemplo, para Nginx)
├── docker-compose.yml         # Orquestación de servicios con Docker Compose
├── Dockerfile                 # Imagen personalizada de Docker para la app
├── requirements.txt           # Lista de dependencias de Python/Flask


---

## 🚀 Cómo ejecutar la aplicación

### 1. Clonar el repositorio

```bash
git clone <URL-del-repositorio>
cd LAB06
2. Construir la imagen Docker
bash
Copiar
Editar
docker-compose build
3. Levantar el contenedor
bash
Copiar
Editar
docker-compose up -d
Esto iniciará la app Flask expuesta en http://localhost:8088.

🌐 Acceso a la aplicación
Abre tu navegador y visita:

👉 http://localhost:8088/lab06

🐳 Detalles del contenedor
Puerto interno (contenedor): 80

Puerto externo (host): 8088

Lenguaje: Python 3.9

Framework: Flask

Servidor Web: Integrado con Flask (puede ser reemplazado por Gunicorn + Nginx si se desea escalar)

🧪 Tecnologías utilizadas
Python 3.9

Flask

Docker

Docker Compose

HTML/CSS (básico)

