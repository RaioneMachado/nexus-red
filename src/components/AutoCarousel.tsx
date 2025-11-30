import { useEffect, useRef, useState } from "react";
import { Play, Star, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: string;
  genre: string;
}

interface AutoCarouselProps {
  items: ContentItem[];
  title: string;
  direction?: "left" | "right";
  speed?: number;
}

const AutoCarousel = ({ items, title, direction = "left", speed = 10 }: AutoCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Double the items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 px-4 md:px-8">
        <h2 className="font-sans text-3xl md:text-4xl text-white font-bold">
          {title}
          <span className="text-red-500">.</span>
        </h2>
        <Button 
          variant="glass" 
          className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-sans"
        >
          Ver Tudo
        </Button>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 px-4 md:px-8"
          style={{
            animation: `carousel-scroll ${speed}s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[200px] md:w-[280px] group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card transform transition-all duration-500 group-hover:scale-105 group-hover:z-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Enhanced Content on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                  {/* Title with Netflix-style typography */}
                  <h3 className="font-sans text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Enhanced Info Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-300 mb-4 font-sans">
                    <span className="flex items-center gap-1 font-semibold">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {item.rating}
                    </span>
                    <span className="text-gray-400">{item.year}</span>
                    <span className="px-2 py-1 bg-red-600 rounded text-xs font-bold text-white">
                      {item.genre}
                    </span>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold font-sans"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      Assistir
                    </Button>
                    <Button 
                      variant="glass" 
                      size="icon" 
                      className="h-9 w-9 bg-white/20 hover:bg-white/30 border-white/30 font-sans"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="glass" 
                      size="icon" 
                      className="h-9 w-9 bg-white/20 hover:bg-white/30 border-white/30 font-sans"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(239,68,68,0.4)] rounded-lg" />
                  <div className="absolute -inset-2 bg-red-500/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <div className="px-2 py-1 bg-yellow-500 rounded text-xs font-bold text-black font-sans">
                    TOP
                  </div>
                </div>
              </div>

              {/* Enhanced Rating Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/20">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white font-sans">{item.rating}</span>
              </div>

              {/* Progress Bar (Netflix-style) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                  className="h-full bg-red-600 transition-all duration-1000"
                  style={{ width: `${Math.random() * 80 + 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
      `}</style>
    </div>
  );
};

export default AutoCarousel;
