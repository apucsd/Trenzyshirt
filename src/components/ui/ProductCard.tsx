"use client";
import Image from "next/image";
import { EyeIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/react";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/features/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product }: { product: TProduct }) => {
  // console.log(product);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addToCart(product));
    toast.success("Product added successfully!!!");
  };
  // console.log(image);
  return (
    <div className=" bg-white w-full  shadow-md rounded-xl duration-500">
      <div className="group  flex w-full flex-col overflow-hidden bg-white">
        <div className="relative  overflow-hidden">
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
            <Image
              height={300}
              width={300}
              className="object-contain w-full h-full"
              src={product?.image as string}
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {product?.price * 0.01}% OFF
            </span>
          </div>

          <div className="absolute flex flex-col -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <Link href={`/single-shirt/${product?._id}`}>
              <Button size="sm" variant="shadow">
                <EyeIcon className="size-4" />
              </Button>
            </Link>
            <Button
              onClick={handleAddToCart}
              className="w-full"
              size="sm"
              variant="shadow"
              color="primary"
            >
              <ShoppingCart className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 pb-5">
          <a href="#">
            <h5 className="text-center tracking-tight text-gray-500">
              {product?.name}
            </h5>
          </a>
          <div className="mb-5 flex justify-center">
            <p>
              <span className="text-sm font-bold text-gray-900">
                ৳{product?.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ৳{product?.price * 0.05}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
