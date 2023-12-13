import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function LandingPageHeader() {
  return (
    <header className="z-10 flex justify-between items-center w-full fixed left-0 top-0 border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:p-4">
      <Link href="/">
        <div className="flex justify-center items-center gap-3">
          <Image
            className="w-auto h-16"
            src="/hmsoft.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="font-bold text-4xl">HMSoft</h1>
        </div>
      </Link>
      <div className="gap-6 flex">
        <Link href="services">Services</Link>
        <Link href="pricing">Pricing</Link>
      </div>
      <div className="gap-6 flex justify-center items-center">
        <Link href="login">Log In</Link>
        <Link href="signin">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
}
