const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Card = sequelize.define('Card', {
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cardHolder: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expirationDate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Card;
