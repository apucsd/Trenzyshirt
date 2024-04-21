import { USER_ROLE } from "@/constant/constant";
import { TLink, TUserRole } from "@/types";
import {
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineCheck,
  AiOutlineShoppingCart,
  AiOutlinePicLeft,
} from "react-icons/ai";

export const generateSideItem = (role: TUserRole) => {
  const sidebarItem: TLink[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      sidebarItem.push(
        {
          id: 1,
          title: "Dashboard",
          icon: <AiOutlinePicLeft />,
          href: `${role}`,
        },
        {
          id: 3,
          title: "All Products",
          href: `${role}/all-products`,
          icon: <AiOutlineShopping />,
        },
        {
          id: 4,
          title: "Add Product",
          href: `${role}/add-product`,
          icon: <AiOutlinePlus />,
        },
        {
          id: 5,
          title: "Manage Orders",
          href: `${role}/manage-orders`,
          icon: <AiOutlineShoppingCart />,
        }
      );
      break;

    case USER_ROLE.GUEST:
      sidebarItem.push(
        {
          id: 1,
          title: "Dashboard",
          icon: <AiOutlinePicLeft />,
          href: `${role}`,
        },

        {
          id: 4,
          title: "My Orders",
          href: `${role}/my-orders`,
          icon: <AiOutlineCheck />,
        }
      );
      break;

    default:
      break;
  }
  return [...sidebarItem];
};
