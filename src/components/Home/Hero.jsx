import Link from "next/link";

import PwaInstall from "@/components/Shared/PwaInstall";
import VideoBanner from "@/components/Shared/VideoBanner";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="border-t border-base-300 w-full flex  overflow-y-auto justify-center min-h-[60vh]  max-h-screen py-12 md:pb-24 ">
      <div className=" px-4 md:px-0">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space--4 text-center">
            <div className="space-y-2 mb-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Nextra With{" "}
                <span className="text-destructive font-extrabold text-4xl tracking-tight underline-offset-3 sm:text-6xl xl:text-7xl/none">
                  Extra
                </span>{" "}
                (NWX)
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Take Documentation System to the Next Level⚡. Have an project
                that might need a documentation system? Nextra With Extra (NWX)
                is the perfect choice for you. We have added some extra features
                to the Nextra theme to make it more powerful and easy to use.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex justify-center space-x-2">
                <Link href="/doc">
                  <Button className="bg-white hover:bg-gray-100 text-black">
                    Documentation
                  </Button>
                </Link>
                <PwaInstall />
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Have more query? - {""}
                <Link
                  className="underline underline-offset-2 text-white"
                  href="https://shahriarhasan.vercel.app"
                >
                  visit here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <VideoBanner />
      </div>
    </section>
  );
}
