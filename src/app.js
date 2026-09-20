const express = require('express');

// Importamos las rutas relacionadas con la autenticación
const authRoutes = require('./routes/authRoutes');

const app = express();

// Permite que la API reciba información en formato JSON
app.use(express.json());

// Ruta principal para comprobar que el servicio web funciona
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Servicio web de autenticación funcionando correctamente'
    });
});

// Utilizamos las rutas de autenticación
app.use('/api/auth', authRoutes);

// Definimos el puerto en el que funcionará nuestro servidor
const PORT = 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});