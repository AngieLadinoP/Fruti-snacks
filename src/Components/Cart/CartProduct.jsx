import React from "react";

const CartProduct = (props) => {
  const { data, removeFromProduct, addToCart } = props;
  const { id, name, price, amount, image } = data;
  return (
    <div className="cart-product">
      <h4 className="cart-product__name subtitle">{name}</h4>
      <img src={image} alt={name} className="cart-product__image" />
      <table>
        <tbody>
          <tr>
            <td>Precio unitario</td>
            <td>$ {price}</td>
          </tr>
          <tr>
            <td>Cantidad</td>
            <td>
              <div className="cart-product__quantity">
                <button
                  onClick={() => removeFromProduct(id)}
                  className="cart-product__button cart-product__button--remove"
                >
                  -
                </button>
                <p className="cart-product__quantity--value">{amount}</p>
                <button
                  onClick={() => addToCart(id)}
                  className="cart-product__button cart-product__button--add"
                >
                  +
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>$ {amount * price}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => removeFromProduct(id, true)}
        className="cart-product__button cart-product__button--remove-all"
      >
        X
      </button>
    </div>
  );
};

export default CartProduct;
