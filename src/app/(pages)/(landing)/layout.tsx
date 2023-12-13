import CardArray from "@/app/_ui/components/CardArray";
import LandingPageHeader from "@/app/_ui/components/header/LandingPageHeader";
import { Card } from "@nextui-org/react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 relative flex place-items-center">
      <LandingPageHeader />
      {children}
      <CardArray/>
    </main>
  );
}
