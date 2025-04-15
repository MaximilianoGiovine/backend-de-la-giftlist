const express = require('express');
const { getGift, postGift, putGift } = require('../controllers/controllers');
const fetchGiftByName = require('../middlewares/fetchGiftByName');
const checkUniqueGift = require('../middlewares/auth');

const router = express.Router();

// Ruta para buscar regalos por nombre o ID
router.get('/', getGift);

router.post('/', checkUniqueGift, postGift )
router.put('/', fetchGiftByName, putGift )

router.get('/test', (req, res) => {
    res.status(200).send('Test route is working!');
});

module.exports = router;