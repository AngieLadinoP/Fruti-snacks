import { products } from "../data.js";

/* -----------------------Cart Reducer---------------------------- */
//Define initial state: products= list of products and cart = empty array
export const shoppingInitialState = { products: products, cart: [] };

//Reducer with actions defined in the cartAction.js file.
export const shoppingReducer = (state, action) => {
  switch (action.type) {
    // This action receives an id (payload=id)
    case "ADD_TO_CART": {
      let newCartProduct = state.products.find(
        (product) => product.id === action.payload // If id is in the products list, the product is save
      );
      // Avoid repeating products in cart
      let productInCart = state.cart.find(
        (item) => item.id === newCartProduct.id // If product is already in the cart it is save in this variable, otherwise the variable is null
      );

      return productInCart
        ? {
            // If the product is already in the cart: duplicate state and add 1 to amount
            ...state,
            cart: state.cart.map((item) =>
              item.id === newCartProduct.id
                ? { ...item, amount: item.amount + 1 }
                : item
            ),
          }
        : {
            // if item is not in the cart: duplicate actual state and in Cart: duplicate previous items, add new item and as it is the first product in the cart, define amount = 1
            ...state,
            cart: [...state.cart, { ...newCartProduct, amount: 1 }],
          };
    }
    case "REMOVE_ONE_FROM_PRODUCT": {
      let productToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      return productToRemove.amount > 0
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, amount: item.amount - 1 }
                : item
            ),
          }
        : { ...state, ...state.cart };
    }
    case "REMOVE_ALL_FROM_PRODUCT": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "CLEAR_CART":
      // To clear cart,return initial state where cart was empty
      return shoppingInitialState;
    default:
      return state;
  }
};

/* -----------------------User Information Reducer---------------------------- */
export const userInitialState = { name: "", address: "", message: "" };

export const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    case "CLEAR_FORM":
      return userInitialState;
    default:
      return state;
  }
};
