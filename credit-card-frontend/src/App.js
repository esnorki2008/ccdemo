import React, { useState } from "react";
import AddCard from "./components/add-card";
import CardList from "./components/card-list";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleCardAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestión de Tarjetas de Crédito</h1>
      <AddCard onCardAdded={handleCardAdded} />
      <CardList key={refresh} />
    </div>
  );
}

export default App;
