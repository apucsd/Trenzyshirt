import Image from "next/image";
import { Button } from "./button";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className=" bg-white w-full md:max-w-xs shadow-md rounded-xl duration-500">
      <div className="group  flex w-full flex-col overflow-hidden bg-white">
        <div className="relative  overflow-hidden">
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
            <Image
              height={300}
              width={300}
              className="object-contain w-full h-full"
              src="https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2024/03/6ee5cf72-053e-444e-95a5-9daa07c55142-300x400.jpg"
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </div>

          <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <Link href={`/mens-shirts/123`}>
              <Button>
                <EyeIcon />
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-4 pb-5">
          <a href="#">
            <h5 className="text-center tracking-tight text-gray-500">
              Piped Linen Blend Blazer
            </h5>
          </a>
          <div className="mb-5 flex justify-center">
            <p>
              <span className="text-sm font-bold text-gray-900">$179</span>
              <span className="text-sm text-gray-400 line-through">$499</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
