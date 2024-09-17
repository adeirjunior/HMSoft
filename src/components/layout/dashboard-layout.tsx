import { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return <div className="flex">
        <Sidebar />
        <main className="pt-6 w-full flex-1 overflow-hidden">
            {children}
        </main>
    </div>
}
