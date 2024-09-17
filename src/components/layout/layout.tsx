import { ReactNode } from "react";
import Titlebar from "@/components/layout/titlebar";
import Providers from "./providers";
import { Toaster } from "../ui/toaster";

export default function Layout({ children }: { children: ReactNode }) {

    return <>
        <Titlebar />
        <Providers>
            <Toaster />
            {children}
        </Providers>
    </>
}
