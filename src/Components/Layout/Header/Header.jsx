import React from "react";
import Logo from "./Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={Logo} alt="Logo" className="header__logo--img" />
      </figure>
      <h1 className="header__title">Fruti Snacks</h1>
    </header>
  );
};

export default Header;
