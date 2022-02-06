import React from "react";
import "./Products.css";
import CategoryCard from "./Category/CategoryCard/CategoryCard.jsx";
import Product from "./Product/Product.jsx";
import {products, categories, subcategory1, subcategory2} from  "../../data.js"
import {useParams} from "react-router-dom"

const Products = () => {

const{id}=useParams()

const filterByCategory = (value) =>
  products.filter((product) => product.category === value);

const filterBySubcategory = (value) =>
  products.filter((product) => product.subcategory=== value);

const showInfo=(idCategory)=>{
  if (idCategory==="c1") {
    return ["Galletas de mantequilla",filterByCategory("Galletas de mantequilla"), subcategory1]
    }else if (idCategory==="c2"){
      return ["Muffins y panes de banano", filterByCategory("Muffins y panes de banano"),subcategory2]
      }else if(idCategory==="c11"){
        return ["Galletas tradicionales", filterBySubcategory("Galletas tradicionales"),null]
        }else if(idCategory==="c12"){
          return ["Galletas con mermelada", filterBySubcategory("Galletas con mermelada"),null]
        }else if (idCategory==="c21"){
          return ["Muffins de banano",filterBySubcategory("Muffins de banano"),null]
        }else if (idCategory==="c22"){
          return ["Panes de banano",filterBySubcategory("Panes de banano"),null]
        }else{
          return ["Productos",products, categories]
        }
}
const [title, productsShown,categoriesShown]= showInfo(id)  /*  Destructuring information to return more than one value  */

  return (
    <section className="Products">
      <h2 className="products__title title">{title}</h2>
      <div className="products__categories">
        {categoriesShown ? (
          categoriesShown.map((category) => (
          <CategoryCard
            id={category.id}
            key={category.id}
            name={category.name}
            img={category.url}
            color={category.color}
          />
        ))
        ):null}
      </div>
      <div className="products__list">
        {productsShown.map((product) => (
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
