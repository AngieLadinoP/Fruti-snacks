import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Navigation from "./Navigation/Navigation.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="section">
        <Outlet />
      </section>
      <footer className="footer">
        <p className="footer__text">
          Fruti snacks email: contactfrutisnacks@gmail.com <br />
          Todos los derechos reservados
        </p>
      </footer>
      <Navigation />
    </>
  );
};

export default Layout;
