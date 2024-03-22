/* eslint-disable react/no-unescaped-entities */
import ProductCard from "@/components/ui/ProductCard";
import getAllProducts from "@/hooks/getAllProducts";
import { TProduct } from "@/types";
import Image from "next/image";

const MensShirtsPage = async ({ searchParams }: { searchParams: any }) => {
  const { result: allProducts } = await getAllProducts(searchParams);
  console.log(allProducts.length);
  // console.log(searchParams);

  // Convert the searchParams object to an array of [key, value] pairs

  return (
    <div>
      {allProducts?.length == 0 ? (
        <div className="w-full space-y-5 h-[80vh] flex flex-col justify-center items-center text-center">
          <div className="w-[300px]">
            <Image
              className="object-contain w-full"
              src="/not-found.svg"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <p className="bg-slate-100 w-full  p-5 font-semibold">
            Product not found
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold text-xl bg-slate-100 p-3">
            Mens's Shirts
          </h2>
          <br />
          <p className="text-sm text-slate-800">
            {allProducts.length} items found in Mens's Shirts
          </p>
        </div>
      )}
      <div
        className="my-5 grid
       md:grid-cols-4 gap-3 justify-center place-items-center"
      >
        {allProducts?.map((item: TProduct) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MensShirtsPage;
