import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  const { id, name, img, color } = props;

  return (
    <div
      className="category"
      style={{ backgroundImage: `${color}`, backgroundColor: `${color}` }}
    >
      <Link to={`/productos/categoria/${id}`} className="category__link link">
        <div className="category__card">
          <h3 className="category__title subtitle">{name}</h3>
          <img rel="preload" src={img} alt={name} className="category__img" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
