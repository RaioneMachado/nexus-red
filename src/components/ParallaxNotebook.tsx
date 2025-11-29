import { useEffect, useRef, useState } from "react";
import { Play, Tv, Film, Gamepad2 } from "lucide-react";

const ParallaxNotebook = () => {
  const [openProgress, setOpenProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate when section enters and leaves viewport
      const sectionTop = rect.top;
      const sectionCenter = sectionTop + sectionHeight / 2;

      // Progress from 0 (closed) to 1 (fully open)
      // Opens as the section moves from bottom to center of viewport
      const startOpen = viewportHeight * 0.8;
      const fullyOpen = viewportHeight * 0.3;

      if (sectionCenter > startOpen) {
        setOpenProgress(0);
      } else if (sectionCenter < fullyOpen) {
        setOpenProgress(1);
      } else {
        const progress = 1 - (sectionCenter - fullyOpen) / (startOpen - fullyOpen);
        setOpenProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate lid rotation (0 = closed, -120 = fully open)
  const lidRotation = openProgress * -120;
  const screenOpacity = Math.max(0, (openProgress - 0.3) / 0.7);
  const glowIntensity = openProgress * 0.8;

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 red-glow-bg transition-opacity duration-300"
        style={{ opacity: glowIntensity * 0.5 }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              EXPERIÊNCIA <span className="text-primary text-glow">MULTIPLATAFORMA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Assista em qualquer dispositivo, a qualquer hora. Tecnologia adaptativa para a melhor experiência.
            </p>
          </div>

          {/* Notebook Container */}
          <div
            className="relative mx-auto"
            style={{
              perspective: "2000px",
              maxWidth: "700px",
            }}
          >
            {/* Notebook Base (Keyboard) */}
            <div
              className="relative bg-gradient-to-b from-muted to-secondary rounded-b-2xl rounded-t-lg"
              style={{
                height: "20px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Keyboard surface detail */}
              <div className="absolute inset-x-4 top-1 bottom-1 bg-background/30 rounded" />
            </div>

            {/* Notebook Lid with Screen */}
            <div
              className="relative origin-bottom transition-transform duration-100"
              style={{
                transform: `rotateX(${lidRotation}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Lid Back (visible when closed) */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-secondary to-muted rounded-t-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              />

              {/* Screen Container */}
              <div
                className="relative bg-gradient-to-b from-muted via-secondary to-muted p-3 md:p-4 rounded-t-2xl"
                style={{
                  aspectRatio: "16/10",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Screen Bezel */}
                <div
                  className="relative w-full h-full bg-background rounded-lg overflow-hidden"
                  style={{
                    boxShadow: `
                      inset 0 0 30px rgba(0,0,0,0.5),
                      0 0 ${50 * screenOpacity}px hsl(var(--primary) / ${0.5 * screenOpacity})
                    `,
                  }}
                >
                  {/* Screen Content */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: screenOpacity }}
                  >
                    {/* Screen Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

                    {/* Platform Interface Mock */}
                    <div className="relative h-full p-4 md:p-6">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-md flex items-center justify-center">
                            <Play className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground fill-current" />
                          </div>
                          <span className="font-display text-sm md:text-lg text-foreground">
                            STREAM<span className="text-primary">X</span>
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {["Filmes", "Séries", "Games"].map((tab, i) => (
                            <span
                              key={tab}
                              className={`text-[10px] md:text-xs px-2 py-1 rounded ${
                                i === 0
                                  ? "bg-primary text-primary-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {tab}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Featured Content */}
                      <div className="relative rounded-lg overflow-hidden mb-4 h-24 md:h-32 bg-gradient-to-r from-primary/20 to-accent/20">
                        <div className="absolute inset-0 flex items-center p-4">
                          <div>
                            <p className="text-[10px] text-primary uppercase tracking-wider">
                              Em destaque
                            </p>
                            <h3 className="font-display text-sm md:text-xl text-foreground">
                              NOVO LANÇAMENTO
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="px-1.5 py-0.5 bg-primary text-[8px] md:text-xs text-primary-foreground rounded">
                                4K
                              </span>
                              <span className="text-[8px] md:text-xs text-muted-foreground">
                                2024
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="aspect-[2/3] rounded bg-card animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Screen Off State */}
                  <div
                    className="absolute inset-0 bg-background flex items-center justify-center transition-opacity duration-300"
                    style={{ opacity: 1 - screenOpacity }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-muted flex items-center justify-center">
                        <Play className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Role para ativar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Camera */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className="absolute -inset-10 -z-10 transition-all duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(--primary) / ${glowIntensity * 0.3}) 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* Features Below Notebook */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-500"
            style={{
              opacity: openProgress > 0.5 ? 1 : 0,
              transform: `translateY(${(1 - openProgress) * 50}px)`,
            }}
          >
            {[
              {
                icon: Tv,
                title: "Smart TV",
                desc: "Apps para todas as plataformas",
              },
              {
                icon: Film,
                title: "Download Offline",
                desc: "Assista sem internet",
              },
              {
                icon: Gamepad2,
                title: "Controle",
                desc: "Suporte a gamepad",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl glass-effect hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-display text-xl text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxNotebook;
