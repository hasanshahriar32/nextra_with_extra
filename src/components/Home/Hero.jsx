/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bAIJuJp
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Welcome to our email client
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Manage all your emails in one place. Securely and efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 bg-gray-800 text-white" placeholder="Enter your email" type="email" />
                <Button className="bg-white text-black" type="submit">
                  Start Now
                </Button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Start managing your emails today.
                <Link className="underline underline-offset-2 text-white" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}

