import { Star } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  const ratingLinks = [
    { rating: "4-5", label: "4-5", href: "/mens-shirts/?ratings=4-5" },
    { rating: "3-4", label: "3-4", href: "/mens-shirts?ratings=3-4" },
    { rating: "2-3", label: "2-3", href: "/mens-shirts?ratings=2-3" },
    { rating: "1-2", label: "1-2", href: "/mens-shirts?ratings=1-2" },
  ];
  const priceLinks = [
    { label: "Under ৳25", href: "/mens-shirts?price=under-25" },
    { label: "৳25 to ৳50", href: "/mens-shirts?price=25-50" },
    { label: "৳50 to ৳100", href: "/mens-shirts?price=50-100" },
    { label: "Over ৳100", href: "/mens-shirts?price=over-100" },
  ];
  const categoryLinks = [
    { label: "Casual Shirts", href: "/mens-shirts?category=casual" },
    { label: "Formal Shirts", href: "/mens-shirts?category=formal" },
    { label: "Party Wear", href: "/mens-shirts?category=party-wear" },
    { label: "T-Shirts", href: "/mens-shirts?category=t-shirts" },
    { label: "Polo Shirts", href: "/mens-shirts?category=polo-shirts" },
  ];

  return (
    <div className="grid container md:grid-cols-12">
      <div className="col-span-3 border  min-h-screen">
        {/* filter by price */}
        <details open className="  w-full overflow-hidden  p-2 text-gray-700">
          <summary className="flex flex-col cursor-pointer select-none items-center justify-between px-5 py-3 lg:hidden"></summary>
          <form className="flex flex-col border-t border-gray-200 lg:border-t-0">
            <fieldset className="w-full">
              <legend className="block w-full  px-5 py-3 text-xs font-medium">
                Ratings
              </legend>
              <div className="space-y-2 px-5 py-6 border">
                {ratingLinks.map((item) => (
                  <div key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      className="ml-3 my-2 w-full bg-slate-100 px-2 py-1 hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                    >
                      <Star className="text-yellow-500 size-4" />
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset className="w-full">
              <legend className="block w-full  px-5 py-3 text-xs font-medium">
                Price
              </legend>
              <div className="space-y-2 px-5 py-6 border">
                {priceLinks.map((item) => (
                  <div key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      className="ml-3 my-2 w-full bg-slate-100 px-2 py-1 hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset className="w-full">
              <legend className="block w-full  px-5 py-3 text-xs font-medium">
                Category
              </legend>
              <div className="space-y-2 px-5 py-6 border">
                {categoryLinks.map((item) => (
                  <div key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      className="ml-3 my-2 w-full bg-slate-100 px-2 py-1 hover:bg-slate-50 text-sm flex items-center gap-3 font-medium"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </fieldset>
          </form>
        </details>
      </div>
      <div className="col-span-9 p-5 ">{children}</div>
    </div>
  );
};

export default ProductsLayout;
