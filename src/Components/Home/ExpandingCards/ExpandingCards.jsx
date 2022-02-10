import React, { useState } from "react";
import Card from "./Card/Card.jsx";
import "./ExpandingCards.css";

const ExpandingCards = (props) => {
  const [data, setData] = useState(props.data);

  const onCardClick = (id) => {
    const newState = [...data];
    newState.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    );
    setData(newState);
  };

  return (
    <div className="expanding-cards">
      {data.map((card) => (
        <Card key={card.id} data={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default ExpandingCards;
