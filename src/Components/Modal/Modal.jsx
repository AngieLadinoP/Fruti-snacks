import React from "react";

const Modal = (props) => {
  const { children } = props;
  return (
    <div className="overlay">
      <div className="modal__container">
        <div className="modal__header">
          <h3 className="modal__header--title"> Modal</h3>
        </div>
        <button className="modal__button" type="button">
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
