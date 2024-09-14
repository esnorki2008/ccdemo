import React, { useState } from "react";
import axios from "axios";

const AddCard = ({ onCardAdded }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = {
      cardNumber,
      cardHolder,
      expirationDate,
      cvv,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/cards`, newCard);
      onCardAdded();
      setCardNumber("");
      setCardHolder("");
      setExpirationDate("");
      setCvv("");
    } catch (error) {
      console.error("Error al agregar la tarjeta:", error);
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h2 className="mb-3">Agregar Tarjeta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Número de Tarjeta</label>
          <input
            type="text"
            className="form-control"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Titular</label>
          <input
            type="text"
            className="form-control"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Expiración</label>
          <input
            type="text"
            className="form-control"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM/AA"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Tarjeta
        </button>
      </form>
    </div>
  );
};

export default AddCard;
