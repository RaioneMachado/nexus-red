import { Play, Zap, Tv, Gamepad2, Star, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Laser Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Laser Beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[80vh]">
          <div className="relative w-full h-full">
            {/* Central Laser Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse" />
            
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent blur-3xl animate-pulse" />
            
            {/* Side Beams */}
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-red-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-red-400/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(hsl(0, 100%, 50%/0.4) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(0, 100%, 50%/0.4) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Cinematic Light Flares */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/50 to-red-600/30 border border-red-500/30 backdrop-blur-sm mb-12 animate-fade-in shadow-lg shadow-red-500/20">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-red-400 fill-current" />
              <Clapperboard className="w-5 h-5 text-red-400" />
              <Zap className="w-5 h-5 text-red-400 fill-current" />
            </div>
            <span className="text-red-200 font-semibold text-sm tracking-wider uppercase">
              PLATAFORMA PREMIUM DE STREAMING
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="font-cinematic text-4xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight tracking-tight">
              <span className="block animate-title-slide">A MAIOR</span>
              <span className="block animate-title-slide" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent animate-glow">
                  EXPERIÊNCIA
                </span>
              </span>
              <span className="block animate-title-slide" style={{ animationDelay: '0.4s' }}>
                CINEMATOGRÁFICA
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Descubra milhares de <span className="text-red-400 font-semibold">filmes em 4K HDR</span>, 
            {' '}<span className="text-red-400 font-semibold">séries exclusivas</span> e os melhores 
            {' '}<span className="text-red-400 font-semibold">games em cloud</span>. Tudo em uma plataforma.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border-0 text-white font-bold text-lg px-12 py-6 rounded-xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 fill-current mr-3" />
              Começar Agora Gratuitamente
            </Button>
            
            <Button 
              variant="glass" 
              size="xl" 
              className="w-full sm:w-auto bg-transparent border-2 border-red-500/50 text-red-300 hover:bg-red-500/10 hover:border-red-400 font-semibold text-lg px-10 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Explorar Catálogo
            </Button>
          </div>

          {/* Features Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {[
              { 
                icon: Tv, 
                label: "4K ULTRA HD", 
                desc: "Qualidade cinematográfica com HDR10+",
                highlight: "Resolução Máxima"
              },
              { 
                icon: Play, 
                label: "+15.000 TÍTULOS", 
                desc: "Catálogo em constante expansão",
                highlight: "Conteúdo Ilimitado"
              },
              { 
                icon: Gamepad2, 
                label: "CLOUD GAMING", 
                desc: "Jogue instantaneamente sem download",
                highlight: "Tecnologia Avançada"
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-600/10 border border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-red-500/10 border border-red-500/30 group-hover:bg-red-500/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                      {feature.highlight}
                    </span>
                    <span className="text-2xl font-bold text-white block mb-2">
                      {feature.label}
                    </span>
                  </div>
                  
                  <span className="text-gray-300 text-sm leading-relaxed block">
                    {feature.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-sm text-red-300 uppercase tracking-widest font-semibold">
          Descubra Mais
        </span>
        <div className="w-8 h-14 rounded-full border-2 border-red-500/50 flex items-start justify-center p-2 group hover:border-red-400 transition-colors duration-300">
          <div className="w-2 h-4 bg-gradient-to-b from-red-400 to-red-600 rounded-full animate-pulse group-hover:animate-bounce" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(60px) translateX(60px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444; }
          50% { text-shadow: 0 0 30px #ef4444, 0 0 60px #ef4444, 0 0 80px #ef4444; }
        }

        @keyframes titleSlide {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-glow {
          animation: titleGlow 2s ease-in-out infinite;
        }

        .animate-title-slide {
          animation: titleSlide 1s ease-out forwards;
          opacity: 0;
        }

        .font-cinematic {
          font-family: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
