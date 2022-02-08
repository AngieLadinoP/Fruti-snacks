import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAddress("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="Name" className="form__label">
        Nombre
        <input
          className="form__input"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="Address" className="form__label">
        Dirección
        <input
          className="form__input"
          type="text"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button
        className="form__button"
        disabled={name && address ? "" : "disabled"}
      >
        <span>
          <i className="fab fa-whatsapp form__icon"></i>
        </span>
        Llévame a Whatsapp
      </button>
    </form>
  );
};

export default Form;
