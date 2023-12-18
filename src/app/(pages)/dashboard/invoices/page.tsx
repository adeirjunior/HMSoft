import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function page() {
  return (
    <>
     <Breadcrumbs variant="solid">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
    <div>Invoices</div>
    </>
  )
}
