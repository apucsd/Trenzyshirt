"use client";
import { TLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ href, icon, title }: TLink) => {
  const linkPath = `/dashboard/${href}`;
  const pathname = usePathname();
  return (
    <Link
      className={`${
        linkPath === pathname
          ? "bg-primary hover:bg-primary/80 text-white shadow-xl"
          : ""
      } hover:bg-primary hover:bg-primary/80 hover:text-white   transition p-2 rounded-md `}
      href={linkPath}
    >
      <p className="flex items-center  gap-2">
        <span className="grow-0">{icon}</span>
        <span className="truncate">{title}</span>
      </p>
    </Link>
  );
};

export default LinkItem;
