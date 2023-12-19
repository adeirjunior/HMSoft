"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function HeaderAvatar() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem href="/profile" key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">hello@adeir.me</p>
        </DropdownItem>
        <DropdownItem href="/settings/profile" key="settings">
          My Settings
        </DropdownItem>
        <DropdownItem href="/settings/team" key="team_settings">
          Team Settings
        </DropdownItem>
        <DropdownItem href="/settings" key="configurations">
          Configurations
        </DropdownItem>
        <DropdownItem key="docs">HMSoft Docs</DropdownItem>
        <DropdownItem key="logout" color="danger">
          <form action="">Log Out</form>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
