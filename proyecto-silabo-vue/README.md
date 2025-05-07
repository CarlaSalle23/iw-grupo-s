# Sistema de Sílabos

Aplicación web desarrollada en Vue.js para la gestión de sílabos de cursos universitarios.

## Características

- Gestión de datos generales del curso
- Administración de competencias generales y específicas
- Creación y edición de unidades y semanas
- Gestión de metodologías por unidad
- Registro de fuentes de consulta en formato APA
- Carga de firma del profesor
- Vista previa del sílabo
- Interfaz intuitiva y responsiva

## Requisitos

- Node.js 18 o superior
- npm 8 o superior
- Docker y Docker Compose (para despliegue)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/proyecto-silabo-vue.git
cd proyecto-silabo-vue
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Despliegue con Docker

1. Construir la imagen:
```bash
docker-compose build
```

2. Iniciar el contenedor:
```bash
docker-compose up -d
```

La aplicación estará disponible en http://localhost

## Estructura del Proyecto

```
proyecto-silabo-vue/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── DatosGenerales.vue
│   │   ├── Competencias.vue
│   │   ├── Sumilla.vue
│   │   ├── Unidad.vue
│   │   ├── Semana.vue
│   │   ├── Metodologias.vue
│   │   ├── FuentesConsulta.vue
│   │   ├── Actividades.vue
│   │   ├── CriteriosEvaluacion.vue
│   │   └── FirmaUpload.vue
│   ├── store/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── Preview.vue
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── .dockerignore
├── .gitignore
├── babel.config.js
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## Tecnologías Utilizadas

- Vue.js 3
- TypeScript
- Pinia (Gestión de estado)
- Vue Router
- Docker
- Nginx

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
