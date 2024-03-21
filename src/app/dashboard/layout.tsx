import { Home, ListChecks } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
        {/* Informação */}
        <div className="flex flex-shrink-0 items-center space-x-4 text-white">
          {/* Texto */}
          <div className="flex flex-col items-end ">
            {/* Nome */}
            <div className="text-md font-medium ">Unknow Unknow</div>
            {/* Título */}
            <div className="text-sm font-regular">Student</div>
          </div>
          {/* Foto */}
          <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
        </div>
      </header>

      <div className="grid container gap-3 md:grid-cols-12">
        <div className="col-span-2 p-5 min-h-screen bg-primary/10">
          <ul className="flex flex-col justify-center gap-4 my-5">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Home />
                <span className="ml-3">Back Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/all-products"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ListChecks />
                <span className="ml-3">All Products</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 p-5">{children}</div>
      </div>
    </>
  );
};
export default DashboardLayout;
