import React from "react";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filter__type">
        <h4>Por tipo </h4>
        <input type="radio" value="Galleta" name="type" /> Galleta
        <input type="radio" value="Muffin" name="type" /> Muffin
        <input type="radio" value="Pan" name="type" /> Pan
      </div>
      <div className="filter__shape">
        <h4>Por forma</h4>
        <input type="radio" value="Redonda" name="shape" /> Redonda
        <input type="radio" value="Corazón" name="shape" /> Corazón
        <input type="radio" value="Molde" name="shape" /> Molde
        <input type="radio" value="Rectangular" name="shape" /> Rectangular
      </div>
      <div className="filter__flavor">
        <h4>Por sabor</h4>
        <input type="radio" value="Redonda" name="flavor" /> Mora
        <input type="radio" value="Corazón" name="flavor" /> Durazno
        <input type="radio" value="Molde" name="flavor" /> Banano
        <input type="radio" value="Rectangular" name="flavor" /> Nuez
      </div>
      <div className="filter__quantity">
        <h4>Por cantidad</h4>
        <input type="radio" value="Cantidad" name="quantity" /> Individual
        <input type="radio" value="Paqute" name="quantity" /> Paquete
      </div>
      <button className="filter__clear">Borrar filtros</button>
    </div>
  );
};

export default Filters;
