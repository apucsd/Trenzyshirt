"use client";
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
import { CiShoppingCart } from "react-icons/ci";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Flash Sale", "Products", "Log Out"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <h2>Trenzy</h2>
            <p className="font-bold text-inherit text-primary-500">Shirt</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <h2>Trenzy</h2>
            <p className="font-bold text-inherit text-primary-500">Shirt</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="flash-sale" aria-current="page">
            Flash Sale
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="mens-shirts">
            All Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="about-us">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div>
            <link href="/cart" />
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
          <Button as={Link} color="primary" href="/register" variant="shadow">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default TopNavbar;
