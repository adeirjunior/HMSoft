import { Link, Button, Image } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";

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
            <Button
            as={Link}
              href="signin"
              endContent={<MdArrowOutward />}
              className="w-full font-bold py-6"
            >
              Look at that
            </Button>
        </div>
        <div className="relative p-5">
          <Image
            isBlurred
            alt="MHSoft Dashboard PC"
            width={800}
            src="/dashboardPC.png"
          />
          <Image
            isBlurred
            className="absolute -bottom-16"
            alt="MHSoft Dashboard Mobile"
            width={200}
            src="/dashboardMobile.png"
          />
        </div>
      </section>
    </>
  );
}
