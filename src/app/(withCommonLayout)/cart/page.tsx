"use client";
import { useAppSelector } from "@/redux/hook";
import { CircleArrowOutUpLeftIcon } from "lucide-react";
import Link from "next/link";
import CheckOutModal from "@/components/modal/CheckOutModal";
import CartProductCard from "@/components/ui/CartProductCard";
import { Button } from "@nextui-org/react";

const ProductCartPage = () => {
  const { products, subTotal, deliveryCharge, total } = useAppSelector(
    (state) => state.cart
  );
  return (
    <div>
      {products.length > 0 ? (
        <div className="md:container mx-auto mt-10">
          <div className="md:flex shadow-md my-10">
            <div className="md:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {products.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {products.length > 0 &&
                products.map((product) => {
                  return (
                    <CartProductCard key={product._id} product={product} />
                  );
                })}

              <Link
                href="/mens-shirts"
                className="flex gap-2 font-semibold text-primary text-sm mt-10"
              >
                <CircleArrowOutUpLeftIcon />
                Continue Shopping
              </Link>
            </div>
            <div id="summary" className="md:w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {products.length}
                </span>
                <span className="font-semibold text-sm">
                  ৳ {subTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Delivery Charge
                </span>
                <span className="font-semibold text-sm">
                  ৳ {deliveryCharge.toFixed(2)}
                </span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>৳ {total.toFixed(2)}</span>
                </div>

                <CheckOutModal products={products} total={total} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen text-white w-full flex flex-col justify-center items-center">
          <h1 className="bg-primary  px-10 py-2 text-2xl md:text-4xl rounded-lg shadow-xl">
            Your cart is currently empty.
          </h1>
          <Button
            className="my-3 text-white"
            variant="shadow"
            color="secondary"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCartPage;
