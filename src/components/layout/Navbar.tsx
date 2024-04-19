"use client";
import { logoutUser } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import toast from "react-hot-toast";
import { CiShoppingCart } from "react-icons/ci";

const TopNavbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "Flash Sale", href: "/flash-sale" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us" },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully!!!");
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="font-mono">
          <Link className="text-black uppercase font-medium" href="/">
            <h2>Trenzy</h2>
            <p className="font-bold  text-primary-500">Shirt</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="font-mono">
          <Link href="/" className="text-2xl">
            <h2 className="text-black">Trenzy</h2>
            <p className=" bg-secondary rounded px-1 text-white shadow-sm">
              Shirt
            </p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-black uppercase font-medium" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black uppercase font-medium"
            href="flash-sale"
            aria-current="page"
          >
            Flash Sale
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black uppercase font-medium" href="mens-shirts">
            All Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black uppercase font-medium" href="about-us">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div>
            <link className="text-black uppercase font-medium" href="/cart" />
            <div className="relative py-2">
              <div className="t-0 absolute right-0">
                <p className="flex size-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  3
                </p>
              </div>
              <CiShoppingCart className="size-10" />
            </div>
          </div>
        </NavbarItem>

        <NavbarItem>
          {user ? (
            <Button color="primary" onClick={handleLogout} variant="shadow">
              Logout
            </Button>
          ) : (
            <Button color="primary" as={Link} href="/login" variant="shadow">
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-black uppercase font-medium"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default TopNavbar;
