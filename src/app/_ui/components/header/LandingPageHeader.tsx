"use client"

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { usePathname } from "next/navigation";
import { menuItems, mobileMenuItems } from "@/_lib/utils/menuItems";

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
          <NavbarBrand className="gap-3 w-auto">
            <Link href="/" color="foreground" className="font-bold text-2xl sm:text-4xl">HMSoft</Link>
          </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          menuItems.map((item, key) => {
            return (
              <NavbarItem key={key} isActive={path === item.href}>
                <Link color="foreground" href={item.href}>
                  {item.name}
                </Link>
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
          <Link href="login">Login</Link>
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
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
