import React, { useState } from "react";
// import Pagination from "./Pagination";

const AddProduct = () => {
 const [data,dataState]=useState("")
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  return (
    <>
      <button my={4} data-cy="add-product-button">Add New Product</button>
      <Modal>
        <ModalBody pb={6}>
        <label>Title</label>
          <input onClick={Input} placeholder="title"  data-cy="add-product-title" />
          <Select data-cy="add-product-category">
          <label>categories</label>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
         
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"></Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
