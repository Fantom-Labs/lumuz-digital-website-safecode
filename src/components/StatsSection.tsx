import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "+50",
      description: "Empresas transformadas e no topo de seu mercado de atuação.",
    },
    {
      number: "+R$20M",
      description: "Faturados para os nossos clientes através de marketing digital",
    },
    {
      number: "+6",
      description: "Anos de experiência no mercado digital com projetos em todo o Brasil.",
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-black/20 backdrop-blur-md p-8 rounded-lg text-center space-y-4"
            >
              <h3 
                className="text-5xl font-bold bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] text-transparent bg-clip-text"
              >
                {stat.number}
              </h3>
              <p className="text-white/80">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;