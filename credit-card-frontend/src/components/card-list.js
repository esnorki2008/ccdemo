import React, { useEffect, useState } from "react";
import axios from "axios";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cards`);
      setCards(response.data);
    } catch (error) {
      console.error("Error al obtener las tarjetas:", error);
    }
  };

  return (
    <div className="card p-4">
      <h2 className="mb-3">Tarjetas Guardadas</h2>
      <ul className="list-group">
        {cards.map((card) => (
          <li key={card.id} className="list-group-item">
            <p><strong>Número de Tarjeta:</strong> {card.cardNumber}</p>
            <p><strong>Titular:</strong> {card.cardHolder}</p>
            <p><strong>Fecha de Expiración:</strong> {card.expirationDate}</p>
            <p><strong>CVV:</strong> {card.cvv}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
