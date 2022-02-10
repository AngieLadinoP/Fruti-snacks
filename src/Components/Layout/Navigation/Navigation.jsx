import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../../Context/Context";
import { BsHouseDoor, BsCart4 } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import "./Navigation.css";
const Navigation = () => {
  const {
    state: { cart },
  } = CartState();
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const cartQuantity =
    cart.length !== 0 ? cart.map((item) => item.amount).reduce(reducer) : 0;
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link navigation__link--home">
        <BsHouseDoor className="navigation__icon" />
        Inicio
      </Link>
      <Link
        to="/productos"
        className="navigation__link navigation__link--products"
      >
        <BiStoreAlt className="navigation__icon" />
        Productos
      </Link>
      <Link to="/carrito" className="navigation__link navigation__link--cart">
        <BsCart4 className="navigation__icon" />
        Carrito
        <span className="navigation__quantity-cart">{cartQuantity}</span>
      </Link>
    </nav>
  );
};

export default Navigation;
