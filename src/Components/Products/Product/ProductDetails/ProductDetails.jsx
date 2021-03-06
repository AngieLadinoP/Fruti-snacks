import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartState } from "../../../../Context/Context.js";
import CardDetails from "./CardDetails/CardDetails";
import Button from "../../../Button/Button.jsx";
import { getProductDetails } from "../../filters.js";

const ProductDetails = () => {
  const { id } = useParams();
  const details = getProductDetails(parseInt(id));
  const { dispatch } = CartState();
  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  let navigate = useNavigate();

  return (
    <div>
      <Button
        name="Regresar"
        styleButton="white-button"
        onClick={() => navigate(-1)}
      />

      <h2 className="product-details__title title">Información del producto</h2>
      <CardDetails data={details[0]} addToCart={addToCart} />
    </div>
  );
};

export default ProductDetails;
