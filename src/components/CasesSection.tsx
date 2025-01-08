import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { BarChart3, Share2, Palette, PenTool, Layers, Video } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: BarChart3,
      title: "Gestão de Tráfego",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: PenTool,
      title: "Copywritting",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: Layers,
      title: "Branding",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: Video,
      title: "Audiovisual",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    }
  ];

  return (
    <section id="cases" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="text-[32px] font-normal leading-tight">
              Conheça os<br />
              nossos serviços
            </h2>
            <p className="text-white/60 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.
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
    </section>
  );
};

export default CasesSection;