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
export interface TUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export type TOrder = {
  email: string;
  _id: string;
  userInfo: TUserInfo;
  products: TProduct[];
  price: number;
  status: "delivered" | "pending";
};
export type TOrderTable = {
  orderId: string;
  shippingMethod: string;
  trackingNumber: string;
  products: TProduct;
  status: "pending" | "delivered";
};
