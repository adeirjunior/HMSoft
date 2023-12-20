import React from "react";
export default function ListboxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full dark:bg-[#18181b] overflow-hidden border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      {children}
    </div>
  );
}
