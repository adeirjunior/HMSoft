import SideNav from "@/_ui/components/dashboard/sidenav";
import DashboardHeader from "@/_ui/components/header/DashboardHeader";
import "@/_ui/styles/globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:max-h-screen md:overflow-y-hidden">
      <DashboardHeader />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow w-full p-6 md:p-12 md:border-1 md:rounded-lg md:border-gray-200 md:mr-6 md:mb-24 md:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
