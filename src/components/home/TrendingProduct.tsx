import Link from "next/link";
import { Button } from "../ui/button";
import ProductCard from "../ui/ProductCard";
import { ChevronRight } from "lucide-react";
import { TProduct } from "@/types";

const TrendingProduct = async () => {
  const res = await fetch(
    "https://trenzy-shirt-server.vercel.app/products/filter?topRated=true",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { result: trendingProducts } = await res.json();
  // console.log(trendingProducts);
  return (
    <div className="my-10 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl text-xl text-start font-medium">
            Trending Products
          </h1>
        </div>
        <div>
          <Link href="/mens-shirts">
            <Button>
              See All Products <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="my-10 grid
     md:grid-cols-3 gap-5  justify-center place-items-center"
      >
        {trendingProducts.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
