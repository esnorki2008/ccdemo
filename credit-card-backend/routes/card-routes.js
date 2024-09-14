const express = require('express');
const { createCard, getCards } = require('../controllers/card-controller');
const router = express.Router();

router.post('/cards', createCard);
router.get('/cards', getCards);

module.exports = router;
