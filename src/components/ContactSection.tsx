import React from "react";
import { MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contato" className="py-32 relative subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-[32px] max-w-md">
            Entre em contato e melhore seus resultados
          </h2>
          <p className="text-white/80 max-w-md">
            Entre em contato conosco para uma consulta gratuita e transforme suas mídias e suas vendas em mais uma história de sucesso digital na Lumuz.
          </p>
        </div>

        <Separator className="bg-[#363636] h-[1px] w-full mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="glass p-12 rounded-lg border border-white/10">
            <ContactForm />
          </div>
          
          <div className="glass rounded-lg p-12 flex flex-col items-center justify-center text-center space-y-8 border border-white/10">
            <img
              src="/lovable-uploads/141c127b-1d2e-40a5-a18f-5ff83f8b4cf1.png"
              alt="Lumuz Digital"
              className="w-48"
            />
            <p className="text-lg">
              Agende uma conversa com nossa equipe. Estamos dispostos a entender sobre seu negócio e oferecer uma solução eficiente para você aumentar as vendas.
            </p>
            <a
              href="https://wa.me/5511963114850"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass hover:bg-white/10 transition-all duration-300 rounded-full px-6 py-3 w-full border border-white/10"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="uppercase text-sm tracking-wider">FALAR COM A LUMUZ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;