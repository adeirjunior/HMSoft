import Revenue from "@/app/_ui/components/dashboard/revenue";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import TodaySales from "@/app/_ui/components/dashboard/today-sales"

export default function page() {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Breadcrumbs size="lg">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Overview</BreadcrumbItem>
      </Breadcrumbs>
      <Revenue/>
      <TodaySales/>
    </div>
  );
}
