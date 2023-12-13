import { Link, Button, Image, Chip } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="flex flex-col sm:flex-row py-16">
        <div className="flex flex-col gap-8">
          <Chip color="primary">The hospitality app lodge</Chip>
          <h2 className="text-5xl sm:text-6xl font-bold">
            A decade of smarter teams and happier visitors
          </h2>
          <Button
            as={Link}
            href="signin"
            endContent={<MdArrowOutward />}
            className="w-full py-6"
          >
            Look at that
          </Button>
        </div>
        <div className="flex justify-center items-center sm:relative p-5">
          <Image
            isBlurred
            className="hidden sm:block"
            alt="MHSoft Dashboard PC"
            width={800}
            src="/dashboardPC.png"
          />
          <Image
            isBlurred
            className="sm:absolute sm:-bottom-16"
            alt="MHSoft Dashboard Mobile"
            src="/dashboardMobile.png"
          />
        </div>
      </section>
    </>
  );
}
