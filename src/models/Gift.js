const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const GiftSchema = new Schema({
    gift: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['regalar', 'regalado'],
        default: 'regalar'
    }
});

const Gift = mongoose.model('Gift', GiftSchema);

module.exports = {Gift};