import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de criação?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Qual o prazo de entrega dos projetos?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Vocês atendem em qual região?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-[32px] font-normal">Alguma dúvida?</h2>
            <p className="text-white/60 max-w-md text-right">
              At vero eos et accusamus et iusto odio dignissimos ducimus lorem.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass px-8 rounded-lg data-[state=open]:bg-white/10 transition-colors duration-300"
              >
                <AccordionTrigger className="py-6 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;