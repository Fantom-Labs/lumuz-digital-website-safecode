import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id") || "";

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-white font-bold text-xl">
            <img src="/lovable-uploads/7f93aa70-d1a1-45d9-84bf-e11b5e4868d5.png" alt="Logo" className="h-8" />
          </a>

          <div className="hidden md:flex items-center">
            {/* Desktop Navigation */}
            <div className="flex space-x-8 mr-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-white/90 ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : "text-white/70"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black/10 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } shadow-[8px_8px_16px_rgba(0,0,0,0.25),-8px_-8px_16px_rgba(255,255,255,0.1)]`}
        >
          <div className="flex flex-col h-full pt-16 px-4">
            <div className="flex justify-end mb-8">
              <button
                className="text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-3 mb-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Social Media Icons */}
            <div className="mt-auto mb-8 px-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;