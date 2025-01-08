import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo é necessário para ter resultados?",
      answer: "O tempo necessário para resultados varia de acordo com diversos fatores como seu mercado, produto e objetivos específicos. Geralmente, começamos a ver resultados iniciais em 3-6 meses."
    },
    {
      question: "Como a Lumuz pode me ajudar a vender mais?",
      answer: "Através de estratégias personalizadas de marketing digital, otimização de conversão e análise de dados para maximizar seus resultados de vendas."
    },
    {
      question: "Como posso entrar em contato?",
      answer: "Você pode entrar em contato através do formulário em nosso site, pelo WhatsApp ou email. Nossa equipe está pronta para atendê-lo."
    },
    {
      question: "Como saber o serviço que estou precisando?",
      answer: "Realizamos uma análise completa do seu negócio e objetivos para recomendar as melhores soluções para suas necessidades específicas."
    },
    {
      question: "Qual a diferença da Lumuz para outras agências?",
      answer: "Nos diferenciamos pela abordagem personalizada, foco em resultados mensuráveis e experiência comprovada em diversos segmentos."
    }
  ];

  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-4xl font-bold">Alguma dúvida?</h2>
            <p className="text-white/60 max-w-md text-right">
              At vero eos et accusamus et iusto odio dignissimos ducimus lorem.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-lg hover:no-underline py-6">
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