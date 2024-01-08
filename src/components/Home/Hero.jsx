import VideoBanner from "@/components/Shared/VideoBanner";

export default function Hero() {
  return (
    <div className="container flex h-full min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(100vh-160px)] xl:pt-24">
      <section className="w-full flex justify-center">
        <div className="min-w-[90vw] md:min-w-[80vw] mx-5 md:mx-10 max-w-4xl">
          <VideoBanner />
        </div>
      </section>
    </div>
  );
}
