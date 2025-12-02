import { useState, useEffect } from "react";
import { Menu, X, Play, Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Início");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Filmes", href: "#movies" },
    { label: "Séries", href: "#series" },
    { label: "Games", href: "#games" },
    { label: "Minha Lista", href: "#mylist" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-red-500/30 shadow-2xl shadow-red-500/10"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO E HAMBÚRGUER JUNTOS NO LADO ESQUERDO */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* HAMBÚRGUER MOBILE - AGORA NO INÍCIO (ESQUERDA) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>

            {/* LOGO - AO LADO DO HAMBÚRGUER */}
            <a 
              href="#" 
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
              onClick={() => setActiveLink("Início")}
            >
              <div className="relative">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                </div>
                <div className="absolute inset-0 bg-red-500 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-sans text-xl md:text-2xl font-black text-white tracking-tight">
                EURO<span className="text-red-600">PLAYO</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${
                    activeLink === link.label 
                      ? "text-white scale-105" 
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveLink(link.label)}
                >
                  {link.label}
                  {/* Active Indicator */}
                  {activeLink === link.label && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full" />
                  )}
                  {/* Hover Effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Notifications */}
            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-black" />
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-600">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Usuário</span>
                <span className="text-xs text-gray-400">Premium</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="sm" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
            >
              Assinar
            </Button>
          </div>

          {/* Botão Mobile (SEGUNDO BOTÃO) - Agora removido */}
          <div className="md:hidden">
            <Button 
              variant="hero" 
              size="sm" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold border-0 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300 text-xs px-3 py-1 h-8"
            >
              Entrar
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-black/95 backdrop-blur-xl border-t border-red-500/20 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-3 text-lg font-semibold transition-all duration-300 border-l-4 ${
                  activeLink === link.label
                    ? "text-white bg-red-600/20 border-red-600"
                    : "text-gray-300 border-transparent hover:text-white hover:bg-white/5"
                }`}
                onClick={() => {
                  setActiveLink(link.label);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile CTA Section */}
            <div className="flex flex-col gap-3 px-4 pt-6 border-t border-gray-700 mt-4">
              <div className="flex items-center gap-3 pb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Usuário</span>
                  <span className="text-xs text-gray-400">Conta Premium</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="glass" 
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/20 font-sans"
                >
                  Perfil
                </Button>
                <Button 
                  variant="hero" 
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold border-0 font-sans"
                >
                  Assinar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
