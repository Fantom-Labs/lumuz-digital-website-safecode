import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" />
        <div className="container mx-auto px-4 pt-20 relative">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <img
              src="/lovable-uploads/141c127b-1d2e-40a5-a18f-5ff83f8b4cf1.png"
              alt="Lumiuz Digital"
              className="mb-8 max-w-md w-full"
            />
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Acreditamos na magia da criatividade e somos movidos por ela.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
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