import React from "react";
import "./Products.css";
import CategoryCard from "./Category/CategoryCard/CategoryCard.jsx";
import Product from "./Product/Product.jsx";
import { useState, useEffect } from "react";
import {
  products,
  categories,
  subcategory1,
  subcategory2,
} from "../../data.js";
import { useParams } from "react-router-dom";

import Modal from "../Modal/Modal";

import SelectOptionSort from "./SelectOptionSort";
const Products = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({
    title: "Productos",
    categoriesShown: categories,
    productsShown: products,
  });

  const filterByCategory = (value) =>
    products.filter((product) => product.category === value);

  const filterBySubcategory = (value) =>
    products.filter((product) => product.subcategory === value);

  useEffect(() => {
    if (id === "c1") {
      setInfo({
        title: "Galletas de mantequilla",
        productsShown: filterByCategory("Galletas de mantequilla"),
        categoriesShown: subcategory1,
      });
    } else if (id === "c2") {
      setInfo({
        title: "Muffins y panes de banano",
        productsShown: filterByCategory("Muffins y panes de banano"),
        categoriesShown: subcategory2,
      });
    } else if (id === "c11") {
      setInfo({
        title: "Galletas tradicionales",
        productsShown: filterBySubcategory("Galletas tradicionales"),
        categoriesShown: null,
      });
    } else if (id === "c12") {
      setInfo({
        title: "Galletas con mermelada",
        productsShown: filterBySubcategory("Galletas con mermelada"),
        categoriesShown: null,
      });
    } else if (id === "c21") {
      setInfo({
        title: "Muffins de banano",
        productsShown: filterBySubcategory("Muffins de banano"),
        categoriesShown: null,
      });
    } else if (id === "c22") {
      setInfo({
        title: "Panes de banano",
        productsShown: filterBySubcategory("Panes de banano"),
        categoriesShown: null,
      });
    } else {
      setInfo({
        title: "Productos",
        categoriesShown: categories,
        productsShown: products,
      });
    }
  }, [id]);

  const handleAddtoCart = () => console.log("soy el carrito y funciono");
  return (
    <section className="Products">
      <h2 className="products__title title">{info.title}</h2>
      <div className="products__categories">
        {info.categoriesShown
          ? info.categoriesShown.map((category) => (
              <CategoryCard
                id={category.id}
                key={category.id}
                name={category.name}
                img={category.url}
                color={category.color}
              />
            ))
          : null}
      </div>
      <SelectOptionSort />
      <div className="products__list">
        {info.productsShown.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            color={product.color}
            price={product.price}
            id={product.id}
            addToCart={handleAddtoCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
