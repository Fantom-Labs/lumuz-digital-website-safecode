import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ArrowUpRight } from "lucide-react";
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

      <section id="sobre" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre</h2>
          <div className="max-w-3xl mx-auto text-white/80">
            <p className="mb-6">
              Content for Sobre section...
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add case cards here */}
          </div>
        </div>
      </section>

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
