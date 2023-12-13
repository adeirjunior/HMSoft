import Link from "next/link";
import { Button } from "@nextui-org/button";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex py-16">
        <div className="flex flex-col gap-8">
          <span className="p-3 text-blue-primary bg-blue-secondary w-fit rounded-md font-bold">
            The hospitality app lodge
          </span>
          <h2 className="text-6xl font-bold">
            A decade of smarter teams and happier visitors
          </h2>
          <Link href="signin">
            <Button className="w-full font-bold py-6">
              Look at that{" "}
              <span>
                <MdArrowOutward />
              </span>
            </Button>
          </Link>
        </div>
        <div className="relative p-5">
          <Image
            priority
            className="w-[800px] h-auto"
            alt="MHSoft Dashboard PC"
            width={400}
            height={300}
            src="/dashboardPC.png"
          />
          <Image
            priority
            className="absolute -bottom-16"
            alt="MHSoft Dashboard Mobile"
            width={200}
            height={600}
            src="/dashboardMobile.png"
          />
        </div>
      </section>
      <div className="flex flex-col gap-4">
        {(() => {
          const arr = [];
          for (let i = 0; i < 10; i++) {
            arr.push(
              <div key={i} className="border w-40 h-40 bg-slate-800"></div>
            );
          }
          return arr;
        })()}
      </div>
    </>
  );
}
