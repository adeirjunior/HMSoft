import {
  Link as UILink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import HeaderAvatar from "./HeaderAvatar";

export default function DashboardHeader() {


  return (
    <Navbar maxWidth="full" position="static">
      <NavbarContent justify="start">
        <NavbarBrand as={Link} href="/">
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
