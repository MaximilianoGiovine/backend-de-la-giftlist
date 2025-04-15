const express = require('express');
const { getGift, postGift, putGift } = require('../controllers/controllers');
const fetchGiftByName = require('../middlewares/fetchGiftByName');

const router = express.Router();

// Ruta para buscar regalos por nombre o ID
router.get('/', getGift);

router.post('/', postGift )
router.put('/', fetchGiftByName, putGift )

module.exports = router;