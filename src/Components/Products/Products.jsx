import React, { useState, useEffect } from "react";
import { categories, subcategory1, subcategory2 } from "../../data.js";
import { useParams, useNavigate } from "react-router-dom";
import { CartState } from "../../Context/Context.js";
import Product from "./Product/Product.jsx";
import Button from "../Button/Button";
import CategoryCard from "./Category/Category.jsx";
import Filters from "./Filters/Filters.jsx";
import {
  filterByCategory,
  filterBySubcategory,
  filter,
  sortbyPrice,
} from "./filters.js";
import "./Products.css";
const Products = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const {
    state: { products },
    dispatch,
  } = CartState();

  const [info, setInfo] = useState({
    title: "Productos",
    categoriesShown: categories,
    productsShown: products,
  });

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
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const sortPrice = (sortSelected) => {
    setInfo({
      ...info,
      productsShown: sortbyPrice(info.productsShown, sortSelected),
    });
  };

  const clearFilter = () => {
    setInfo({
      ...info,
      productsShown: products,
    });
  };
  const filterProducts = (value) => {
    console.log(value);
    setInfo({ ...info, productsShown: filter(products, value) });
  };
  return (
    <section className="products">
      <h1 className="products__title title">{info.title}</h1>
      <div className="products__catalogue">
        {id !== undefined ? (
          <Button
            name="Regresar"
            styleButton="white-button"
            onClick={() => navigate(-1)}
          />
        ) : null}
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
        <select
          className="products__sort"
          name="sort"
          onChange={(e) => sortPrice(e.target.value)}
        >
          <option value="initial">---Ordenar por precio---</option>
          <option value="low">Menor a mayor</option>
          <option value="high">Mayor a Menor</option>
        </select>
        <article className="products__list">
          {info.productsShown.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              image={product.image}
              color={product.color}
              price={new Intl.NumberFormat("de-DE").format(product.price)}
              id={product.id}
              addToCart={addToCart}
            />
          ))}
        </article>
      </div>
      <div className="products__filters">
        {id === undefined ? (
          <Filters
            filter={(e) => filterProducts(e.target.value)}
            clearFilter={clearFilter}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Products;
