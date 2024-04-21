"use client";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  if (user) {
    return router.push(`/dashboard/${user.role}`);
  }

  return router.push(`/`);
};

export default DashboardPage;
