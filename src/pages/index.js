import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Features from "@/components/Home/Features";
import Pricing from "@/components/Home/Pricing";
import OpenSource from "@/components/Home/OpenSource";
import Footer from "@/components/Shared/Footer";


export default function Home() {
  return (
    <main className={``}>
      <Hero2 />
      <Hero />
      <Features />
      <Pricing />
      <OpenSource />
      <Footer />
    </main>
  );
}
