import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const CartProduct = (props) => {
  const { data, removeFromProduct, addToCart } = props;
  const { id, name, price, amount, image } = data;
  return (
    <div className="cart-product">
      <h4 className="cart-product__name subtitle">{name}</h4>
      <img src={image} alt={name} className="cart-product__image" />
      <p className="cart-product__price">
        Precio
        <span className="cart-product__price--value">$ {price}</span>
      </p>
      <p className="cart-product__quantity">
        Cantidad
        <span className="cart-product__quantity--buttons">
          <button
            onClick={() => removeFromProduct(id)}
            className="cart-product__button cart-product__button--remove"
          >
            -
          </button>
          <span className="cart-product__quantity--value">{amount}</span>
          <button
            onClick={() => addToCart(id)}
            className="cart-product__button cart-product__button--add"
          >
            +
          </button>
        </span>
      </p>
      <p>
        Subtotal <span>$ {amount * price}</span>
      </p>

      <div
        onClick={() => removeFromProduct(id, true)}
        className="cart-product__button cart-product__button--remove-all"
      >
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default CartProduct;
