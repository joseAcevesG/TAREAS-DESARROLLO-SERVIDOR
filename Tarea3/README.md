# Tarea 3

## Descripción

tarea 3 de la materia de desarrollo de aplicaciones web

## Prerequisites

-   Node.js (v20.11.0)
-   npm (v10.2.4)

## Installation

```sh
npm install

npm start / npm run dev
```

## Configuración del archivo .env

Para que la aplicación funcione correctamente, es necesario configurar algunas variables de entorno. Esto se hace a través de un archivo `.env` en la raíz del proyecto. Sigue los pasos a continuación para configurar tu archivo `.env`:

1. **Crea un nuevo archivo** en la raíz del proyecto y nómbralo `.env`.

2. **Abre el archivo `.env`** con tu editor de texto preferido.

3. **Agrega las siguientes líneas al archivo**, las cuales son necesarias para la configuración básica de la aplicación:

    ```plaintext
    PORT=3000               # El puerto en el que se ejecutará la aplicación

    DB_URL=<mongo url> # La URL de la base de datos de mongo
    ```

## Testing

se puede usar el archivo test_api.http para testear los endpoints