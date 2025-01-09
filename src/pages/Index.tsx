import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import CasesSection from "@/components/CasesSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import { ArrowUpRight, MessageCircle, DollarSign } from "lucide-react";
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
                <p className="text-2xl font-satoshi text-white/80 text-left">
                  Acreditamos na <span className="font-playfair italic">magia</span><br />
                  da criatividade e somos<br />
                  movidos por ela.
                </p>
              </div>

              {/* Contact Button */}
              <a 
                href="#contato" 
                className="group flex flex-col items-center justify-center w-[120px] h-[120px] glass hover:bg-white/10 transition-all duration-300 rounded-full"
              >
                <ArrowUpRight className="w-12 h-12 mb-1" strokeWidth={1} />
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
        <div className="container mx-auto px-4 flex items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side - Image and Notifications */}
            <div className="relative">
              {/* Main Image */}
              <img
                src="/lovable-uploads/24c657e9-20e8-458c-8bed-47ae63e80379.png"
                alt="Laptop with gradient lighting"
                className="w-full h-auto rounded-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500 mysterious-animation glass"
              />
              
              {/* Notification Pills */}
              <div className="absolute top-10 -right-4 glass rounded-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Nova mensagem</p>
                    <p className="text-xs text-white/60">Há 2 minutos atrás</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 -left-4 glass rounded-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Venda Realizada</p>
                    <p className="text-xs text-white/60">Há 5 minutos atrás</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Somos uma agência criativa especializada em acelerar seus resultados na internet.
              </h2>
              <p className="text-white/80 text-lg">
                Para nós, a produção ilumina todo o caminho por onde passa. Criamos estratégias para crescimento de marcas e vendas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/80">
                    RESULTADOS GERADOS PARA +100 CLIENTES.
                  </span>
                </div>
                <a 
                  href="#contato"
                  className="block text-center bg-black border border-transparent rounded-lg py-4 px-6 text-white hover:bg-white/10 transition-colors relative"
                  style={{
                    background: 'linear-gradient(black, black) padding-box, linear-gradient(90deg, #00C2FF, #A438FF, #FF8A76) border-box',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  Entrar em contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved after Sobre */}
      <StatsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Cases Section */}
      <CasesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contato" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-[32px] max-w-md">
              Entre em contato e melhore seus resultados
            </h2>
            <p className="text-white/80 max-w-md">
              Entre em contato conosco para uma consulta gratuita e transforme suas mídias e suas vendas em mais uma história de sucesso digital na Lumuz.
            </p>
          </div>

          <Separator className="bg-[#363636] h-[1px] w-full mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="glass p-12 rounded-lg border border-white/10">
              <ContactForm />
            </div>
            
            <div className="glass rounded-lg p-12 flex flex-col items-center justify-center text-center space-y-8 border border-white/10">
              <img
                src="/lovable-uploads/141c127b-1d2e-40a5-a18f-5ff83f8b4cf1.png"
                alt="Lumuz Digital"
                className="w-48"
              />
              <p className="text-lg">
                Agende uma conversa com nossa equipe. Estamos dispostos a entender sobre seu negócio e oferecer uma solução eficiente para você aumentar as vendas.
              </p>
              <a
                href="https://wa.me/5511963114850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass hover:bg-white/10 transition-all duration-300 rounded-full px-6 py-3 w-full border border-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="uppercase text-sm tracking-wider">FALAR COM A LUMUZ</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
