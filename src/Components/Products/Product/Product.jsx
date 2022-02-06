import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { id, image, name, price, color } = props;
  return (
    <div className="product">
    <Link to={`/productos/${id}`} className="product__link link">
      <div className="product__card" style={{ backgroundColor: `${color}` }}>
        <img src={image} alt={name} className="product__img" />
        <h3 className="product__name subtitle">{name}</h3>
        <p className="product__price">{`$ ${price} UND`}</p>
        <div className="product__cart-icon">
          <i className="fas fa-cart-plus"></i>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Product;
