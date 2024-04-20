"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/react";
import React from "react";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addToCart(product));
    toast.success("Product added successfully!!!");
  };
  return (
    <Button
      onClick={handleAddToCart}
      className="w-full"
      color="primary"
      variant="shadow"
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
