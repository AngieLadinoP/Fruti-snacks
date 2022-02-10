import React from "react";
import "./Card.css";
const Card = (props) => {
  const { id, url, active } = props.data;

  return (
    <div
      className={`card ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => props.onCardClick(id)}
    />
  );
};

export default Card;
