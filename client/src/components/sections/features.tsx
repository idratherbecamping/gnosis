import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Navigation, Brain, Library } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Voice Assistant",
    description: "Ask questions about episode content, request summaries, or get clarification on topics discussed."
  },
  {
    icon: Navigation,
    title: "Smart Chapterization",
    description: "Our advanced AI automatically divides episodes into meaningful chapters for intuitive navigation."
  },
  {
    icon: Mic,
    title: "Instant Chapter Navigation",
    description: "Jump directly to the moments that matter with one tap. No more tedious 15-second skips."
  },
  {
    icon: Library,
    title: "Extensive Podcast Library",
    description: "Search and discover from thousands of podcasts across all genres and topics."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience podcasts like never before with our cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
