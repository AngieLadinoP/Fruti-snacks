import React from "react";
import "./Filters.css";
const Filters = (props) => {
  const { filter, clearFilter } = props;

  return (
    <div className="filters">
      <div className="filter__shape" onChange={filter}>
        <h4>Por forma</h4>
        <label for="choice1">
          <input type="radio" id="choice1" value="Redonda" name="filter" />
          <span>Redonda</span>
        </label>
        <label for="choice2">
          <input type="radio" id="choice2" value="Corazón" name="filter" />
          <span>Corazón</span>
        </label>
        <label for="choice3">
          <input type="radio" id="choice3" value="Tradicional" name="filter" />
          <span> Tradicional</span>
        </label>
        <label for="choice4">
          <input type="radio" id="choice4" value="Molde" name="filter" />
          <span> Molde</span>
        </label>
        <label for="choice5">
          <input type="radio" id="choice5" value="Rectangular" name="filter" />
          <span> Rectangular</span>
        </label>
        <h4>Por sabor</h4>
        <label for="choice6">
          <input type="radio" id="choice6" value="Mora" name="filter" />
          <span>Mora</span>
        </label>
        <label for="choice7">
          <input type="radio" id="choice7" value="Durazno" name="filter" />
          <span>Durazno</span>
        </label>
        <label for="choice8">
          <input type="radio" id="choice8" value="Banano" name="filter" />
          <span>Banano</span>
        </label>
        <label for="chooice9">
          <input type="radio" id="choice9" value="Nuez" name="filter" />
          <span>Nuez</span>
        </label>
        <label for="choice10">
          <input type="radio" id="choice10" value="Natural" name="filter" />
          <span>Natural</span>
        </label>
        <h4>Por cantidad</h4>
        <label for="choice11">
          <input type="radio" id="choice11" value="Individual" name="filter" />
          <span> Individual</span>
        </label>
        <label for="choice12">
          <input type="radio" id="choice12" value="Paquete" name="filter" />
          <span> Paquete </span>
        </label>
      </div>
      <button className="filter__clear black-button" onClick={clearFilter}>
        Borrar filtros
      </button>
    </div>
  );
};

export default Filters;
