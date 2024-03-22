import FilterSidebar from "@/components/layout/FilterSidebar";
import { ReactNode } from "react";

const ProductsLayout = async ({ children }: { children: ReactNode }) => {
  // const categoryLinks = [
  //   { label: "Casual Shirts", href: "/mens-shirts?category=casual" },
  //   { label: "Formal Shirts", href: "/mens-shirts?category=formal" },
  //   { label: "Party Wear", href: "/mens-shirts?category=party-wear" },
  //   { label: "T-Shirts", href: "/mens-shirts?category=t-shirts" },
  //   { label: "Polo Shirts", href: "/mens-shirts?category=polo-shirts" },
  // ];

  // console.log(result);
  return (
    <div className="grid container md:grid-cols-12 bg-slate-100">
      <FilterSidebar />
      <div className="col-span-9 p-5 ">{children}</div>
    </div>
  );
};

export default ProductsLayout;
