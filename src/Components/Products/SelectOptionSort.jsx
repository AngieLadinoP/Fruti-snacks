import React from "react";
import { useState } from "react";

const SelectOptionSort = () => {
  const [optionValue, setOptionValue] = useState();
  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  console.log(optionValue);
  return (
    <select name="sort" onChange={handleChange}>
      <option value="sort">---Ordenar por precio---</option>
      <option value="low">Menor a mayor</option>
      <option value="high">Mayor a menor</option>
    </select>
  );
};

export default SelectOptionSort;
