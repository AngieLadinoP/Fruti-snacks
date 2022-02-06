import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ProductDetails from "./Components/Products/Product/ProductDetails/ProductDetails.jsx";
import { products, category,/*  cookies, muffinsandBreads */ } from "./data.js"

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productos" element={<Products name="Categorías" categories={category} products={products}/>} />
            <Route path="/productos/:id" element={<ProductDetails />} />
{/*             <Route path="/productos/categoria/:id" element={<Products  categories={cookies} products={products}/>} /> */}
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
