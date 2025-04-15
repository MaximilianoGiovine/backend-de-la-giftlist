const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
    gift: {
        type: String,
        required: true,
        unique: true, // Garantiza unicidad a nivel de base de datos
        trim: true // Elimina espacios al inicio y al final
    },
    status: {
        type: String,
        required: true,
        enum: ['disponible', 'regalado'],
        default: 'disponible'
    }
});

// Middleware de Mongoose para normalizar el texto antes de guardar
GiftSchema.pre('save', function (next) {
    this.gift = this.gift.trim().toLowerCase(); // Normaliza el texto
    next();
});

const Gift = mongoose.model('Gift', GiftSchema);

module.exports = { Gift };