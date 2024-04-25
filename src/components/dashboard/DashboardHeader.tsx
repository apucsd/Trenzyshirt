"use client";
import { logoutUser } from "@/redux/features/authSlice";
/* eslint-disable @next/next/no-img-element */

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
const DashboardHeader = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully!!!");
    router.push("/");
  };
  return (
    <nav className=" border-b border-gray-200 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 justify-start">
            <Link href="/" className="text-2xl flex gap-1">
              <h2 className="">Trenzy</h2>
              <p className=" bg-secondary rounded px-1 text-white shadow-sm">
                Shirt
              </p>
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <div className="hidden md:block">
              <Input
                type="email"
                labelPlacement="outside"
                startContent={
                  <CiSearch className="text-2xl hidden md:block text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            <div className="hidden lg:flex items-center">
              <span className="text-base text-nowrap font-normal text-gray-500 mr-5">
                Hi, {user?.email}
              </span>
            </div>
            <Button variant="shadow" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
