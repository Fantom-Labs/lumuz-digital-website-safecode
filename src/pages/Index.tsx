import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import CasesSection from "@/components/CasesSection";
import ProjectsSection from "@/components/ProjectsSection";
import { ArrowUpRight, BarChart2, Hash, MousePointer, MessageSquare, Star, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/lovable-uploads/0031cfb1-7d9a-4023-bc34-7b2cc1e4e4bf.png')",
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container mx-auto px-4 pt-20 relative">
          <div className="flex flex-col min-h-[80vh] justify-center">
            {/* Logo Container */}
            <div className="flex justify-center mb-[88px]">
              <img
                src="/lovable-uploads/141c127b-1d2e-40a5-a18f-5ff83f8b4cf1.png"
                alt="Lumiuz Digital"
                className="w-[750px]"
              />
            </div>
            
            {/* Text and Button Container */}
            <div className="flex justify-between items-center">
              {/* Text and Separator */}
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl font-satoshi text-white/80 text-left">
                  Acreditamos na <span className="font-playfair italic">magia</span> da<br />
                  criatividade e somos movidos por ela.
                </p>
              </div>

              {/* Contact Button */}
              <a 
                href="#contato" 
                className="group flex items-center gap-4 glass hover:bg-white/20 transition-all duration-300 rounded-full px-6 py-3"
              >
                <div className="rounded-full p-3 border border-white/20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <p className="font-satoshi uppercase text-sm tracking-wider">Contato</p>
              </a>
            </div>

            {/* Centered Separator */}
            <div className="w-full mt-8">
              <Separator className="bg-white/20 h-[1px] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col min-h-screen">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-[28px] font-bold max-w-sm">
              Conheça os nossos serviços
            </h2>
            <p className="text-white/80 max-w-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.
            </p>
          </div>

          <Separator className="bg-white/20 h-[1px] w-full mb-16" />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Cases Section */}
      <section id="cases" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* +50 Companies */}
            <div className="glass p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
                  +50
                </span>
              </h3>
              <p className="text-white/80">
                Empresas transformadas e no topo de seu mercado de atuação.
              </p>
            </div>

            {/* +R$20M Revenue */}
            <div className="glass p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
                  +R$20M
                </span>
              </h3>
              <p className="text-white/80">
                Faturados para os nossos clientes através de marketing digital
              </p>
            </div>

            {/* +6 Years */}
            <div className="glass p-8 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00C2FF] via-[#A438FF] to-[#FF8A76] bg-clip-text text-transparent">
                  +6
                </span>
              </h3>
              <p className="text-white/80">
                Anos de experiência no mercado digital com projetos em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            {/* Add FAQ accordion here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contato</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
