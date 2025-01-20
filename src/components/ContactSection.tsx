import React from "react";
import { MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contato" className="py-32 relative">
      {/* Background gradient image */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/88e86790-b4a8-4d9b-afb6-b5c4a1672be3.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          mixBlendMode: "screen",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-[32px] max-w-md mb-4 md:mb-0">
            Entre em contato e melhore seus resultados
          </h2>
          <p className="text-white/80 max-w-md">
            Entre em contato conosco para uma consulta gratuita e transforme sua empresa e suas vendas em mais uma história de sucesso na Lumuz.
          </p>
        </div>

        <Separator className="bg-[#363636] h-[1px] w-full mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {!isMobile && (
            <div className="glass p-12 rounded-lg border border-white/10">
              <ContactForm />
            </div>
          )}
          
          <div className={`glass rounded-lg p-12 flex flex-col items-center justify-center text-center space-y-8 border border-white/10 ${isMobile ? "col-span-1" : ""}`}>
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
