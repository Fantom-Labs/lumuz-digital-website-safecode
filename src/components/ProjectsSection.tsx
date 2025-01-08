import { Separator } from "@/components/ui/separator";

const ProjectsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-[28px] font-bold max-w-xl">
            Unimos estratégia e design para iluminar ideias e marcas
          </h2>
          <p className="text-white/80 max-w-sm">
            Confira alguns dos nossos projetos para clientes em todo o Brasil.
          </p>
        </div>

        <Separator className="bg-white/60 h-[1px] w-full mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#888888]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Web Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Branding
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Social Media
                </span>
              </div>
              <h3 className="text-lg font-medium">Odonto Tambiá</h3>
              <p className="text-sm text-white/60">Rede clínica</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#888888]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Web Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Branding
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Social Media
                </span>
              </div>
              <h3 className="text-lg font-medium">410 Head Shop</h3>
              <p className="text-sm text-white/60">E-commerce</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#888888]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Web Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Branding
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm">
                  Social Media
                </span>
              </div>
              <h3 className="text-lg font-medium">Talvan Sobreiro</h3>
              <p className="text-sm text-white/60">Rede clínica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
