import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
  return (
    <section>
      <div className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-6xl">Pricing</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            <Balancer>
              Choose the plan that’s right for you and start enjoying it all.
            </Balancer>
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <Card
            className={cn(
              "relative w-full transition duration-200 ease-in-out hover:shadow-lg xl:w-[300px]"
            )}
          >
            <CardHeader>
              <CardTitle>
                Self hosting{" "}
                  <Badge className=" absolute right-0 top-0 m-4">Current</Badge>
              </CardTitle>
              <CardDescription>With attribution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="my-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-primary">
                  $0
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  /month
                </span>
              </p>
            </CardContent>
          </Card>
          <Card
            className={cn(
              "relative w-full transition duration-200 ease-in-out hover:shadow-lg xl:w-[300px] bg-secondary"
            )}
          >
            <CardHeader>
              <CardTitle>
                Guided hosting{" "}
              </CardTitle>
              <CardDescription>With/ without attribution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="my-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-primary">
                  $10
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  /hosting
                </span>
              </p>
            </CardContent>
            <CardFooter className=" justify-center">
              <Link href="/" className={buttonVariants()}>
                Contact Now
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}