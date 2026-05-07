# Grupo Falpat - Web Project

Este proyecto es una landing page moderna para **Grupo Falpat**, desarrollada con Vite, Firebase y lista para ser desplegada en Render.

## 🚀 Tecnologías
- **Vite**: Herramienta de construcción rápida para desarrollo frontend.
- **Firebase Firestore**: Base de datos para gestionar mensajes de contacto.
- **Render**: Plataforma recomendada para el despliegue automático.

## 🛠️ Configuración Inicial

### 1. Clonar y Preparar el Repositorio
Como ya tienes los archivos en tu carpeta local:
1. Inicializa un repositorio Git: `git init`
2. Sube los archivos a un nuevo repositorio en GitHub.

### 2. Configurar Firebase
Para que el formulario de contacto funcione, debes configurar tu propio proyecto en Firebase:
1. Ve a [Firebase Console](https://console.firebase.google.com/).
2. Crea un nuevo proyecto llamado "Falpat".
3. Añade una **Web App**.
4. Copia las credenciales (apiKey, projectId, etc.).
5. Pégalas en el archivo `firebase-config.js` de este proyecto.
6. En el menú de Firebase, activa **Firestore Database** en modo producción (o prueba) y crea una colección llamada `contact_messages`.

### 3. Despliegue en Render
Render detectará automáticamente el archivo `package.json`. Sigue estos pasos:
1. Crea una cuenta en [Render](https://render.com/).
2. Haz clic en **New +** > **Static Site**.
3. Conecta tu repositorio de GitHub.
4. Configuración:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. ¡Listo! Cada vez que hagas un `git push`, Render actualizará tu página automáticamente.

## 📂 Estructura de Archivos
- `index.html`: Página principal.
- `main.js`: Lógica de la aplicación y Firebase.
- `style.css`: Estilos premium y responsive.
- `firebase-config.js`: Configuración de la base de datos.
- `public/`: (Opcional) Para recursos estáticos que no cambian.

## 💻 Desarrollo Local
Si quieres seguir editando el código:
```bash
npm install
npm run dev
```
Abre el link que te proporcione la terminal (ej: `http://localhost:5173`).
