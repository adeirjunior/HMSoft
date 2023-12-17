import LandingPageHeader from "@/app/_ui/components/header/LandingPageHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex-col justify-between p-6 pt-20 sm:p-12 xl:p-24 relative place-items-center">
      <LandingPageHeader />
      {children}
    </div>
  );
}
