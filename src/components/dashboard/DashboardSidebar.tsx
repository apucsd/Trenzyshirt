"use client";
import { useAppSelector } from "@/redux/hook";
import { TUserRole } from "@/types";
import { generateSideItem } from "@/utils/generateSideItem";
import React from "react";
import LinkItem from "./LinkItem";

const DashboardSidebar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="relative  min-h-screen">
      <div className="flex flex-col w-full font-medium">
        {/* menu item */}
        <div className="flex flex-col gap-5 p-3">
          {generateSideItem(user?.role as TUserRole).map((link) => (
            <LinkItem
              id={link.id}
              key={link.id}
              href={link.href}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
