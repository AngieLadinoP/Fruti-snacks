import React from "react";
import {products} from "../../../../data.js";
import {useParams} from 'react-router-dom'
import CardDetails from "./CardDetails/CardDetails"

const ProductDetails = () => {
  const {id}=useParams();

  const getProductDetails = (id) => products.filter((product) => product.id === id);

  const product=getProductDetails(parseInt(id))

  return (
    <div>
      <h2 className="product-details__title title">Información del producto</h2>
      
      <CardDetails data={product[0]} />
    </div>
  );
};

export default ProductDetails;
