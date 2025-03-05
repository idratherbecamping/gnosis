import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Download from "@/components/sections/download";
import Contact from "@/components/sections/contact";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Newsletter />
    </div>
  );
}
