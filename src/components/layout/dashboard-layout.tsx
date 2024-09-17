import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return <div className="flex">
        <Sidebar />
        <main className="pt-6 w-full flex-1 overflow-hidden">
            <Header/>
            {children}
        </main>
    </div>
}
