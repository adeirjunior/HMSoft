import Image from "next/image";
import Link from "next/link";

export default function UserFormHeader() {
  return (
    <header className="w-full flex justify-between items-center">
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
        <Link href="login">Log In</Link>
        <Link href="signin">Sign In</Link>
      </div>
    </header>
  );
}
