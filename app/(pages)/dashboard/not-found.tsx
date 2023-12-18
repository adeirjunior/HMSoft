import GoBackwardButton from "@/_ui/components/button/GoBackwardButton";
import SideNav from "@/_ui/components/dashboard/sidenav";
import DashboardHeader from "@/_ui/components/header/DashboardHeader";

export default function NotFound() {
  return <>
    <DashboardHeader />
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow py-6 md:overflow-y-auto md:py-12">
        <main>
            <h2>This page do not exist!</h2>
            <GoBackwardButton />
        </main>
      </div>
    </div>
  </>
}
