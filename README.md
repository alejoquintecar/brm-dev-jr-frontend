# Prueba Técnica (Desarrollador Jr. Frontend)

## ❗️ Pasos de instalación

- 📄 Clona el repositorio

git clone https://github.com/alejoquintecar/brm-dev-jr-frontend.git

cd brm-dev-jr-frontend.git

- Instala las dependencias

npm install  O  yarn install

- Ejecuta el proyecto en modo desarrollo

npm run dev  O  yarn dev

- Portafolio

https://drive.google.com/drive/folders/1JtHGozmVquQbpXzFSwY5p3pdydLwklol?usp=sharing

## 🗃️ Decisiones técnicas

- Archivo (api.ts)

En muchos proyectos es común que una aplicación consuma datos desde diferentes servicios externos o internos, cada uno con su propia URL base. Por esta razón, estructuré api.ts como una herramienta reutilizable que permite configurar fácilmente la URL base y realizar peticiones sin duplicar lógica.

- Archivo (components/Globales/AppDataTable.vue)

Este componente fue creado para simplificar y estandarizar la visualización de listados de registros en toda la aplicación.
Listar datos es una tarea frecuente en cualquier proyecto.
En lugar de repetir estructuras, estilos y lógica en cada vista, AppDataTable.vue actúa como un componente global reutilizable que encapsula las funcionalidades comunes de una tabla.

- Archivo (src/router/routes.ts)

Este archivo define las rutas principales de la aplicación usando una estructura clara, concisa y escalable.
El enrutamiento fue organizado con el objetivo de mantener una estructura simple pero modular, separando visualmente cada grupo de rutas según su contexto (público, módulos específicos, errores, etc.).

- Archivo (src/utilities/app.ts)
Este archivo reúne funciones útiles y sencillas que ayudan a validar tipos de datos y detectar si un valor está vacío. Además, incluye una alerta tipo toast (alertToast) basada en SweetAlert, lista para usarse desde cualquier parte de la aplicación.


