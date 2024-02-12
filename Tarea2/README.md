# Tarea 1

## Descripción

primera tarea de la clase de desarrollo de servidores

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

    URL=https://jsonplaceholder.typicode.com  # La URL base que la aplicación usará para las solicitudes externas
    ```

## Testing

se puede usar el archivo test_api.http para testear los endpoints
