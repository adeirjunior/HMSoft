import UserFormHeader from "@/app/_ui/components/header/UserFormHeader";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex-col items-center p-24 relative flex place-items-center">
      <UserFormHeader />
      {children}
    </main>
  );
}
