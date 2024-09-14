const Card = require('../models/card');

const createCard = async (req, res) => {
  try {
    const { cardNumber, cardHolder, expirationDate, cvv } = req.body;
    const newCard = await Card.create({ cardNumber, cardHolder, expirationDate, cvv });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCard, getCards };
