import { Play, Zap, Tv, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - SUA IMAGEM LOCAL */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Banner Euro Play.png")',
        }}
      >
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Efeito sutil de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Efeito de partículas sutil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-200">
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
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed"
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
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold"
            >
              <Play className="w-5 h-5 fill-current mr-2" />
              Começar Agora
            </Button>
            <Button 
              variant="glass" 
              size="xl" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
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
                <span className="font-semibold text-white mb-1">{feature.label}</span>
                <span className="text-sm text-gray-300">{feature.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          Role para descobrir
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
