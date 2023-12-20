import BedOutlineIcon from "@/_ui/components/icons/BedOutlineIcon";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

const Bedicon: ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
> = BedOutlineIcon as unknown as ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

export const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Guests", href: "/dashboard/guests", icon: UserGroupIcon },
  { name: "Hotels", href: "/dashboard/hotels", icon: BuildingOffice2Icon },
  { name: "Rooms", href: "/dashboard/rooms", icon: Bedicon },
  { name: "Cash", href: "/dashboard/cash", icon: CurrencyDollarIcon },
  { name: "Analytics", href: "/dashboard/analytics", icon: ChartBarIcon },
];
