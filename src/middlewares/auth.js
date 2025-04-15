const { Gift } = require('../models/Gift.js'); // Importa el modelo Gift

const checkUniqueGift = async (req, res, next) => {
    try {
        let { gift } = req.body; // Obtén el nombre del regalo desde el cuerpo de la solicitud

        // Normaliza el texto: convierte a minúsculas y elimina espacios adicionales
        gift = gift.trim().toLowerCase();

        // Verifica si el regalo ya existe en la base de datos
        const existingGift = await Gift.findOne({ gift });

        if (existingGift) {
            // Si el regalo ya existe, devuelve un error
            return res.status(400).json({ error: `El regalo "${gift}" ya existe en la lista.` });
        }

        // Si no existe, continúa con la siguiente función
        next();
    } catch (error) {
        console.error('Error verificando unicidad del regalo:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = checkUniqueGift;