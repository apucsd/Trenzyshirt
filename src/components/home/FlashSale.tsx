import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import { TProduct } from "@/types";

const FlashSale = async () => {
  const res = await fetch(
    "https://trenzy-shirt-server.vercel.app/products/filter?flashSale=true",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { result: flashSales } = await res.json();
  // console.log(result);
  return (
    <div className=" p-5">
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
        {flashSales?.slice(0, 4).map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
