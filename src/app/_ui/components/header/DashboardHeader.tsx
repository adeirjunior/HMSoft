import {
  Link as UILink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import HeaderAvatar from "./HeaderAvatar";

export default function UserFormHeader() {


  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand as={Link} href="/" className="gap-3 w-auto">
          <p className="font-bold text-2xl sm:text-4xl">HMSoft</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <HeaderAvatar/>
      </NavbarContent>
    </Navbar>
  );
}
