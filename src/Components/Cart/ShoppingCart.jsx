import React from "react";
import CartProduct from "./CartProduct";
import { CartState } from "../../Context/Context";
const ShoppingCart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

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
    <div className="cart">
      <h2 className="cart__title title">Carrito de compras</h2>
      <button onClick={clearCart}>Limpiar el carrito</button>
      {cart.map((item, index) => (
        <CartProduct
          key={index}
          data={item}
          removeFromProduct={removeFromProduct}
          addToCart={addToCart}
        />
      ))}

      <p>
        Total
        {cart.map((item, index) => (
          <li key={index}>{item.price * item.amount}</li>
        ))}
      </p>
    </div>
  );
};

export default ShoppingCart;
