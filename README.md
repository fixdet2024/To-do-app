# 📝 Todo App - Lista de Tareas con React, Node.js y MySQL

Una aplicación fullstack de gestión de tareas (ToDo App), construida con React para el frontend y Node.js + Express + MySQL para el backend. Esta app permite crear, marcar como completadas y eliminar tareas, con diseño responsive y notificaciones.

---

## 📅 Año de desarrollo

> Julio 2025

---

## 🛠️ Tecnologías utilizadas

### 🔹 Frontend

- [React](https://reactjs.org/) `v18+`
- [Vite](https://vitejs.dev/) como bundler
- [Axios](https://axios-http.com/) para peticiones HTTP
- [React Hot Toast](https://react-hot-toast.com/) para notificaciones
- CSS personalizado con media queries

### 🔹 Backend

- [Node.js](https://nodejs.org/) `v18+`
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- Base de datos: **MySQL** `v8+`

---

## 📦 Instalación y ejecución local

### 🔹 1. Clonar el repositorio

```bash
git clone https://github.com/fixdet2024
cd todoapp-react

npm install
npm run dev

recomendacion  abrir terminal dedicada para el frontend

---

🔹 2. Instalación del backend (Node.js + MySQL)

📁 Ir a la carpeta del backend:

cd backend
npm install
npm run dev

Recomendación: abre una terminal dedicada solo para el backend

---

📂 La base de datos se encuentra dentro de la carpeta data.

Escribe una nueva tarea y haz clic en Agregar
Puedes:

Marcar como completada
Eliminar la tarea

---

📂 Ver tareas separadas por sección (Pendientes y Completadas usando <details>)

Responsive Design
El diseño se adapta automáticamente a:

Teléfonos móviles
Escritorios
Tablets

---

📂 Estructura del proyecto
pgsql
Copiar
Editar
todoapp-react/
├── backend/
│   ├── index.js
│   ├── .env
│   └── db.js
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
└── package.json

Desarrollado Jefer fixdet2024
```
