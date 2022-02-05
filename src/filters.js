import { products } from "./data";

/* Filter by type */
export const filterByType = (value) =>
  products.filter((product) => product.type === value);

/* Filter by Shape */
export const filterByShape = (value) =>
  products.filter((product) => product.shape === value);

/* Filter by Flavor */
export const filterByFlavor = (value) =>
  products.filter(
    (product) => product.flavor === value || product.flavor[1] === value
  );

/* Filter by Quantity */
export const filterByQuantity = (value) =>
  products.filter(
    (product) => product.flavor === value || product.quantity === value
  );

/* Filter by Quantity */
export const filterBySize = (value) =>
  products.filter(
    (product) => product.flavor === value || product.size === value
  );

/* Sort by price 
lowest to highest-> value="low" or highest to lowest -> value="high"  */
export const sortbyPrice = (order) =>
  products.sort((a, b) =>
    order === "low" ? a.price - b.price : b.price - a.price
  );



  
export const getProductDetails = (id) => products.filter((product) => product.id === id);
