import React from "react";

const CategoryCard = (props) => {
  const { name, img, color } = props;
  return (
    <div className="category" style={{ backgroundImage: `${color}` }}>
      {/* Background color depends on product category */}
      <h3 className="category__title subtitle">{name}</h3>
      <img src={img} alt={name} className="category__img" />
    </div>
  );
};

export default CategoryCard;
