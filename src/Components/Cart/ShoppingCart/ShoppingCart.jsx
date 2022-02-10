import React from "react";
import { CartState } from "../../../Context/Context";
import CartProduct from "./CartProduct/CartProduct";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };
  const removeFromProduct = (id, all = false) => {
    // Remove one or all. Default, remove one (all=false)
    if (all) {
      dispatch({ type: "REMOVE_ALL_FROM_PRODUCT", payload: id });
    } else dispatch({ type: "REMOVE_ONE_FROM_PRODUCT", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart__title title">Productos en el carrito</h2>
      <button onClick={clearCart} className="shopping-cart__clear-button">
        Vaciar el carrito
      </button>
      <div className="shopping-cart__products">
        {cart.map((item, index) => (
          <CartProduct
            key={index}
            data={item}
            removeFromProduct={removeFromProduct}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
