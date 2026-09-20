const express = require('express');

const {
    registrarUsuario,
    iniciarSesion
} = require('../controllers/authController');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);

module.exports = router;