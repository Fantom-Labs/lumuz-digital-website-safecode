import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top] bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/af0c2148-1349-4969-9da8-49ee6d3e9ff8.png')",
          backgroundSize: 'cover',
          transform: 'scaleX(-1)',
          imageRendering: '-webkit-optimize-contrast',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased'
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="flex flex-col min-h-[80vh] justify-center">
          <div className="flex justify-center mb-[88px]">
            <img
              src="/lovable-uploads/141c127b-1d2e-40a5-a18f-5ff83f8b4cf1.png"
              alt="Lumiuz Digital"
              className="w-[750px]"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="max-w-xl">
              <p className="text-xl font-satoshi text-white/80 text-left md:hidden">
                Acreditamos na <span className="font-playfair italic">magia</span> da<br />
                criatividade e somos movidos por ela.
              </p>
              <p className="text-xl font-satoshi text-white/80 text-left hidden md:block">
                Acreditamos na <span className="font-playfair italic">magia</span><br />
                da criatividade e somos movidos por ela.
              </p>
            </div>

            <a 
              href="#contato" 
              className="group flex flex-col items-center justify-center w-[120px] h-[120px] glass hover:bg-white/10 transition-all duration-300 rounded-full"
            >
              <ArrowUpRight className="w-12 h-12 mb-1" strokeWidth={1} />
              <p className="font-satoshi uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-wider">Contato</p>
            </a>
          </div>

          <div className="w-full mt-8">
            <Separator className="bg-white/20 h-[1px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;