import React, { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
  userReducer,
  userInitialState,
} from "./Reducer";

const Cart = createContext();

const Context = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  return (
    <Cart.Provider value={{ state, dispatch, userState, userDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
