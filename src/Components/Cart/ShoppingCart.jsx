import React from "react";
import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./shoppingReducer";
import Product from "../Products/Product/Product.jsx";
import CartProduct from "./CartProduct";
import { TYPES } from "./shoppingAction";
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart, total } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const removeFromProduct = (id, all = false) => {
    // Remove one or all. Default, remove one (all=false)
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_PRODUCT, payload: id });
    } else dispatch({ type: TYPES.REMOVE_ONE_FROM_PRODUCT, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <div className="products__list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            color={product.color}
            price={product.price}
            id={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
        <h3>Carrito</h3>

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
            <li key={index}>{item.price * item.quantity}</li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
