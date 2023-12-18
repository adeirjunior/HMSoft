"use client"

import {
  Link as UILink,
  Navbar,
  NavbarBrand,
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
import { usePathname } from "next/navigation";
import { menuItems, mobileMenuItems } from "@/lib/utils/menuItems";

export default function LandingPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const path = usePathname();

  return (
    <Navbar className="fixed" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
          <NavbarBrand as={Link} href="/" className="gap-3 w-auto">
            <p className="font-bold text-2xl sm:text-4xl">HMSoft</p>
          </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          menuItems.map((item, key) => {
            return (
              <NavbarItem key={key} isActive={path === item.href}>
                <UILink color="foreground" href={item.href}>
                  {item.name}
                </UILink>
              </NavbarItem>
            );
          })
        }
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
        {mobileMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <UILink
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </UILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
