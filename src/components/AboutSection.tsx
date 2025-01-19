import React from "react";
import { MessageCircle, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="sobre" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center container mx-auto px-4">
        <div className={`relative ${isMobile ? 'flex justify-center w-full' : ''}`}>
          <img
            src="/lovable-uploads/4656f1c8-925e-4625-9ae2-f08e69718ec7.png"
            alt="Dragon logo"
            className="w-full h-auto relative mysterious-animation md:w-auto"
          />
          
          <div className="absolute md:top-10 top-0 md:-right-4 right-0 glass rounded-lg p-4 z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Nova mensagem</p>
                <p className="text-xs text-white/60">Há 2 minutos atrás</p>
              </div>
            </div>
          </div>

          <div className="absolute md:bottom-10 bottom-0 md:-left-4 left-0 glass rounded-lg p-4 z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Venda Realizada</p>
                <p className="text-xs text-white/60">Há 5 minutos atrás</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-normal">
            Somos uma agência criativa especializada em acelerar seus resultados na internet.
          </h2>
          <p className="text-white/80 text-lg">
            Para nós, a produção ilumina todo o caminho por onde passa. Criamos estratégias para crescimento de marcas e vendas.
          </p>
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-2 -mt-4">
              <div className="flex -space-x-4">
                <img 
                  src="/lovable-uploads/47d35646-051d-497a-8981-c8012fc02926.png" 
                  alt="Client avatars" 
                  className="h-12 w-auto object-contain max-w-none" 
                />
              </div>
              <span className="text-sm text-white/80">
                RESULTADOS GERADOS PARA +100 CLIENTES.
              </span>
            </div>
            <a 
              href="#contato"
              className="block text-center bg-black border border-transparent rounded-lg py-4 px-6 text-white hover:bg-white/10 transition-colors relative"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #00C2FF, #A438FF, #FF8A76) border-box',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;