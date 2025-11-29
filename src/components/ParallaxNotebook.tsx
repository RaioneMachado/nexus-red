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
      const startOpen = viewportHeight * 0.9;
      const fullyOpen = viewportHeight * 0.4;

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

  // Lid starts closed (laying flat at 90deg) and opens to upright (0deg)
  // Using rotateX: 90 = closed (lid flat), 0 = open (lid upright)
  const lidRotation = 90 - (openProgress * 90);
  const screenOpacity = Math.max(0, (openProgress - 0.2) / 0.8);
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
              perspective: "1500px",
              maxWidth: "700px",
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
                className="relative bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 p-2 md:p-3 rounded-t-xl border border-zinc-600"
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
                      0 0 ${60 * screenOpacity}px hsl(var(--primary) / ${0.6 * screenOpacity})
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
                      src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=750&fit=crop"
                      alt="EuroPlayO Platform"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with platform interface */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-md flex items-center justify-center">
                            <Play className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground fill-current" />
                          </div>
                          <span className="font-display text-sm md:text-lg text-foreground">
                            EURO<span className="text-primary">PLAYO</span>
                          </span>
                        </div>
                        
                        {/* Featured info */}
                        <h3 className="font-display text-lg md:text-2xl text-foreground mb-1">
                          STREAMING DE QUALIDADE
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Filmes • Séries • Games
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
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-zinc-600" />
                      </div>
                      <p className="text-xs md:text-sm text-zinc-600">
                        Role para ativar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700" />
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

            {/* Notebook Base with Detailed Keyboard */}
            <div
              className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-b-xl border-x border-b border-zinc-600 pt-4 pb-6"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Keyboard Container */}
              <div className="relative mx-4 mb-3">
                {/* Keyboard Surface */}
                <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                  
                  {/* Function Keys Row */}
                  <div className="flex justify-between mb-2">
                    {['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].map((key, i) => (
                      <div key={i} className="w-6 h-4 bg-zinc-800 rounded-sm flex items-center justify-center">
                        <span className="text-[6px] text-zinc-400">{key}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main Keyboard Rows */}
                  <div className="space-y-1">
                    {/* Number Row */}
                    <div className="flex justify-between">
                      {['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'].map((key, i) => (
                        <div key={i} className={`w-6 h-6 bg-zinc-800 rounded flex items-center justify-center ${i === 13 ? 'w-12' : ''}`}>
                          <span className="text-[8px] text-zinc-300">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* First Alpha Row */}
                    <div className="flex justify-between">
                      {['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((key, i) => (
                        <div key={i} className={`w-6 h-6 bg-zinc-800 rounded flex items-center justify-center ${i === 0 ? 'w-9' : i === 13 ? 'w-9' : ''}`}>
                          <span className="text-[8px] text-zinc-300">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* Second Alpha Row */}
                    <div className="flex justify-between">
                      {['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'].map((key, i) => (
                        <div key={i} className={`w-6 h-6 bg-zinc-800 rounded flex items-center justify-center ${i === 0 ? 'w-10' : i === 12 ? 'w-12' : ''}`}>
                          <span className="text-[8px] text-zinc-300">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* Third Alpha Row */}
                    <div className="flex justify-between">
                      {['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'].map((key, i) => (
                        <div key={i} className={`w-6 h-6 bg-zinc-800 rounded flex items-center justify-center ${i === 0 || i === 11 ? 'w-14' : ''}`}>
                          <span className="text-[8px] text-zinc-300">{key}</span>
                        </div>
                      ))}
                    </div>

                    {/* Space Bar Row */}
                    <div className="flex justify-between">
                      {['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'].map((key, i) => (
                        <div key={i} className={`h-6 bg-zinc-800 rounded flex items-center justify-center ${
                          i === 3 ? 'w-32' : 
                          i === 0 || i === 1 || i === 2 || i === 4 || i === 5 ? 'w-8' : 
                          'w-6'
                        }`}>
                          <span className="text-[8px] text-zinc-300">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Keyboard Reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none" />
              </div>

              {/* Trackpad Area */}
              <div className="mx-8">
                <div className="h-8 bg-zinc-800/50 rounded-lg border border-zinc-700 relative">
                  {/* Trackpad Surface */}
                  <div className="absolute inset-1 bg-zinc-900 rounded-md border border-zinc-700 flex items-center justify-center">
                    <div className="w-12 h-0.5 bg-zinc-700 rounded-full" />
                  </div>
                  
                  {/* Trackpad Buttons */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-4">
                    <div className="w-16 h-3 bg-zinc-700 rounded-t-sm" />
                    <div className="w-16 h-3 bg-zinc-700 rounded-t-sm" />
                  </div>
                </div>
              </div>

              {/* Status LEDs */}
              <div className="absolute top-2 right-4 flex space-x-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-zinc-500 rounded-full" />
                <div className="w-1 h-1 bg-zinc-500 rounded-full" />
              </div>

              {/* Brand Logo */}
              <div className="absolute top-2 left-4">
                <span className="text-[8px] text-zinc-500 font-mono">EUROPLAYO</span>
              </div>
            </div>

            {/* Hinge detail */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-600 rounded-full"
              style={{ bottom: "calc(100% - 24px)", zIndex: 10 }}
            />

            {/* Glow Effect */}
            <div
              className="absolute -inset-16 -z-10 transition-all duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(--primary) / ${glowIntensity * 0.4}) 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* Features Below Notebook */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 transition-all duration-500"
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
                className="text-center p-6 rounded-xl glass-effect hover-lift"
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
