import { Menu, X, Play, Zap, Tv, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header/Navbar Mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Hambúrguer no lado esquerdo e logo ao lado direito do hambúrguer */}
            <div className="flex items-center gap-4">
              {/* Hambúrguer - AGORA NO INÍCIO */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Logo - DEPOIS do hambúrguer */}
              <div className="text-white font-bold text-xl font-sans">
                EuroPlay
              </div>
            </div>

            {/* Botão CTA no header mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Entrar
            </Button>
          </div>
        </div>

        {/* Menu Mobile Overlay com fundo escuro semi-transparente */}
        {isMenuOpen && (
          <>
            {/* Overlay de fundo */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content - AGORA DO LADO ESQUERDO */}
            <div className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm z-50 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 shadow-2xl animate-slide-in-left">
              <div className="pt-20 px-6">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">EuroPlay</div>
                    <div className="text-gray-400 text-sm">Premium Streaming</div>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="space-y-4">
                  {[
                    { label: "Início", href: "#hero" },
                    { label: "Catálogo", href: "#catalog" },
                    { label: "Planos", href: "#pricing" },
                    { label: "Aplicativos", href: "#apps" },
                    { label: "Suporte", href: "#support" },
                    { label: "Sobre", href: "#about" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 rounded-lg text-white hover:bg-white/10 hover:text-red-400 transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-8 border-t border-white/10" />

                {/* User Actions */}
                <div className="space-y-4">
                  <Button
                    variant="default"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Começar Agora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fazer Login
                  </Button>
                </div>

                {/* Features no Menu */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">Recursos</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Tv className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-gray-300">4K Ultra HD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Gamepad2 className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-gray-300">Cloud Gaming</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Image Responsiva */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/Banner Euro Play.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
          }}
        />
        
        {/* Overlay MUITO suave apenas para contraste do texto */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-200 font-sans">
                Tecnologia de ponta em streaming
              </span>
            </div>

            {/* Title */}
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up font-bold leading-tight">
              TODO O{" "}
              <span className="text-red-500">ENTRETENIMENTO</span>
              <br />
              EM UM SÓ LUGAR
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed font-sans"
              style={{ animationDelay: "0.1s" }}
            >
              Filmes em 4K, séries exclusivas e os melhores games. Experimente a
              plataforma EuroPlayO - a mais avançada de streaming.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold font-sans"
              >
                <Play className="w-5 h-5 fill-current mr-2" />
                Começar Agora
              </Button>
              <Button 
                variant="glass" 
                size="xl" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 font-sans"
              >
                Ver Catálogo
              </Button>
            </div>

            {/* Features */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { 
                  icon: Tv, 
                  label: "4K Ultra HD", 
                  desc: "Qualidade cinematográfica" 
                },
                { 
                  icon: Play, 
                  label: "+10.000 Títulos", 
                  desc: "Catálogo infinito" 
                },
                { 
                  icon: Gamepad2, 
                  label: "Cloud Gaming", 
                  desc: "Jogue sem console" 
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <feature.icon className="w-8 h-8 text-red-400 mb-3" />
                  <span className="font-semibold text-white mb-1 font-sans">{feature.label}</span>
                  <span className="text-sm text-gray-300 font-sans">{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS para parallax apenas no desktop */}
        <style jsx>{`
          @media (min-width: 768px) {
            #hero div:first-child {
              background-attachment: fixed !important;
            }
          }
          
          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.3s ease-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;
