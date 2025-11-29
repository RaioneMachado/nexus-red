import { Play, Zap, Tv, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] red-glow-bg opacity-50" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Tecnologia de ponta em streaming
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-slide-up">
            TODO O{" "}
            <span className="text-primary text-glow">ENTRETENIMENTO</span>
            <br />
            EM UM SÓ LUGAR
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
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
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5 fill-current" />
              Começar Agora
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              Ver Catálogo
            </Button>
          </div>

          {/* Features */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { icon: Tv, label: "4K Ultra HD", desc: "Qualidade cinematográfica" },
              { icon: Play, label: "+10.000 Títulos", desc: "Catálogo infinito" },
              { icon: Gamepad2, label: "Cloud Gaming", desc: "Jogue sem console" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 rounded-xl glass-effect hover-lift"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-semibold text-foreground">{feature.label}</span>
                <span className="text-sm text-muted-foreground">{feature.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Role para descobrir
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
