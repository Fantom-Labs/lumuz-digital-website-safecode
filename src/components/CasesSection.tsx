import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const CasesSection = () => {
  const cases = [
    {
      icon: "/lovable-uploads/496fd7a2-c42e-4b4e-90b2-7dc1df0244e9.png",
      title: "Identidade Visual",
      description: "Criamos uma identidade visual única e memorável para sua marca."
    },
    {
      icon: "/lovable-uploads/b7a0c177-7e5d-41cd-b502-f56cf5a0e990.png",
      title: "Gestão de Tráfego",
      description: "Gerenciamos suas campanhas para maximizar resultados."
    },
    {
      icon: "/lovable-uploads/f9d81bca-cbf0-4ff0-b674-76060e637cb5.png",
      title: "Produção de Conteúdo",
      description: "Desenvolvemos conteúdo estratégico para suas redes sociais."
    },
    {
      icon: "/lovable-uploads/bffd77ed-3c8b-4eae-bfd1-394ab82f8441.png",
      title: "Análise de Dados",
      description: "Analisamos métricas para otimizar suas estratégias."
    },
    {
      icon: "/lovable-uploads/a563e291-d414-4531-b0cf-91831e35c104.png",
      title: "Marketing Digital",
      description: "Estratégias completas de marketing para seu negócio."
    },
    {
      icon: "/lovable-uploads/43a5d7b3-16b8-4966-bc00-f563ad7a3d68.png",
      title: "Automação",
      description: "Automatizamos processos para maior eficiência."
    }
  ];

  return (
    <section id="cases" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
          <Separator className="bg-white/20 max-w-[120px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card 
              key={index}
              className="glass p-8 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[28px] font-bold">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;