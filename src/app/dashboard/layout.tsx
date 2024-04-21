"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  if (!user) {
    return router.push("/login");
  }
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r">
          <DashboardSidebar />
        </div>
        <div className="col-span-10 w-full p-5">{children}</div>
      </div>
    </>
  );
};
export default DashboardLayout;
