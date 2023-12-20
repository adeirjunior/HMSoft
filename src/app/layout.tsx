import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/_ui/styles/globals.css";
import { Providers } from "@/_ui/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hmsoft.vercel.app/"),
  title: {
    template: "%s | HMSoft",
    default: "HMSoft",
  },
  description: "Subscription based Hotel Property Management Software",
  manifest: "/manifest.json",
  applicationName: "HMSoft",
  appleWebApp: {
    capable: true,
    title: "HMSoft",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  twitter: {
    site: "https://hmsoft.vercel.app/",
    description: "An amazing open-source property manager",
    card: "summary",
    title: "HMSoft",
    creator: "@adeirju",
  },
  openGraph: {
    type: "website",
    title: "HMSoft",
    description: "An amazing open-source property manager",
    siteName: "HMSoft",
    url: "https://hmsoft.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground bg-background`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
