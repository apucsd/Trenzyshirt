"use client";
import useGetAllCategory from "@/hooks/getAllCategory";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const FilterSidebar = () => {
  const router = useRouter();
  const { categories } = useGetAllCategory();
  const ratingLinks = [
    {
      rating: "5",
      label: "⭐⭐⭐⭐⭐",
    },
    {
      rating: "4",
      label: "⭐⭐⭐⭐",
    },
    { rating: "3", label: "⭐⭐⭐" },
    { rating: "2", label: "⭐⭐" },
    { rating: "1", label: "⭐" },
  ];
  const priceLinks = [
    { label: "Under ৳300", price: "100-300" },
    { label: "৳1000 to ৳1200", price: "1000-1200" },
    { label: "৳1200 to ৳1500", price: "1200-1500" },
    { label: "৳1200 to ৳1500", price: "1500-2000" },
    { label: "৳2000 to ৳4000", price: "2000-4000" },
  ];

  const handleFilterByRatings = (filterQuery: string | number) => {
    // console.log(filterQuery);

    return router.push(`/mens-shirts?rating=${filterQuery}`);
  };
  const handleFilterByPrice = (filterQuery: string | number) => {
    return router.push(`/mens-shirts?price=${filterQuery}`);
  };
  const handleFilterByCategory = (filterQuery: string | number) => {
    return router.push(`/mens-shirts?category=${filterQuery}`);
  };
  return (
    <div className="col-span-12 md:col-span-3  p-5 min-h-screen">
      {/* filter by price */}
      <details open className="  w-full overflow-hidden  p-2">
        <summary className="flex flex-col cursor-pointer select-none items-center justify-between px-5 py-3 lg:hidden"></summary>
        <div className="flex flex-col border-t border-gray-200 lg:border-t-0">
          <div className="my-4">
            <h1 className="block w-full font-semibold  text-lg">
              Filter By Ratings
            </h1>

            <div className="space-y-1 py-2">
              <hr className="border" />

              <RadioGroup
                onValueChange={(value) => handleFilterByRatings(value)}
              >
                {ratingLinks.map((item, i) => {
                  return (
                    <Radio key={i} value={item.rating} checked={true}>
                      {item.label}
                    </Radio>
                  );
                })}
              </RadioGroup>
            </div>
          </div>
          <div className="w-full my-4">
            <h1 className="block w-full font-semibold  text-lg">
              Filter By Price
            </h1>

            <div className="space-y-1 py-2">
              <hr className="border" />
              <RadioGroup onValueChange={(value) => handleFilterByPrice(value)}>
                {priceLinks.map((item, i) => {
                  return (
                    <Radio key={i} value={item.price}>
                      {item.label}
                    </Radio>
                  );
                })}
              </RadioGroup>
            </div>
          </div>
          <div className="w-full my-4">
            <h1 className="block w-full font-semibold  text-lg">
              Filter By Category
            </h1>

            <div className="space-y-1 py-2">
              <hr className="border" />
              <RadioGroup
                onValueChange={(value) => handleFilterByCategory(value)}
              >
                {categories &&
                  categories.map((item, i) => {
                    return (
                      <Radio className="capitalize" key={i} value={item}>
                        {item}
                      </Radio>
                    );
                  })}
              </RadioGroup>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default FilterSidebar;
