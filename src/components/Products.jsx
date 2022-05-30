import axios from "axios";
import React from "react";

const Products = () => {
  axios.get("http://localhost:8080/products").then((res)=>{
    setNewProduct(res.data)
  })
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
