// Lista temporal donde almacenaremos los usuarios
// mientras el servidor esté funcionando.
const usuarios = [];

// Función encargada de registrar un nuevo usuario
const registrarUsuario = (req, res) => {
    const { usuario, password } = req.body;

    // Verificamos que el usuario y la contraseña hayan sido enviados
    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: 'El usuario y la contraseña son obligatorios'
        });
    }

    // Verificamos si el usuario ya está registrado
    const usuarioExistente = usuarios.find(
        item => item.usuario === usuario
    );

    if (usuarioExistente) {
        return res.status(409).json({
            mensaje: 'El usuario ya existe'
        });
    }

    // Guardamos temporalmente el usuario
    usuarios.push({
        usuario,
        password
    });

    // Enviamos una respuesta indicando que el registro fue exitoso
    res.status(201).json({
        mensaje: 'Usuario registrado correctamente'
    });
};

// Función encargada de iniciar sesión
const iniciarSesion = (req, res) => {
    const { usuario, password } = req.body;

    // Verificamos que el usuario y la contraseña hayan sido enviados
    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: 'El usuario y la contraseña son obligatorios'
        });
    }

    // Buscamos el usuario registrado
    const usuarioEncontrado = usuarios.find(
        item => item.usuario === usuario
    );

    // Verificamos que el usuario exista y que la contraseña sea correcta
    if (
        !usuarioEncontrado ||
        usuarioEncontrado.password !== password
    ) {
        return res.status(401).json({
            mensaje: 'Error en la autenticación'
        });
    }

    // Si los datos son correctos, informamos que la autenticación fue exitosa
    res.status(200).json({
        mensaje: 'Autenticación satisfactoria'
    });
};

module.exports = {
    registrarUsuario,
    iniciarSesion
};