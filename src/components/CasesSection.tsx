import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { ChartLine, Share2, Palette, PenTool, Layers, Video } from "lucide-react";
import { useEffect } from "react";

const CasesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrolled = window.scrollY;
        const speed = 0.15;
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cases = [
    {
      icon: ChartLine,
      title: "Gestão de Tráfego",
      description: "Estratégias para aumentar a visibilidade e conversão do seu negócio."
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Criação de conteúdo e gerenciamento para engajar o público."
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Desenvolvimento de sites modernos e responsivos."
    },
    {
      icon: PenTool,
      title: "Copywritting",
      description: "Textos criativos que convertem visitantes em clientes."
    },
    {
      icon: Layers,
      title: "Branding",
      description: "Construção de marcas autênticas e memoráveis."
    },
    {
      icon: Video,
      title: "Audiovisual",
      description: "Produção de vídeos impactantes para promover sua marca."
    }
  ];

  return (
    <section id="cases" className="py-32 relative overflow-hidden parallax-section">
      <div className="parallax-content">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="text-[32px] font-normal leading-tight">
              Conheça os<br />
              nossos <span className="font-playfair italic">serviços</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
              Oferecemos soluções estratégicas e personalizadas para aumentar suas vendas e ampliar sua presença digital. Nossa missão é impulsionar seus resultados e transformar sua visão em conquistas.
            </p>
          </div>
          <Separator className="bg-white/10 mt-16" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="bg-black/20 border-white/5 p-8 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center">
                    <IconComponent 
                      className="w-10 h-10"
                      style={{
                        stroke: "url(#gradient)",
                        strokeWidth: 1.5
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-normal">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#00C2FF" }} />
            <stop offset="50%" style={{ stopColor: "#A438FF" }} />
            <stop offset="100%" style={{ stopColor: "#FF8A76" }} />
          </linearGradient>
        </defs>
      </svg>
      </div>
    </section>
  );
};

export default CasesSection;
