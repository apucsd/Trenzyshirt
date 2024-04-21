import { USER_ROLE } from "@/constant/constant";
import { ReactNode } from "react";
export interface TProduct {
  _id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  topRated: boolean;
  flashSale: boolean;
  [key: string]: any;
}
export interface TLink {
  id: number;
  title: string;
  href: string;
  icon?: ReactNode;
}

export type TUserRole = keyof typeof USER_ROLE;
