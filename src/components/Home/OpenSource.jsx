import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { StarIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Icons from "@/components/Shared/icons";
import { useState } from "react";
export default function OpenSource() {
  const [count, setCount] = useState(0);
  fetch("https://api.github.com/repos/hasanshahriar32/nextra_with_extra")
    .then((res) => res.json())
    .then((res) => setCount(res.stargazers_count))
    .catch((e) => console.error(e));
  return (
    <section className="bg-secondary">
      <div className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Powered by Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            <Balancer>
              NWX, a digital symphony of ingenuity, owes its brilliance to
              the dance of code in an open-source template, gracefully hosted on
              GitHub. It is not just a website; it is a tribute, a swaggering
              nod to the open-source ethos and the unsung heroes shaping the
              future. Join the rebellion, salute the developers— 🫡. Hail
              open-source!!
            </Balancer>
          </p>

          <Link
            className={
              buttonVariants({ variant: "outline" }) +
              "text-md my-2 h-[70px] gap-x-2 gap-y-2 font-medium sm:text-lg lg:h-[80px]"
            }
            href="https://github.com/hasanshahriar32/nextra_with_extra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="underline underline-offset-4" rel="noreferrer">
                <span className="font-semibold">{"\n"}Star me</span>, Onii Chan{" "}
                {`╮(╯▽╰)╭`}
              </p>
              <p className="mt-2 flex flex-row items-center justify-stretch gap-2">
                <span className="font-medium">{count}</span>
                <StarIcon width={16} />
                <span>on</span>
                <Icons.gitHub width={16} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
