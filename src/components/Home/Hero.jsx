import Link from "next/link";

import PwaInstall from "@/components/Shared/PwaInstall";
import VideoBanner from "@/components/Shared/VideoBanner";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full flex justify-center">
      <div className="min-w-[80vw] px-4 md:px-0">
        <VideoBanner />
      </div>
    </section>
  );
}
