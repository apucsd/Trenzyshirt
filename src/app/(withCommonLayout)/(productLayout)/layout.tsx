import FilterSidebar from "@/components/layout/FilterSidebar";
import { ReactNode } from "react";

const ProductsLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid container md:grid-cols-12 bg-slate-100 min-h-screen">
      <FilterSidebar />
      <div className="col-span-9 p-5 ">{children}</div>
    </div>
  );
};

export default ProductsLayout;
