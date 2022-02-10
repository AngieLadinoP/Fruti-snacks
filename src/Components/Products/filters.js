import { products } from "../../data.js";

export const filterByCategory = (value) =>
  products.filter((product) => product.category === value);

export const filterBySubcategory = (value) =>
  products.filter((product) => product.subcategory === value);
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

/* Filter by Size */
export const filterBySize = (value) =>
  products.filter(
    (product) => product.flavor === value || product.size === value
  );

/* Sort by price 
lowest to highest-> value="low" or highest to lowest -> value="high"  */
export const sortbyPrice = (listproducts, order) =>
  listproducts.sort((a, b) =>
    order === "low"
      ? a.price - b.price
      : order === "high"
      ? b.price - a.price
      : a.id - b.id
  );

export const getProductDetails = (id) =>
  products.filter((product) => product.id === id);