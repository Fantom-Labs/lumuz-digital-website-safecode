import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como a Lumuz pode me ajudar a vender mais?",
    answer:
      "Trabalhamos com estratégias digitais personalizadas, como tráfego pago, branding e social media, para atrair mais clientes e aumentar suas vendas de forma consistente.",
  },
  {
    question: "Quanto tempo é necessário para ter resultados?",
    answer:
      "Os resultados podem variar conforme o serviço e o mercado, mas trabalhamos para entregar impactos mensuráveis em semanas, com foco no crescimento sustentável.",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode nos contatar pelo formulário no site, redes sociais ou e-mail. Estamos sempre prontos para atender!",
  },
  {
    question: "Como saber o serviço que estou precisando?",
    answer:
      "Nossa equipe faz uma análise personalizada do seu negócio para recomendar as melhores soluções para suas metas.",
  },
  {
    question: "Qual a diferença da Lumuz para outras agências?",
    answer:
      "Oferecemos uma abordagem focada em resultados reais, com estratégias sob medida e suporte próximo para escalar seu negócio online.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-8">
            <h2 className="text-[32px] font-normal text-left">Alguma <span className="font-playfair italic">dúvida</span>?</h2>
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/60 max-w-md text-left">
                Encontre respostas claras sobre nossos serviços e resultados. Não encontrou o que procurava? Entre em contato e nossa equipe terá prazer em esclarecer tudo!
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
                <AccordionTrigger className="py-6 px-8 text-lg hover:no-underline group">
                  {faq.question}
                  <div className="glass h-10 w-10 rounded-[2px] flex items-center justify-center shrink-0 transition-all duration-300 hover:bg-black/20 group-data-[state=open]:rotate-180">
                    <div className="transition-transform duration-300 group-data-[state=open]:rotate-90">
                      <Plus className="h-5 w-5 transition-opacity duration-300 group-data-[state=open]:opacity-0" />
                      <Minus className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 group-data-[state=open]:opacity-100" />
                    </div>
                  </div>
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