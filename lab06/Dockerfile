# PASO 1: Usar Ubuntu 20.04 como base (como en el ejemplo del profesor)
FROM ubuntu:20.04

# Configurar para que no pida interacciones durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# PASO 2: Actualizar e Instalar dependencias del sistema (Apache, Python, pip, mod_wsgi)
RUN apt-get update && apt-get install -y \
    apache2 \
    python3 \
    python3-pip \
    libapache2-mod-wsgi-py3 \
    vim `# Opcional, como en el ejemplo` \
    && rm -rf /var/lib/apt/lists/*

# PASO 3: Instalar dependencias de Python (Flask)
# Copiamos requirements.txt primero para usar caché de Docker
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# PASO 4: Crear directorio para la aplicación web (como en el ejemplo /webapps/lab06)
RUN mkdir -p /webapps/lab06/static
RUN mkdir -p /webapps/lab06/templates

# PASO 5: Copiar el código de la aplicación Flask al directorio creado
COPY ./static /webapps/lab06/static/
COPY ./templates /webapps/lab06/templates/
COPY app.py /webapps/lab06/

# PASO 6: Crear el script de entrada WSGI para conectar Apache con Flask
# Este archivo le dice a mod_wsgi cómo encontrar tu objeto 'app' de Flask
RUN echo "import sys" > /webapps/lab06/app.wsgi && \
    echo "sys.path.insert(0, '/webapps/lab06')" >> /webapps/lab06/app.wsgi && \
    echo "from app import app as application" >> /webapps/lab06/app.wsgi

# PASO 7: Configurar Apache para el "VirtualHost" o Alias /lab06
# Copiar nuestro archivo de configuración personalizado
COPY lab06.conf /etc/apache2/sites-available/lab06.conf

# Habilitar nuestro sitio, deshabilitar el sitio por defecto de Apache,
# y asegurarse que el módulo wsgi esté habilitado.
RUN a2ensite lab06.conf && \
    a2dissite 000-default.conf && \
    a2enmod wsgi

# PASO 8: Exponer el puerto 80 (el puerto estándar de Apache)
EXPOSE 80

# PASO 9: Comando para iniciar Apache en primer plano cuando el contenedor arranque
# Esto mantiene el contenedor corriendo
CMD ["apache2ctl", "-D", "FOREGROUND"]