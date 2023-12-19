import Footer from "@/_ui/components/footer/Footer";
import LandingPageHeader from "@/_ui/components/header/LandingPageHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageHeader />
      <div className="min-h-screen flex-col justify-between p-6 pt-20 sm:p-12 xl:p-24 relative place-items-center">
        {children}
      </div>
      <Footer />
    </>
  );
}
