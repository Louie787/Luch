import React from "react";

const ProductPage = props => {
  return <h1>Product Page {props.match.params.id}</h1>;
};

export default ProductPage;
