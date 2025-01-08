import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const CasesSection = () => {
  const cases = [
    {
      icon: "/lovable-uploads/496fd7a2-c42e-4b4e-90b2-7dc1df0244e9.png",
      title: "Gestão de Tráfego",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: "/lovable-uploads/b7a0c177-7e5d-41cd-b502-f56cf5a0e990.png",
      title: "Social Media",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: "/lovable-uploads/f9d81bca-cbf0-4ff0-b674-76060e637cb5.png",
      title: "Web Design",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: "/lovable-uploads/bffd77ed-3c8b-4eae-bfd1-394ab82f8441.png",
      title: "Copywritting",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: "/lovable-uploads/a563e291-d414-4531-b0cf-91831e35c104.png",
      title: "Branding",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    },
    {
      icon: "/lovable-uploads/43a5d7b3-16b8-4966-bc00-f563ad7a3d68.png",
      title: "Audiovisual",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio."
    }
  ];

  return (
    <section id="cases" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-normal mb-6">Conheça os nossos serviços</h2>
          <p className="text-white/80">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.
          </p>
          <Separator className="bg-white/20 mt-16" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card 
              key={index}
              className="bg-black/80 border-white/10 p-8 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[28px] font-normal">{item.title}</h3>
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