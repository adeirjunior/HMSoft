import CardArray from "@/app/_ui/components/CardArray";
import Header from "@/app/_ui/components/header/LandingPageHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col items-center p-24 relative flex place-items-center">
      <Header />
      {children}
      <CardArray />
    </main>
  );
}
