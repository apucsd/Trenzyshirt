import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../ui/ProductCard";

const FlashSale = () => {
  return (
    <div className="my-10 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl text-xl text-start font-medium">
            Flash Sale
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
        className="my-5 grid
       md:grid-cols-4 gap-3 justify-center place-items-center"
      >
        {[1, 2, 3, 4].map((item, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
