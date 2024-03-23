/* eslint-disable react/no-unescaped-entities */
import FlashSaleCountdown from "@/components/flash-sale/FlashSaleCountdown";
import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types";
import React from "react";

const FlashSalePage = async () => {
  const res = await fetch(
    "https://trenzy-shirt-server.vercel.app/products/filter?flashSale=true",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { result: flashSales } = await res.json();
  return (
    <div className="my-10">
      <div className="my-5 text-center space-y-3 bg-[#ECECEC] py-10">
        <h1 className="md:text-4xl text-xl  font-medium">Flash Sale</h1>
        <p className="text-primary/70">
          Hurry, Grab Your Favorites Before They're Gone!
        </p>
        <FlashSaleCountdown />
      </div>
      <div>
        <div className=" p-5">
          <div className="my-5 container grid md:grid-cols-4  justify-center place-items-center">
            {flashSales?.map((item: TProduct) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
