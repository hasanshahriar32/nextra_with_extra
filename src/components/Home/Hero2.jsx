// import { StarIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { BrandIcons } from "@/components/Shared/brand-icons";
import Icons from "@/components/Shared/icons";
import { buttonVariants } from "@/components/ui/button";
// import { nFormatter } from "~/lib/utils";
import PwaInstall from "@/components/Shared/PwaInstall";

export default function Hero2() {
  return (
    <section>
      <div className="container flex h-full min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(100vh-160px)] xl:pt-24">
        <div className="mx-auto w-full max-w-2xl ">
          <a
            href="https://paradox-bd.com"
            title="Follow Updates"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors duration-300 hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 text-blue-700" />
            <p className="text-sm font-semibold text-blue-700">
              A project by Paradox-BD
            </p>
          </a>
          <h1 className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-75 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
            <Balancer>
              {" "}
              Nextra With{" "}
              <span className="underline font-extrabold ">Xtraa</span> (NWX)
            </Balancer>
          </h1>
          <p className="mt-6 text-center text-muted-foreground md:text-xl">
            <Balancer>
              Take Documentation System to the Next Level⚡. Have an project
              that might need a documentation system? Nextra With Xtraa (NWX) is
              the perfect choice for you. We have added some extra features to
              the Nextra theme to make it more powerful and easy to use.
            </Balancer>
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
            <Link className={buttonVariants() + " gap-x-2"} href="/doc">
              Documentation
            </Link>

            <PwaInstall />
          </div>
        </div>
        <div className="w-full ">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight transition-colors">
            Built using Great Tools
          </h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-10 ">
            {tools.map((t, i) => (
              <Link key={i} href={t.link} target="_blank">
                <t.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const tools = [
  {
    link: "https://www.typescriptlang.org/",
    icon: BrandIcons.ts,
  },
  {
    link: "https://nextjs.org/",
    icon: BrandIcons.nextjs,
  },
  {
    link: "https://tailwindcss.com/",
    icon: BrandIcons.tailwind,
  },
  {
    link: "https://www.prisma.io/",
    icon: BrandIcons.prisma,
  },
  {
    link: "https://vercel.com/",
    icon: BrandIcons.vercel,
  },
];
