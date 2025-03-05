import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI voice assistant work?",
    answer: "Our AI assistant uses advanced natural language processing to understand the content of podcasts. You can ask questions about specific topics, request summaries, or get clarification on discussed subjects, and the assistant will provide relevant information from the episode."
  },
  {
    question: "Is Gnosis available on Android?",
    answer: "Currently, Gnosis is only available on iOS. We're working on bringing the same great experience to Android users in the future."
  },
  {
    question: "How accurate is the smart chapterization?",
    answer: "Our AI-powered chapterization is highly accurate, using context and natural language understanding to identify meaningful segment breaks in podcast episodes. The system continuously learns and improves based on user feedback."
  },
  {
    question: "Can I use Gnosis offline?",
    answer: "No, Gnosis requires an active internet connection to function. All features, including playback, AI assistance, and smart chapterization, need internet connectivity to work properly."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}