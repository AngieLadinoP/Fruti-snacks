import React from "react";

const Card = (props) => {
  const { id, title, url, active } = props.data;

  return (
    <div
      className={`card ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => props.onCardClick(id)}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
