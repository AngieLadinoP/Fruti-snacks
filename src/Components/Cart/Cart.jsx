import React from "react";
import "./Cart.css";
import Form from "./FormInput/Form";
import ShoppingCart from "./ShoppingCart";

const Cart = () => {
  return (
    /*  <section className="cart">
      <h2 className="cart__title title">Carrito de compras</h2>
      <p>El costo del despacho no está incluido en el precio</p>
      <h1>Aquí van los productos!!!!!</h1>
      <ShoppingCart />
      <p>
        Completa tu información y da click al botón para ser redirigido a
        Whatsapp donde se determinará el método de pago y el costo del
        domicilio.
      </p>
      <Form />
    </section> */

    <>
      <ShoppingCart />
    </>
  );
};

export default Cart;
