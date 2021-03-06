import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo.png";
import Navigation from "./Navigation/Navigation.jsx";
import "./Layout.css";

const Layout = () => {
  return (
    <main>
      <header className="header">
        <figure className="header__logo">
          <img src={Logo} alt="Logo" className="header__logo--img" />
        </figure>
        <h1 className="header__title">Fruti Snacks</h1>
      </header>
      <Navigation />
      <section className="section">
        <Outlet />
      </section>
      <footer className="footer">
        <p className="footer__text">
          Fruti snacks
          <br />
          email: contactfrutisnacks@gmail.com
        </p>
      </footer>
    </main>
  );
};

export default Layout;
