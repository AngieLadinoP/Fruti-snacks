import React from "react";
import { CartState } from "../../../Context/Context";
import { BsWhatsapp } from "react-icons/bs";
import "./Form.css";
const Form = (props) => {
  const { cartInfo, totalPayment } = props;
  //CartInfo[name,price, quantity, subtotal]

  const { dispatch } = CartState();

  const {
    userState: { name, address, message },
    userDispatch,
  } = CartState();

  const updateName = (name) => {
    userDispatch({ type: "UPDATE_NAME", payload: name });
  };
  const updateAddress = (address) => {
    userDispatch({ type: "UPDATE_ADDRESS", payload: address });
  };
  const updateMessage = (message) => {
    userDispatch({ type: "UPDATE_MESSAGE", payload: message });
  };

  const summary = cartInfo.map(
    (item) => `%0A%0A${item[0]}%0ACantidad: ${item[2]}%0ASubtotal: ${item[3]}`
  );

  const phoneNumber = 3132551353;
  let whatsappMessage = `Pedido a nombre de *${name}*%0A*Dirección:* ${address}%0A%0A*Resumen de la compra*${summary}%0A%0A*Total a pagar: ${totalPayment}*%0A%0A*Información adicional*%0A${
    message ? message : "Sin comentarios adicionales"
  }`;

  const urlWhatsapp = `https://api.whatsapp.com/send?phone=57${phoneNumber}&text=${whatsappMessage}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(urlWhatsapp, "_blank");
    userDispatch({ type: "CLEAR_FORM" });
    dispatch({ type: "CLEAR_CART" });
  };

  console.log(name, address, message);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="Name" className="form__label">
        Nombre
        <input
          className="form__input"
          type="text"
          value={name}
          placeholder="Nombre...."
          required
          onChange={(e) => updateName(e.target.value)}
        />
      </label>
      <label htmlFor="Address" className="form__label">
        Dirección
        <input
          className="form__input"
          type="text"
          value={address}
          placeholder="Dirección..."
          required
          onChange={(e) => updateAddress(e.target.value)}
        />
      </label>
      <label htmlFor="Message" className="form__label">
        Información adicional
        <textarea
          className="form__text-area"
          name={message}
          maxLength="250"
          cols="20"
          rows="5"
          placeholder="Información adicional o comentarios sobre tu pedido..."
          onChange={(e) => updateMessage(e.target.value)}
        />
      </label>
      <button
        className="form__button"
        disabled={name && address ? "" : "disabled"}
      >
        <span>
          <BsWhatsapp />
        </span>
        Llévame a Whatsapp
      </button>
    </form>
  );
};

export default Form;
