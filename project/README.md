# Desafío TCIT - Gestión de Posts

Este proyecto es una aplicación web que permite gestionar posts. Incluye un backend desarrollado con **Node.js** y **NestJS**, y un frontend desarrollado con **React** y **Redux**, estilizado con **Material-UI**.

Realizado por Joaquín Navarro Quijanes.

## Funcionalidades

1. **Insertar posts**: Crear un nuevo post con nombre y descripción.
2. **Eliminar posts**: Eliminar un post existente.
3. **Listar posts**: Mostrar todos los posts en una tabla.
4. **Filtrar posts por nombre**: Buscar posts por nombre localmente.

---

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión LTS recomendada)
- **npm** (incluido con Node.js)
- **Docker** (para la base de datos PostgreSQL)

---

## Instalación

1. Clonar repositorio

Clona este repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

******************************************************************************************

# 2 Configurar el backend

2.1. Configurar la base de datos
El proyecto utiliza PostgreSQL como base de datos. Puedes levantar un contenedor de Docker con el siguiente comando:

docker run --name posts_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=posts_db -p 5432:5432 -d postgres

2.2. Instalar dependencias del backend
Navega a la carpeta del backend e instala las dependencias:

cd server
npm install

2.3. Configurar las variables de entorno
Crea un archivo .env en la carpeta server con el siguiente contenido:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=pass
DATABASE_NAME=posts_db

2.4. Levantar el backend
Levanta el servidor backend con el siguiente comando:

npx nx serve server

El backend estará disponible en http://localhost:3000/api.


******************************************************************************************


3. Configurar el frontend
3.1. Instalar dependencias del frontend
Navega a la carpeta del frontend e instala las dependencias:

cd ../frontend
npm install

3.2. Configurar las variables de entorno
Crea un archivo .env en la carpeta frontend con el siguiente contenido:

VITE_API_URL=http://localhost:3000/api

3.3. Levantar el frontend
Levanta el servidor de desarrollo del frontend con el siguiente comando:

npx nx serve frontend

El frontend estará disponible en http://localhost:4200.

Abre el navegador y navega a http://localhost:4200.
Usa la barra de búsqueda para filtrar posts por nombre.
Usa el formulario para crear nuevos posts.
Usa el botón "Eliminar" en la tabla para borrar posts.

project/
├── server/                # Backend (Node.js + NestJS)
│   ├── src/
│   │   ├── app/           # Configuración principal
│   │   ├── post/          # Módulo de posts
│   │   └── main.ts        # Punto de entrada del backend
│   ├── .env               # Variables de entorno del backend
│   └── package.json       # Dependencias del backend
├── frontend/              # Frontend (React + Redux)
│   ├── src/
│   │   ├── components/    # Componentes de React
│   │   ├── features/      # Redux slices
│   │   ├── app/           # Configuración de Redux
│   │   └── api.ts         # Consultas al backend
│   ├── .env               # Variables de entorno del frontend
│   └── package.json       # Dependencias del frontend
└── [README.md](http://_vscodecontentref_/1)              # Documentación del proyecto

Notas
Asegúrate de que Docker esté corriendo antes de levantar el backend.
Si cambias el puerto del backend o frontend, actualiza las variables de entorno correspondientes.
Para producción, configura correctamente las variables de entorno y usa un servidor como Nginx para servir el frontend.

