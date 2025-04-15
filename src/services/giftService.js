const { Gift } = require('../models/Gift.js');

const getGiftService = async () => {
    try {
        // Verificar si el modelo Gift está definido
        if (!Gift || typeof Gift.find !== 'function') {
            throw new Error('Gift model is not properly defined');
        }

        // Obtener todos los regalos de la base de datos
        const gifts = await Gift.find({});
        return gifts;
    } catch (error) {
        // Lanzar un error más detallado si ocurre un problema
        throw new Error(`Error fetching gifts: ${error.message}`);
    }
};

const postGiftService = async (giftData) => {
    try {
        const newGift = new Gift(giftData); // Crear una nueva instancia del modelo Gift
        const savedGift = await newGift.save(); // Guardar el regalo en la base de datos
        return savedGift; // Retornar el regalo guardado
    } catch (error) {
        throw new Error(`Error creating new gift: ${error.message}`);
    }
};

const putGiftService = async (giftId) => {
    try {
        const updatedGift = await Gift.findByIdAndUpdate(
            giftId,
            { status: "regalado" }, // Cambiar el status a "regalado"
            { new: true } // Retornar el documento actualizado
        );
        if (!updatedGift) {
            throw new Error(`Gift with ID ${giftId} not found`);
        }
        return updatedGift;
    } catch (error) {
        throw new Error(`Error updating gift with ID ${giftId}: ${error.message}`);
    }
};

module.exports = {
    getGiftService,
    postGiftService,
    putGiftService
};