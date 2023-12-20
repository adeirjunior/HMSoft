"use client";

import { usersOverview } from "@/_lib/utils/data";
import {
  Avatar,
  Chip,
  Listbox,
  ListboxItem,
  ScrollShadow,
} from "@nextui-org/react";
import React from "react";
import ListboxWrapper from "@/_ui/components/ListboxWrapper";

export default function UsersOverview() {
  return (
      <ListboxWrapper>
        <Listbox
          classNames={{
            list: "w-full overflow-hidden grid grid-cols-2",
          }}
          items={usersOverview}
          label="Assigned to"
          selectionMode="none"
          variant="flat"
        >
          {(item) => (
            <ListboxItem key={item.id} textValue={item.name}>
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={item.name}
                  className="flex-shrink-0"
                  size="sm"
                  src={item.avatar}
                />
                <div className="flex flex-col">
                  <span className="text-small">{item.name}</span>
                  <span className="text-tiny text-default-400">
                    {item.email}
                  </span>
                </div>
              </div>
            </ListboxItem>
          )}
        </Listbox>
      </ListboxWrapper>
  );
}
