import React from "react";
// import styled, { css } from "styled-components";
import Title from "./ComplexTitle";
import Product from "./Product";

const products = [
  { id: 1, name: "chair", price: 30 },
  { id: 2, name: "table", price: 150 },
  { id: 3, name: "monitor", price: 200 },
  { id: 4, name: "bed", price: 550 },
  { id: 5, name: "lamp", price: 15 },
];

const Products = () => {
  return (
    <section>
      <Title title="all products" />
      {products.map(product => {
        return <Product {...product} key={product.id} />;
      })}
    </section>
  );
};

export default Products;
