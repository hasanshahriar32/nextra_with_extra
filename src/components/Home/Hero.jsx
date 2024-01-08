
import VideoBanner from "@/components/Shared/VideoBanner";

export default function Hero() {
  return (
    <section className="w-full flex justify-center">
      <div className="min-w-[90vw] md:min-w-[80vw] mx-5 md:mx-10 max-w-4xl">
        <VideoBanner />
      </div>
    </section>
  );
}
