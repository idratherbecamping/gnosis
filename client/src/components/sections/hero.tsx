import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SiAppstore } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20 xl:pt-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Smartest Way to Listen to Podcasts
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Transform how you discover, navigate, and interact with your favorite shows using AI-powered features.
            </p>
            <div className="flex gap-4">
              {/* <Button size="lg" variant="outline" asChild>
                <Link href="#download">Download Now</Link>
              </Button> */}

              <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.open("https://apps.apple.com/app/gnosis", "_blank")}
            >
              <SiAppstore className="h-5 w-5" />
              Download on the App Store
            </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/assets/ai_audiowaveform_with_BG.png"
              alt="AI-powered audio visualization"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}