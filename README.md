# Laboratorio con Docker y Nginx

Este laboratorio utiliza un contenedor Docker basado en Nginx para servir archivos HTML específicos. Se proporciona un `Dockerfile` para configurar el entorno.

## Construcción de la Imagen
Para construir la imagen del contenedor, ejecuta el siguiente comando en la misma carpeta donde está ubicado el `Dockerfile`:

```sh
docker build -t lab03-lab .
```

## Ejecución del Contenedor
Para ejecutar el contenedor mapeando el puerto 8088 del contenedor al puerto 8088 de la máquina local:

```sh
docker run -d -p 8088:8088 
```

## Acceso a la Aplicación

- Página principal: [http://localhost:8088/index.html](http://localhost:8088/index.html)
- Página de solución: [http://localhost:8088/solution.html](http://localhost:8088/solution.html)
- Página de advertencias y errores: [http://localhost:8088/warningsErrors.html](http://localhost:8088/warningsErrors.html)

## Notas
- Asegúrate de que el archivo `default.conf` está correctamente configurado para que Nginx sirva los archivos estáticos.
- Puedes modificar los archivos HTML y reconstruir la imagen para actualizar el contenido servido.

