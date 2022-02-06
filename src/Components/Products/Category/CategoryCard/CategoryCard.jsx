import React from "react";
import {Link} from "react-router-dom"
const CategoryCard = (props) => {
  const {id, name, img, color } = props;


  return (
    <div className="category" >
      <Link to={`/productos/categoria/${id}`} className="category__link link">
      <div className="category__card" style={{ backgroundImage: `${color}`, backgroundColor: `${color}` }}>
      <h3 className="category__title subtitle">{name}</h3>
      <img src={img} alt={name} className="category__img" />
     </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
