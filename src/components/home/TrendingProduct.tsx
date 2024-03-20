import Link from "next/link";
import { Button } from "../ui/button";
import ProductCard from "../ui/ProductCard";
import { ChevronRight } from "lucide-react";

const TrendingProduct = () => {
  return (
    <div className="my-10 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl text-xl text-start font-medium">
            Trending Products
          </h1>
        </div>
        <div>
          <Link href="/flash-sale">
            <Button>
              View All <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="my-10 grid
     md:grid-cols-3 gap-5  justify-center place-items-center"
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
