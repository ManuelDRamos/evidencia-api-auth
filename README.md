# Servicio Web de Autenticación

## Descripción

Este proyecto corresponde a la evidencia **GA7-220501096-AA5-EV01 - Diseño y desarrollo de servicios web - caso**, del programa **Tecnólogo en Análisis y Desarrollo de Software del SENA**.

El proyecto consiste en desarrollar un servicio web que permite registrar usuarios e iniciar sesión mediante un usuario y una contraseña.

La autenticación verifica los datos registrados y devuelve un mensaje indicando si el acceso fue correcto o si ocurrió un error.

## Tecnologías utilizadas

* Node.js
* Express
* JavaScript
* Postman
* Git
* GitHub

## Estructura del proyecto

```text
evidencia-api-auth/
│
├── src/
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   └── app.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Instalación

Para instalar las dependencias del proyecto, abrir una terminal dentro de la carpeta del proyecto y ejecutar:

```bash
npm install
```

## Ejecución

Para iniciar el servidor se debe ejecutar:

```bash
node src/app.js
```

Cuando el servidor se encuentre funcionando, estará disponible en:

```text
http://localhost:3000
```

## Registro de usuario

Para registrar un usuario se utiliza el siguiente endpoint:

**POST**

```text
http://localhost:3000/api/auth/register
```

### Datos de ejemplo

```json
{
    "usuario": "manuel",
    "password": "123456"
}
```

### Respuesta

```json
{
    "mensaje": "Usuario registrado correctamente"
}
```

Si se intenta registrar nuevamente un usuario que ya existe, el servicio devuelve:

```json
{
    "mensaje": "El usuario ya existe"
}
```

## Inicio de sesión

Para iniciar sesión se utiliza:

**POST**

```text
http://localhost:3000/api/auth/login
```

### Datos de ejemplo

```json
{
    "usuario": "manuel",
    "password": "123456"
}
```

### Autenticación correcta

Cuando el usuario y la contraseña son correctos, el servicio devuelve:

```json
{
    "mensaje": "Autenticación satisfactoria"
}
```

### Autenticación incorrecta

Cuando el usuario no existe o la contraseña es incorrecta, el servicio devuelve:

```json
{
    "mensaje": "Error en la autenticación"
}
```

## Almacenamiento

Para este proyecto no se utiliza una base de datos.

Los usuarios registrados se almacenan temporalmente en memoria mientras el servidor se encuentra funcionando. Al detener el servidor, la información registrada se pierde.

## Pruebas

Las pruebas del servicio web fueron realizadas utilizando **Postman**.

Se realizaron las siguientes pruebas:

1. Registro correcto de un usuario.
2. Intento de registrar un usuario que ya existe.
3. Inicio de sesión con credenciales correctas.
4. Inicio de sesión con una contraseña incorrecta.
5. Inicio de sesión con un usuario que no existe.

## Versionamiento

El proyecto fue administrado mediante **Git** para llevar el control de versiones.

También fue publicado en un repositorio de **GitHub** para almacenar y visualizar el código fuente del proyecto.

## Autor

**Manuel Ramos**

Programa: **Tecnólogo en Análisis y Desarrollo de Software - SENA**
