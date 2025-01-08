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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gestão de Tráfego */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/4a57368c-eb28-4295-ae20-3d5108921c12.png" alt="Gestão de Tráfego" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Gestão de Tráfego</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>

            {/* Social Media */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/881b905d-f55a-46f6-9e64-9b1d3b85da2b.png" alt="Social Media" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Social Media</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>

            {/* Web Design */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/6a9dc903-8424-4ed7-be4f-d012c9cc743e.png" alt="Web Design" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Web Design</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>

            {/* Copywriting */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/7c0bd7c4-6441-4acb-abb3-ac39a392ce8b.png" alt="Copywriting" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Copywriting</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>

            {/* Branding */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/9facb96e-e63e-41cc-ba61-fc709a7eba6d.png" alt="Branding" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Branding</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>

            {/* Audiovisual */}
            <div className="glass rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/f0d77c04-600b-4866-81fa-85b63328ddc5.png" alt="Audiovisual" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Audiovisual</h3>
              <p className="text-white/60">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum distinctio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Cases Section */}
      <CasesSection />

      {/* FAQ Section */}
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
