import SideNav from "@/_ui/components/dashboard/sidenav";
import DashboardHeader from "@/_ui/components/header/DashboardHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <DashboardHeader />
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow py-6 md:overflow-y-auto md:py-12">
        {children}
      </div>
    </div>
  </>
}
