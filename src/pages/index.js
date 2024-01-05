import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import { Features } from "@/components/component/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={``}>
      <Hero />
      <Features />
    </main>
  );
}
