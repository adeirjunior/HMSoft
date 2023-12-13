import LandingPageHeader from "@/app/_ui/components/header/LandingPageHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 relative flex place-items-center">
      <LandingPageHeader />
      {children}
    </main>
  );
}
