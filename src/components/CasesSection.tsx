import { Separator } from "@/components/ui/separator";

const CasesSection = () => {
  return (
    <section id="cases" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* +50 Companies */}
          <div className="glass p-8 rounded-lg border border-transparent relative text-center"
            style={{
              background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #00C2FF, #A438FF, #FF8A76) border-box',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
              +50
            </h3>
            <p className="text-white/80">
              Empresas transformadas e no topo de seu mercado de atuação.
            </p>
          </div>

          {/* +R$20M Revenue */}
          <div className="glass p-8 rounded-lg border border-transparent relative text-center"
            style={{
              background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #00C2FF, #A438FF, #FF8A76) border-box',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
              +R$20M
            </h3>
            <p className="text-white/80">
              Faturados para os nossos clientes através de marketing digital
            </p>
          </div>

          {/* +6 Years */}
          <div className="glass p-8 rounded-lg border border-transparent relative text-center"
            style={{
              background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #00C2FF, #A438FF, #FF8A76) border-box',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
              +6
            </h3>
            <p className="text-white/80">
              Anos de experiência no mercado digital com projetos em todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;