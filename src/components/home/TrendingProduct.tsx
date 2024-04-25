import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import { ChevronRight } from "lucide-react";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/react";

const TrendingProduct = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/filter/top-rated`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { result: trendingProducts } = await res.json();
  return (
    <div className="my-10 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl truncate uppercase text-xl text-start font-medium">
            Top Rated Products
          </h1>
        </div>
        <div>
          <Link href="/mens-shirts">
            <Button variant="shadow" color="primary">
              See All
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="my-10 grid
     md:grid-cols-3 gap-5  justify-center place-items-center"
      >
        {trendingProducts.slice(0, 6).map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
