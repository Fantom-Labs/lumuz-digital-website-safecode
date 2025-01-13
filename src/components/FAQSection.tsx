import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como a Lumuz pode me ajudar a vender mais?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Quanto tempo é necessário para ter resultados?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Como saber o serviço que estou precisando?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
  {
    question: "Qual a diferença da Lumuz para outras agências?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-8">
            <h2 className="text-[32px] font-normal text-left">Alguma <span className="font-playfair italic">dúvida</span>?</h2>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-white/60 max-w-md text-left md:text-right">
                Entre em contato conosco para uma consulta gratuita e transforme suas mídias e suas vendas em mais uma história de sucesso digital na Lumuz.
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#363636] mb-16" />

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1A1A1A] rounded-[4px] data-[state=open]:bg-[#1A1A1A] transition-colors duration-300 border-none"
              >
                <AccordionTrigger className="py-6 px-8 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 px-8">
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