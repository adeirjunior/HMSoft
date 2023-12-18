
import GoBackwardButton from "./_ui/components/button/GoBackwardButton";
import LandingPageHeader from "./_ui/components/header/LandingPageHeader";


export default function NotFound() {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-24 pt-20 relative flex place-items-center">
      <LandingPageHeader />
      <main>
        <h2>This page do not exist!</h2>
        <GoBackwardButton/>
      </main>
      
    </div>
  );
}