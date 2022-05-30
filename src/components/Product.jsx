import React, {useEffect, useState } from "react";
import {Stack,Image,Tag,TagLabel,Box,Text,Heading} from 'chakra-ui/react'
import axios from "axios"

const Product = () => {
  const [carddata, setCarddata]=useState([])

  useEffect(()=>{
    const GetData= async ()=>{
      let res= await axios.get("http://localhost:8080/products")
      setCarddata(r.data)
      console.log(res)
    }
    GetData()

  },[])

  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
