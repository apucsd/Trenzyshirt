"use client";
import {
  TCartProduct,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const CartProductCard = ({ product }: { product: TCartProduct }) => {
  console.log(product);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (_id: string) => {
    dispatch(removeFromCart({ _id }));
    toast.success("Product removed successfully!!!");
  };
  return (
    <div className="flex items-center  -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <Image src={product?.image} height={100} width={100} alt="product" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className=" w-full md:max-w-full max-w-[5ch] text-xs  md:text-lg uppercase">
            {product?.name}
          </span>
          <span className="text-red-500 hidden md:block text-xs uppercase">
            {product?.category}
          </span>
          <div className="font-semibold hover:text-red-500 text-gray-500 text-xs">
            <button onClick={() => handleRemoveFromCart(product?._id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:w-1/5 items-center">
        <button
          onClick={() =>
            dispatch(updateQuantity({ type: "decrease", _id: product?._id }))
          }
        >
          <CgMathMinus />
        </button>

        <div>
          <p className="p-3">{product?.selectedQuantity}</p>
        </div>
        <button
          onClick={() =>
            dispatch(updateQuantity({ type: "increase", _id: product._id }))
          }
        >
          <CgMathPlus />
        </button>
      </div>
      <span className="text-center md:w-1/5 mr-3 font-semibold text-xs md:text-sm">
        ৳ {product.price.toFixed(2)}
      </span>
      <span className="text-center md:w-1/5 font-semibold text-xs md:text-sm">
        ৳ {product.selectedPrice!.toFixed(2)}
      </span>
    </div>
  );
};

export default CartProductCard;
