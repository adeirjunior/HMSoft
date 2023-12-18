import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon, CurrencyDollarIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { MdOutlineBed } from "react-icons/md";

export const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Guests", href: "/dashboard/guests", icon: UserGroupIcon },
  { name: "Rooms", href: "/dashboard/rooms", icon: MdOutlineBed },
  { name: "Cash", href: "/dashboard/cash", icon: CurrencyDollarIcon },
  { name: "Analytics", href: "/dashboard/analytics", icon: ChartBarIcon },
];
