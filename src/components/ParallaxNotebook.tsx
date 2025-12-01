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
      const isMobile = window.innerWidth < 768;

      // Calculate when section enters and leaves viewport
      const sectionTop = rect.top;
      const sectionCenter = sectionTop + sectionHeight / 2;

      // Progress from 0 (closed) to 1 (fully open)
      // Mobile: starts at 90% and finishes at 60% of viewport
      // Desktop: starts at 80% and finishes at 50% of viewport
      const startOpen = isMobile ? viewportHeight * 1.2 : viewportHeight * 0.8;
      const fullyOpen = isMobile ? viewportHeight * 0.6 : viewportHeight * 0.5;

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
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Lid starts closed (laying flat at 90deg) and opens to upright (0deg)
  // Using rotateX: 90 = closed (lid flat), 0 = open (lid upright)
  const lidRotation = 90 - (openProgress * 90);
  const screenOpacity = Math.max(0, (openProgress - 0.2) / 0.8);
  const glowIntensity = openProgress * 0.8;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-48 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 red-glow-bg transition-opacity duration-300"
        style={{ opacity: glowIntensity * 0.5 }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-24">
            <h2 className="font-sans text-3xl md:text-6xl text-white mb-4 font-bold">
              EXPERIÊNCIA <span className="text-red-500">MULTIPLATAFORMA</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-sans">
              Assista em qualquer dispositivo, a qualquer hora. Tecnologia adaptativa para a melhor experiência.
            </p>
          </div>

          {/* Notebook Container */}
          <div
            className="relative mx-auto"
            style={{
              perspective: "1500px",
              maxWidth: "90%",
            }}
          >
            {/* Notebook Lid with Screen - opens from bottom */}
            <div
              className="relative transition-transform duration-100"
              style={{
                transform: `rotateX(${lidRotation}deg)`,
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Screen Container */}
              <div
                className="relative bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 p-1 md:p-3 rounded-t-xl border border-zinc-600"
                style={{
                  aspectRatio: "16/10",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Screen Bezel */}
                <div
                  className="relative w-full h-full bg-black rounded-lg overflow-hidden"
                  style={{
                    boxShadow: `
                      inset 0 0 30px rgba(0,0,0,0.8),
                      0 0 ${60 * screenOpacity}px rgba(239, 68, 68, ${0.6 * screenOpacity})
                    `,
                  }}
                >
                  {/* Screen Content - Platform Image */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: screenOpacity }}
                  >
                    {/* Main Image */}
                    <img
                      src="/CapadenotebookEuroplay.png"
                      alt="EuroPlayO Platform"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with platform interface */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <div className="w-4 h-4 md:w-8 md:h-8 bg-red-600 rounded-md flex items-center justify-center">
                            <Play className="w-2 h-2 md:w-4 md:h-4 text-white fill-current" />
                          </div>
                          <span className="font-sans text-xs md:text-lg text-white font-bold">
                            EURO<span className="text-red-500">PLAY</span>
                          </span>
                        </div>
                        
                        {/* Featured info */}
                        <h3 className="font-sans text-sm md:text-2xl text-white mb-1 font-bold">
                          VEJA COMO É O NOSSO APP NA TV
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 font-sans">
                          Filmes • Séries • Canais Ao Vivo
                        </p>
                      </div>
                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Screen Off State */}
                  <div
                    className="absolute inset-0 bg-zinc-900 flex items-center justify-center transition-opacity duration-300"
                    style={{ opacity: 1 - screenOpacity }}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                        <Play className="w-3 h-3 md:w-6 md:h-6 text-zinc-600" />
                      </div>
                      <p className="text-xs md:text-sm text-zinc-600 font-sans">
                        Role para ativar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-zinc-900 border border-zinc-700" />
              </div>

              {/* Lid back (visible when closed) */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-t-xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              />
            </div>

            {/* Notebook Base - Vista Frontal */}
            <div
              className="relative bg-gradient-to-b from-zinc-800 via-zinc-900 to-black rounded-b-xl border-x border-b border-zinc-600"
              style={{
                height: "30px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Borda superior detalhada */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
              
              {/* Área frontal do teclado (vista de frente) */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-zinc-900/80">
                {/* Linhas horizontais representando as fileiras de teclas */}
                <div className="absolute top-1 left-3 right-3 h-px bg-zinc-700/60" />
                <div className="absolute top-2 left-3 right-3 h-px bg-zinc-700/40" />
              </div>

              {/* Trackpad frontal */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-zinc-700 rounded-full" />

              {/* Detalhes da base */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-zinc-900 to-black rounded-b-xl" />
              
              {/* LED de status */}
              <div className="absolute top-2 right-4 md:right-6 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              
              {/* Logo frontal */}
              <div className="absolute top-2 left-4 md:left-6">
                <span className="text-[5px] md:text-[6px] text-zinc-500 font-mono tracking-wider font-sans">EUROPLAYO</span>
              </div>
            </div>

            {/* Hinge detail */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-20 md:w-32 h-1 bg-zinc-600 rounded-full"
              style={{ bottom: "30px", zIndex: 10 }}
            />

            {/* Glow Effect */}
            <div
              className="absolute -inset-8 md:-inset-16 -z-10 transition-all duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, rgba(239, 68, 68, ${glowIntensity * 0.4}) 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* Features Below Notebook */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20 transition-all duration-500"
            style={{
              opacity: openProgress > 0.6 ? 1 : 0,
              transform: `translateY(${(1 - openProgress) * 40}px)`,
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
                className="text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-red-400 mx-auto mb-3 md:mb-4" />
                <h4 className="font-sans text-lg md:text-xl text-white mb-2 font-bold">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-300 font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxNotebook;
