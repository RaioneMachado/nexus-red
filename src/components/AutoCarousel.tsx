import { useEffect, useRef, useState } from "react";
import { Play, Star, Info } from "lucide-react";
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

const AutoCarousel = ({ items, title, direction = "left", speed = 30 }: AutoCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Double the items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="py-8">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 px-4 md:px-8">
        {title}
        <span className="text-primary">.</span>
      </h2>

      <div
        className="relative overflow-hidden carousel-mask"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6"
          style={{
            animation: `carousel-scroll ${speed}s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[200px] md:w-[280px] group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-display text-xl text-foreground mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      {item.rating}
                    </span>
                    <span>{item.year}</span>
                    <span className="px-2 py-0.5 bg-secondary rounded text-xs">
                      {item.genre}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      <Play className="w-4 h-4 fill-current" />
                      Assistir
                    </Button>
                    <Button variant="glass" size="icon" className="h-9 w-9">
                      <Info className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_hsl(var(--primary)/0.3)]" />
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md glass-effect">
                <Star className="w-3 h-3 text-primary fill-primary" />
                <span className="text-xs font-semibold">{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
