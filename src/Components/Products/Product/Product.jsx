import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { id, image, name, price, color, addToCart } = props;
  return (
    <div className="product" style={{ backgroundColor: `${color}` }}>
      <Link to={`/productos/${id}`} className="product__link link">
        <img rel="preload" src={image} alt={name} className="product__img" />
        <h3 className="product__name subtitle">{name}</h3>
      </Link>
      <p className="product__price">{`$ ${price} UND`}</p>
      <div className="product__cart-icon" onClick={() => addToCart(id)}>
        <i className="fas fa-cart-plus"></i>
      </div>
    </div>
  );
};

export default Product;
