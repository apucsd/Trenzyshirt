import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import { TProduct } from "@/types";
import { Button } from "@nextui-org/react";

const FlashSale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/products/filter/flash-sales`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { result: flashSales } = await res.json();

  return (
    <div className=" p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl uppercase text-xl text-start font-medium">
            Flash Sale
          </h1>
        </div>
        <div>
          <Link href="/flash-sale">
            <Button variant="shadow" color="primary">
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
      <div className="flex max-sm:flex-col items-center justify-center bg-primary text-white px-6 py-3.5 rounded font-[sans-serif]">
        <p className="text-base">Limited Time Offer: Get Upto 50% Off!</p>
      </div>
    </div>
  );
};

export default FlashSale;
