/* eslint-disable @next/next/no-img-element */
import Ratings from "@/components/ui/Ratings";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type TProductDetailsParams = {
  productId: string;
};
const ProductDetails = async ({
  params,
}: {
  params: TProductDetailsParams;
}) => {
  // console.log(params);
  const id = params.productId;
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const { result: product } = await res.json();
  // console.log(product);
  return (
    <div className="container bg-white">
      <div>
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 relative h-96 py-10 rounded-xl ">
                <Image
                  fill
                  src={product.image}
                  alt="Product"
                  className="w-full mx-auto rounded object-contain"
                />
              </div>
              {/* <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <img
                    src="https://readymadeui.com/images/laptop2.webp"
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <img
                    src="https://readymadeui.com/images/laptop3.webp"
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <img
                    src="https://readymadeui.com/images/laptop4.webp"
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
                <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <img
                    src="https://readymadeui.com/images/laptop5.webp"
                    alt="Product2"
                    className="w-24 cursor-pointer"
                  />
                </div>
              </div> */}
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-primary">
                {product.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-6">
                <p className="text-primary text-4xl font-bold">
                  ৳ {product.price}
                </p>
                <p className="text-gray-400 text-xl">
                  ৳20 <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <Ratings rating={product.rating} />
                <h4 className="text-primary text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button className="w-full">Buy Now</Button>
                <Button className="w-full"> Add to cart</Button>
              </div>
            </div>
          </div>
          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-primary">
              Product information
            </h3>
            <ul className="mt-6 space-y-6 uppercase text-primary">
              <li className="text-sm">
                Product Information
                <span className="ml-4 float-right ">{product.name}</span>
              </li>
              <li className="text-sm">
                Category
                <span className="ml-4 float-right ">{product.category}</span>
              </li>
              <li className="text-sm">
                Brand <span className="ml-4 float-right">{product.brand}</span>
              </li>
            </ul>
            <div>
              <h3 className="text-lg font-bold my-4 text-primary">
                Product Short Details
              </h3>

              <h3 className="uppercase text sm">{product.description}</h3>
            </div>
          </div>
          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-lg font-bold text-primary">Reviews(10)</h3>
            <div className="grid md:grid-cols-2 gap-12 mt-6">
              <div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <p className="text-sm text-primary font-bold">5.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-[#333]" />
                    </div>
                    <p className="text-sm text-primary font-bold ml-3">66%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-primary font-bold">4.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-[#333]" />
                    </div>
                    <p className="text-sm text-primary font-bold ml-3">33%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-primary font-bold">3.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-[#333]" />
                    </div>
                    <p className="text-sm text-primary font-bold ml-3">16%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-primary font-bold">2.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-[#333]" />
                    </div>
                    <p className="text-sm text-primary font-bold ml-3">8%</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-primary font-bold">1.0</p>
                    <svg
                      className="w-5 fill-[#333] ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-[#333]" />
                    </div>
                    <p className="text-sm text-primary font-bold ml-3">6%</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt=""
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-primary">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#333]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold text-primary">
                        2 mins ago
                      </p>
                    </div>
                    <p className="text-sm mt-4 text-primary">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-primary font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
