import React from "react";
import "./Cart.css";
import Form from "./FormInput/Form";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { CartState } from "./../../Context/Context";
const Cart = () => {
  const {
    state: { cart },
  } = CartState();
  console.log(cart);

  const cartInfo = cart.map((item) => [
    item.name,
    item.price,
    item.amount,
    item.price * item.amount,
  ]);
  console.log(cartInfo);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const totalQuantity = cartInfo.map((item) => item[2]).reduce(reducer);
  const totalPayment = cartInfo.map((item) => item[3]).reduce(reducer);

  console.log(totalQuantity);
  console.log(totalPayment);
  return (
    <>
      <section className="cart">
        <h1 className="cart__title title">Carrito de compras</h1>
        {cart.length !== 0 ? (
          <>
            <p className="center">
              El costo del despacho no está incluido en el precio
            </p>
            <p>
              Completa tu información y da click al botón para ser redirigido a
              Whatsapp donde se determinará el método de pago y el costo del
              domicilio.
            </p>
            <Form />
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
                {cartInfo.map((item, index) => (
                  <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>$ {item[3]}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">Total</td>
                  <td>{totalQuantity}</td>
                  <td>$ {totalPayment}</td>
                </tr>
              </tfoot>
            </table>
            <ShoppingCart />
          </>
        ) : (
          "Tu carrito de compras está vacío"
        )}
      </section>
    </>
  );
};

export default Cart;
