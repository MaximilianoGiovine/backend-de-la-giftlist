const { getGiftService, postGiftService, putGiftService } = require('../services/giftService');

const getGift = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del regalo desde los parámetros de la URL
        const gift = await getGiftService(id); // Llamar al servicio para obtener el regalo
        if (!gift) {
            return res.status(404).json({ message: `Gift with ID ${id} not found` });
        }
        res.status(200).json(gift); // Retornar el regalo encontrado
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
};

const postGift = async (req, res) => {
    try {
        const giftData = req.body; // Obtener los datos del regalo desde el cuerpo de la solicitud
        const newGift = await postGiftService(giftData); // Llamar al servicio para crear el regalo
        res.status(201).json(newGift); // Retornar el regalo creado
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
};

const putGift = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del regalo desde los parámetros de la URL
        const updatedGift = await putGiftService(id); // Llamar al servicio para actualizar el regalo
        res.status(200).json(updatedGift); // Retornar el regalo actualizado
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
};

module.exports = {
    getGift,
    postGift,
    putGift
};