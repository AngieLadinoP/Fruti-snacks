import React, { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./Reducer";

const Cart = createContext();

const Context = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
