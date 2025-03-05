import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiAppstore } from "react-icons/si";

export default function Download() {
  return (
    <section id="download" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download Gnosis Today
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Experience the future of podcast listening. Available now on the App Store.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => window.open("https://apps.apple.com/app/gnosis", "_blank")}
            >
              <SiAppstore className="h-5 w-5" />
              Download on the App Store
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1632505084024-f6bc3021fcce"
              alt="Gnosis app interface"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
