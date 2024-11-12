# Frontend de Grow Analytics (Prueba técnica) Next JS (React) + Tailwind CSS + ANT Design

## Descripción

Este proyecto es el frontend de la prueba técnica de Grow Analytics. Se trata de una aplicación web que permite a los usuarios registrarse, iniciar sesión y visualizar un dashboard con información de los usuarios.

## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) (v18.0.0 o superior)
- [pnpm](https://pnpm.io/) (opcional, pero recomendado)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/anthonidev/grow-analytics-frontend.git
   cd grow-analytics-backend
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install # o pnpm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias:

   ```
    AUTH_BACKEND_URL=
    NODE_ENV=
    NEXTAUTH_URL=
    NEXTAUTH_SECRET=
    JWT_SECRET=
   ```

## Uso

### Comandos para desarrollo

- Iniciar el servidor en modo desarrollo:

  ```bash
    npm run dev
  ```

- Construir el proyecto:

  ```bash
  npm run build
  ```

- Ejecutar pruebas:
  ```bash
  npm run test
  ```

## Tecnologías utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **Tailwind CSS**: Framework de CSS para el diseño de interfaces de usuario.
- **Ant Design**: Librería de componentes de React.
- **NextAuth.js**: Librería de autenticación para Next.js.
- **Jest**: Framework de pruebas para JavaScript.
- **Redux Toolkit**: Librería para el manejo del estado de la aplicación.
- **Axios**: Cliente HTTP basado en promesas.
