import React from "react";
import { CartState } from "./../../Context/Context";
import Form from "./FormInput/Form";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./Cart.css";
const Cart = () => {
  const {
    state: { cart },
  } = CartState();

  const cartInfo = cart.map((item) => [
    item.name,
    item.price,
    item.amount,
    item.price * item.amount,
  ]);

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const totalQuantity =
    cartInfo.length !== 0 ? cartInfo.map((item) => item[2]).reduce(reducer) : 0;
  const totalPayment =
    cartInfo.length !== 0 ? cartInfo.map((item) => item[3]).reduce(reducer) : 0;

  return (
    <>
      <section className="cart">
        <h1 className="cart__title title">Carrito de compras</h1>
        {cart.length !== 0 ? (
          <>
            <p className="cart__msg-disclaimer">
              El costo del despacho no está incluido en el precio
            </p>
            <section className="cart__shopping-cart">
              <ShoppingCart />
            </section>
            <table className="cart__table">
              <caption className="summary__title title">
                Resumen de compra
              </caption>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartInfo.map((item, index) =>
                  item[3] !== 0 ? (
                    <tr key={index}>
                      <td>{item[0]}</td>
                      <td>${new Intl.NumberFormat("de-DE").format(item[1])}</td>
                      <td>{item[2]}</td>
                      <td>${new Intl.NumberFormat("de-DE").format(item[3])}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">Total</td>
                  <td>{totalQuantity}</td>
                  <td>
                    $ {new Intl.NumberFormat("de-DE").format(totalPayment)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <section className="cart__form">
              <p className="cart__text">
                Completa tu información y da click al botón para ser redirigido
                a Whatsapp donde se determinará el método de pago y el costo del
                domicilio.
              </p>
              <Form cartInfo={cartInfo} totalPayment={totalPayment} />
            </section>
          </>
        ) : (
          <p className="cart__msg-empty subtitle">
            No has agregado productos a tu carrito de compras
          </p>
        )}
      </section>
    </>
  );
};

export default Cart;
