"use client"

import {
  Link as UILink,
  Navbar,
  NavbarBrand,
  Image,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function LandingPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Services",
    "Pricing",
    "Log In",
    "Sign Up",
  ];
  return (
    <Navbar className="fixed" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
          <NavbarBrand as={Link} href="/" className="gap-3">
            <p className="font-bold text-2xl sm:text-4xl">HMSoft</p>
          </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <UILink color="foreground" href="services">
            Services
          </UILink>
        </NavbarItem>
        <NavbarItem isActive>
          <UILink href="pricing" aria-current="page">
            Pricing
          </UILink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <UILink href="login">Login</UILink>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <UILink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.trim().toLowerCase().replace(" ", "")}
              size="lg"
            >
              {item}
            </UILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
