import React from "react";
import ExpandingCards from "./ExpandingCards/ExpandingCards";
import {galery} from "../../data.js";

import "./Home.css";
const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title title">¿Quiénes somos?</h1>
      <p className="home__text text">
        Somos un negocio dedicado a la producción y comercialización de galletas
        de mantequilla, muffins y panes de banano. Este emprendimiento nació
        como proyecto de grado para el técnico en agroindustria alimentaria y
        hoy es el sustento de sus creadores.
      </p>
      <div className="home__galery">
        <ExpandingCards data={galery} />
      </div>
    </section>
  );
};

export default Home;
