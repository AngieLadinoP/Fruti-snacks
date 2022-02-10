import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Button.css";
const Button = (props) => {
  const { name, styleButton, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={styleButton}>
      {styleButton === "white-button" ? (
        <>
          <AiOutlineArrowLeft />
          {name}
        </>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
