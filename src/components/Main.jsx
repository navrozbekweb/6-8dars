import React, { useState } from "react";
import { products } from "../data/Product";
import Products from "./Products";
import FilterSearch from "./FilterSearch";

function Main() {
  const [data, setData] = useState(products);

  function searchProd(value) {
    if (value === "") {
      setData(products);
      return;
    }
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(result);
  }

  function searchCatigory(category) {
    if (category === "") {
      setData(products);
      return;
    }
    const result = products.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setData(result);
  }

  return (
    <>
      <FilterSearch searchProd={searchProd} searchCatigory={searchCatigory} />
      <Products products={data} />
    </>
  );
}

export default Main;
