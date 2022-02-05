import React from "react";
import "./Products.css";
import { products, categories } from "../../data.js";
import CategoryCard from "./CategoryCard/CategoryCard.jsx";
import Product from "./Product/Product.jsx";
const Products = () => {
  return (
    <section className="Products">
      <h2 className="products__title title">Categorías</h2>
      <div className="products__categories">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            img={category.url}
            color={category.color}
          />
        ))}
      </div>
      <div className="products__list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            color={product.color}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
