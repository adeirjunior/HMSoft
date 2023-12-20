import { Link, Button, Image, Chip, Card } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-between sm:flex-row pb-16 sm:py-16">
        <div className="flex items-center sm:items-start flex-col gap-8 sm:max-w-xs md:max-w-lg lg:max-w-3xl">
          <Chip color="primary" variant="flat">
            The hospitality app lodge
          </Chip>
          <h1 className="text-center sm:text-start text-5xl sm:text-6xl xl:text-8xl font-bold">
            A decade of smarter teams and happier visitors
          </h1>
          <Button
            as={Link}
            href="signup"
            color="primary"
            endContent={<MdArrowOutward />}
            className="w-full py-6 sm:max-w-xs"
          >
            Look at that
          </Button>
        </div>
        <div className="p-5 flex justify-center sm:justify-normal">
          <Image
            isBlurred
            className="hidden lg:block"
            alt="MHSoft Dashboard PC"
            width={700}
            src="/dashboardPC.png"
          />
          <Image
            isBlurred
            className="lg:hidden"
            alt="MHSoft Dashboard Mobile"
            src="/dashboardMobile.png"
          />
        </div>
      </main>
      <section className="w-full justify-between flex flex-col lg:flex-row">
        <div className="flex flex-col gap-8 w-full lg:max-w-lg">
          <h1 className="text-5xl text-center sm:text-start font-bold">
            We do our best facilities provide you
          </h1>
          <p className="p-4 text-center sm:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
          </p>
          <Button
            as={Link}
            href="signup"
            endContent={<MdArrowOutward />}
            className="py-6 w-full sm:max-w-xs"
            color="primary"
          >
            Get Started
          </Button>
        </div>
        <div className="w-full h-auto grid grid-cols-2 xl:grid-cols-4">
          {[...Array(8)].map((index) => {
            return (
              <Card
                key={index}
                shadow="none"
                className="w-full h-full max-w- rounded-none flex flex-col justify-center items-center"
              >
                <MdArrowOutward />
                <p>Check In/Out</p>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
