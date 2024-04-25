/* eslint-disable @next/next/no-img-element */
import AddToCartButton from "@/components/ui/AddToCartButton";
import { TProduct } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
type TProductDetailsParams = {
  productId: string;
};

export async function generateMetadata({
  params,
}: {
  params: TProductDetailsParams;
}): Promise<Metadata> {
  const id = params.productId;
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${id}`
  );
  const resMetadata = await product.json();
  // console.log(resMetadata);

  return {
    title: resMetadata.result.name,
    description: resMetadata.result.description,
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/products`);
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
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/${id}`
  );
  const { result: product } = await res.json();
  // console.log(product);
  return (
    <section className="py-12 sm:py-16">
      <div className=" ">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 w-full lg:sticky top-0 text-center mx-auto">
              <div className=" px-4 rounded-xl">
                <Image
                  width={400}
                  height={400}
                  src={product.image}
                  alt="Product"
                  className="w-4/5 rounded object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-4xl font-extrabold  uppercase">
                {product.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className=" text-4xl font-bold"> ৳ {product.price}</p>
                <p className=" text-xl">
                  ৳{product?.price * 0.05}
                  <span className="text-sm ml-1">Discount</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className=" text-base">0 Reviews</h4>
              </div>
              <div className="flex flex-wrap max-w-xs gap-4 mt-8">
                <AddToCartButton product={product} />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold ">About the coffee</h3>
                <p className="space-y-3 list-disc mt-4 pl-4 text-sm ">
                  {product.description}
                </p>
              </div>
              <div className="mt-8">
                <div className="mt-8">
                  <h3 className="text-lg font-bold ">Reviews(10)</h3>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">5.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-2/3 h-full rounded bg-yellow-300" />
                      </div>
                      <p className="text-sm  font-bold ml-3">66%</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">4.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/3 h-full rounded bg-yellow-300" />
                      </div>
                      <p className="text-sm  font-bold ml-3">33%</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">3.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/6 h-full rounded bg-yellow-300" />
                      </div>
                      <p className="text-sm  font-bold ml-3">16%</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">2.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-yellow-300" />
                      </div>
                      <p className="text-sm  font-bold ml-3">8%</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">1.0</p>
                      <svg
                        className="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-yellow-300" />
                      </div>
                      <p className="text-sm  font-bold ml-3">6%</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-8">
                  <Image
                    height={100}
                    width={100}
                    alt=""
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold ">John Doe</h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-yellow-300"
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
                      <p className="text-xs !ml-2 font-semibold ">2 mins ago</p>
                    </div>
                    <p className="text-xs mt-4 ">
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-yellow-300  font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
