import { products } from "../../data.js";

export const filterByCategory = (value) =>
  products.filter((product) => product.category === value);

export const filterBySubcategory = (value) =>
  products.filter((product) => product.subcategory === value);
/* Filter by type */
export const filterByType = (products, value) =>
  products.filter((product) => product.type === value);

/* Filter by Shape */
export const filterByShape = (products, value) =>
  products.filter((product) => product.shape === value);

/* Filter by Flavor */
export const filterByFlavor = (products, value) =>
  products.filter(
    (product) => product.flavor === value || product.flavor[1] === value
  );

/* Filter by Quantity */
export const filterByQuantity = (products, value) =>
  products.filter(
    (product) => product.flavor === value || product.quantity === value
  );

/* Filter by Size */
export const filterBySize = (products, value) =>
  products.filter(
    (product) => product.flavor === value || product.size === value
  );

/* Sort by price 
lowest to highest-> value="low" or highest to lowest -> value="high"  */
export const sortbyPrice = (products, order) =>
  products.sort((a, b) =>
    order === "low"
      ? a.price - b.price
      : order === "high"
      ? b.price - a.price
      : a.id - b.id
  );

export const filter = (products, value) => {
  if (
    value === "Redonda" ||
    value === "Corazón" ||
    value === "Molde" ||
    value === "Rectangular"
  ) {
    return products.filter((product) => product.shape === value);
  } else if (
    value === "Mora" ||
    value === "Durazno" ||
    value === "Banano" ||
    value === "Nuez"
  ) {
    return products.filter(
      (product) => product.flavor === value || product.flavor[1] === value
    );
  } else if (value === "Individual" || value === "Paquete") {
    return products.filter((product) => product.quantity === value);
  } else {
    return products;
  }
};

console.log(filter(products, "Nuez"));
export const getProductDetails = (id) =>
  products.filter((product) => product.id === id);
