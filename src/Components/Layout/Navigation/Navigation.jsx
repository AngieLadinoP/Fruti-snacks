import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link navigation__link--home">
        Inicio
      </Link>
      <Link to="/productos" className="navigation__link navigation__link--home">
        Productos
      </Link>
      <Link to="/carrito" className="navigation__link navigation__link--home">
        Carrito
      </Link>
    </nav>
  );
};

export default Navigation;
