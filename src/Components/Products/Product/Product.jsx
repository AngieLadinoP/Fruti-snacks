import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./Product.css";

const Product = (props) => {
  const { id, image, name, price, color, addToCart } = props;
  return (
    <div className="product" style={{ backgroundColor: `${color}` }}>
      <Link to={`/productos/${id}`} className="product__link link">
        <p className="product__more-info subtitle">Ver detalles</p>
        <img rel="preload" src={image} alt={name} className="product__img" />
        <h3 className="product__name subtitle">{name}</h3>
      </Link>
      <p className="product__price">{`$ ${price} UND`}</p>
      <div className="product__cart-icon" onClick={() => addToCart(id)}>
        <BsCart4 />
      </div>
    </div>
  );
};
export default Product;
