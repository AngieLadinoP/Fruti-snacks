import { products } from "../../data.js";
import { TYPES } from "./shoppingAction";

//Define initial state list of products and cart empty
export const shoppingInitialState = { products, cart: [] };

//REducer with actions defined in the cartAction.js file.
export function shoppingReducer(state, action) {
  switch (action.type) {
    // This action receives an id (payload=id)
    case TYPES.ADD_TO_CART: {
      let newCartProduct = state.products.find(
        (product) => product.id === action.payload // If id is in the products list, the product is save
      );
      // Avoid repeating products in cart
      let productInCart = state.cart.find(
        (item) => item.id === newCartProduct.id // If product is already in the cart it is save in this variable, otherwise the variable is null
      );

      return productInCart
        ? {
            // If the product is already in the cart: duplicate state and add 1 to quantity
            ...state,
            cart: state.cart.map((item) =>
              item.id === newCartProduct.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            // if item is not in the cart: duplicate actual state and in Cart: duplicate previous items, add new item and as it is the first product in the cart, define quantity = 1
            ...state,
            cart: [...state.cart, { ...newCartProduct, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_PRODUCT: {
      let productToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      return productToRemove.quantity > 0
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : { ...state, ...state.cart };
    }
    case TYPES.REMOVE_ALL_FROM_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      // To clear cart,return initial state where cart=[]
      return shoppingInitialState;
    default:
      return state;
  }
}
