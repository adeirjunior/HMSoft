import SideNav from "@/_ui/components/dashboard/sidenav";
import DashboardHeader from "@/_ui/components/header/DashboardHeader";
import "@/_ui/styles/globals.css"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen">
    <DashboardHeader />
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow w-full h-full p-6 md:overflow-y-auto md:py-12 md:border-1 md:rounded-lg md:border-gray-200">
        {children}
      </div>
    </div>
  </div>
}
