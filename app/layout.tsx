import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_ui/styles/globals.css";
import { Providers } from "./_ui/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | HMSoft",
    default: "HMSoft",
  },
  description: "Subscription based Hotel Property Management Software",
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
