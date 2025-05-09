# 📘 Silabo App

## Descripción
`Silabo App` es una aplicación web interactiva desarrollada con **Vue.js 3**, **TailwindCSS** y **Bootstrap**. Su objetivo es facilitar la gestión, edición y visualización dinámica de sílabos académicos universitarios, permitiendo a los docentes estructurar contenidos por unidades y semanas, definir competencias, agregar metodologías, bibliografía y criterios de evaluación.

---

## 🚀 Tecnologías utilizadas
- [Vue 3](https://vuejs.org/) - Framework JavaScript progresivo
- [Vue Router](https://router.vuejs.org/) - Enrutamiento oficial para Vue.js
- [Bootstrap 5](https://getbootstrap.com/) - Framework CSS para interfaces responsive
- [Tailwind CSS](https://tailwindcss.com/) - Framework de utilidades CSS
- [Docker](https://www.docker.com/) - Plataforma de contenedores

---

## 📁 Estructura del proyecto

```
silabo-app/
├── public/                 # Archivos públicos estáticos
├── src/                    # Código fuente principal
│   ├── assets/             # Recursos estáticos (CSS, imágenes)
│   ├── components/         # Componentes Vue reutilizables
│   │   ├── SilaboEditor.vue # Editor de secciones del sílabo
│   │   └── ModalBase.vue   # Componente para ventanas modales
│   ├── data/               # Datos de la aplicación
│   │   └── silabo.json     # Estructura de datos del sílabo
│   ├── views/              # Vistas principales
│   │   ├── HomeVi.vue      # Vista de visualización del sílabo
│   │   └── EditView.vue    # Vista de edición del sílabo
│   ├── router/             # Configuración de rutas
│   ├── App.vue             # Componente raíz
│   └── main.js             # Punto de entrada de la aplicación
├── Dockerfile              # Instrucciones para construir la imagen Docker
├── docker-compose.yml      # Configuración para ejecución con Docker
├── package.json            # Dependencias y scripts de la aplicación
└── README.md               # Documentación del proyecto
```

---

## 📋 Funcionalidades principales

- **Visualización de sílabos**: Interfaz amigable para consultar información académica
- **Edición completa**: Modificación de todos los elementos del sílabo
- **Gestión de unidades**: Organización de contenidos por unidades y semanas
- **Sistema de evaluación**: Definición de criterios y fechas de evaluación
- **Firma digital**: Carga de firma del docente para oficializar el documento

---

## ✅ Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js 14+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker & Docker Compose](https://docs.docker.com/compose/) (opcional para contenedores)

---

## ⚙️ Instalación local (modo desarrollo)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/silabo-app.git
cd silabo-app
```

### 2. Instalar dependencias

```bash
npm install
# o con yarn
yarn install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run serve
# o con yarn
yarn serve
```

Abre tu navegador en:  
📍 http://localhost:8080

---

## 🐳 Ejecución con Docker

### 1. Construir y levantar el contenedor

```bash
docker-compose up --build
```

La aplicación estará disponible en:  
📍 http://localhost:8085

---

## 🛠️ Personalización y configuración

Puedes personalizar la configuración de la aplicación editando los archivos:

- `vue.config.js` - Configuración del proyecto Vue
- `tailwind.config.js` - Personalización de Tailwind CSS
- `postcss.config.js` - Configuración de PostCSS

---

## 📝 Próximas mejoras

- Almacenamiento persistente de datos
- Exportación a PDF
- Sistema de autenticación
- Historial de versiones
- Plantillas predefinidas

---

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Sube tu rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
