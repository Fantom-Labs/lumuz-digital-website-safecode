import { Separator } from "@/components/ui/separator";

const ProjectsSection = () => {
  return (
    <section id="cases" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-[28px] max-w-xl leading-tight md:whitespace-normal whitespace-pre-line">
            {"Unimos estratégia e\ndesign para "}
            iluminar
            {"\nideias e marcas"}
          </h2>
          <p className="text-white/80 max-w-sm">
            Confira alguns dos nossos serviços para clientes em todo o Brasil.
          </p>
        </div>

        <Separator className="bg-[#363636] h-[1px] w-full mb-16" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/1fd1360f-5c05-433a-aa37-efb39b3fc03e.png"
              alt="Odonto Tambiá project"
              className="w-full h-full object-cover"
            />
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
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/819b394c-81e1-4c86-bd8d-06dff68ddfaf.png"
              alt="Dr. Talvane Sobreira project"
              className="w-full h-full object-cover"
            />
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
              <h3 className="text-lg font-medium">Dr. Talvane Sobreira</h3>
              <p className="text-sm text-white/60">Saúde</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/9a182f73-d408-4003-bf76-43a1722e4e5d.png"
              alt="Chez Nanny branding"
              className="w-full h-full object-cover"
            />
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
              <h3 className="text-lg font-medium">Chez Nanny</h3>
              <p className="text-sm text-white/60">Restaurante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;