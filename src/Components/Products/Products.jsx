import React from "react";
import "./Products.css";
import CategoryCard from "./Category/CategoryCard/CategoryCard.jsx";
import Product from "./Product/Product.jsx";

const Products = (props) => {
  const{ categories,products}=props
  return (
    <section className="Prosducts">
      <h2 className="products__title title">Producto</h2>
      <div className="products__categories">
        {categories.map((category) => (
          <CategoryCard
            id={category.id}
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
