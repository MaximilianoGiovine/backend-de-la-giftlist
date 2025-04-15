const { Gift } = require('../models/Gift.js');

const fetchGiftByName = async (req, res, next) => {
    try {
        const { gift } = req.query; // Obtener el nombre del regalo desde los query params
        if (!gift) {
            return res.status(400).json({ message: "Gift name is required in query parameters" });
        }

        // Buscar el regalo por su nombre (campo "gift")
        const foundGift = await Gift.findOne({ gift });
        if (!foundGift) {
            return res.status(404).json({ message: `Gift with name "${gift}" not found` });
        }

        // Agregar el ID del regalo al objeto `req` para que lo use el siguiente middleware/controlador
        req.params.id = foundGift._id;

        next(); // Pasar al siguiente middleware o controlador
    } catch (error) {
        res.status(500).json({ message: `Error fetching gift by name: ${error.message}` });
    }
};

module.exports = fetchGiftByName;