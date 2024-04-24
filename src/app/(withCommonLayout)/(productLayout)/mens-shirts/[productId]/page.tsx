/* eslint-disable @next/next/no-img-element */
import AddToCartButton from "@/components/ui/AddToCartButton";
import { TProduct } from "@/types";
import { Metadata } from "next";

import React from "react";

type TProductDetailsParams = {
  productId: string;
};

export async function generateMetadata({
  params,
}: {
  params: TProductDetailsParams;
}): Promise<Metadata> {
  // read route params
  const id = params.productId;

  // fetch data
  const product = await fetch(
    `https://trenzy-shirt-server.vercel.app/products/${id}`
  );
  const resMetadata = await product.json();
  // console.log(resMetadata);

  return {
    title: resMetadata.result.name,
    description: resMetadata.result.description,
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`https://trenzy-shirt-server.vercel.app/products`);
  const { result: products } = await res.json();

  return products.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};
const ProductDetails = async ({
  params,
}: {
  params: TProductDetailsParams;
}) => {
  // console.log(params);
  const id = params.productId;
  const res = await fetch(
    `https://trenzy-shirt-server.vercel.app/products/${id}`
  );
  const { result: product } = await res.json();
  // console.log(product);
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={product?.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product?.image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product?.image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={product?.image}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {product?.name}
            </h1>
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">
                1,209 Reviews
              </p>
            </div>
            <h2 className="mt-8 text-base text-gray-900">Size Type</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label>
                <input
                  type="radio"
                  name="type"
                  defaultValue="Powder"
                  className="peer sr-only"
                  defaultChecked
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  L
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  defaultValue="Whole Bean"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  XL
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  defaultValue="Groud"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  XXL
                </p>
              </label>
            </div>
            <h2 className="mt-8 text-base text-gray-900">Choose Color</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label>
                <input
                  type="radio"
                  name="subscription"
                  defaultValue="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 rounded-lg border border-black px-6 py-2 font-bold">
                  Blue
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="subscription"
                  defaultValue="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-red-500 rounded-lg border border-black px-6 py-2 font-bold">
                  Red
                </p>
              </label>
              <label>
                <input
                  type="radio"
                  name="subscription"
                  defaultValue="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white peer-checked:border-black rounded-lg border border-black px-6 py-2 font-bold">
                  Black
                </p>
              </label>
            </div>
            <div className="mt-10 flex gap-5 flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">${product?.price}</h1>
              </div>
              <AddToCartButton product={product} />
            </div>
            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Free shipping worldwide
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>
        </div>

        {/* review section */}
        <div className=" bg-gray-50">
          {/* Reviews */}
          <div className="my-10 mx-auto  px-10 py-16">
            <div className="flex w-full flex-col">
              <div className="flex flex-col sm:flex-row">
                <h1 className="max-w-sm text-3xl font-bold text-blue-900">
                  What people think <br />
                  about this product!!!
                </h1>
                <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 sm:ml-auto">
                  <div className="flex h-16 items-center text-2xl font-bold text-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.7
                  </div>
                  <p className="text-sm text-gray-500">Average User Rating</p>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="font-medium">Reviews</p>
                <ul className="mb-6 mt-2 space-y-2">
                  <li className="flex items-center text-sm font-medium">
                    <span className="w-3">5</span>
                    <span className="mr-4 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-10/12 bg-yellow-400" />
                    </div>
                    <span className="w-3">56</span>
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="w-3">4</span>
                    <span className="mr-4 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-8/12 bg-yellow-400" />
                    </div>
                    <span className="w-3">12</span>
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="w-3">3</span>
                    <span className="mr-4 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-1/12 bg-yellow-400" />
                    </div>
                    <span className="w-3">4</span>
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="w-3">2</span>
                    <span className="mr-4 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-0 bg-yellow-400" />
                    </div>
                    <span className="w-3">0</span>
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="w-3">1</span>
                    <span className="mr-4 text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full w-1/12 bg-yellow-400" />
                    </div>
                    <span className="w-3">5</span>
                  </li>
                </ul>
              </div>
              <button className="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">
                Write a review
              </button>
            </div>
          </div>
          {/* /Reviews */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
