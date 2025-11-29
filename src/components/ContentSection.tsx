import { Play, Star, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: string;
  genre: string;
  duration?: string;
}

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: ContentItem[];
  layout?: "grid" | "featured";
}

const ContentSection = ({
  id,
  title,
  subtitle,
  items,
  layout = "grid",
}: ContentSectionProps) => {
  if (layout === "featured" && items.length > 0) {
    const featured = items[0];
    const rest = items.slice(1, 5);

    return (
      <section id={id} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-2">
              {title}
              <span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Item */}
            <div className="relative aspect-video lg:aspect-auto lg:row-span-2 rounded-2xl overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-fit mb-4">
                  EM DESTAQUE
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    {featured.rating}
                  </span>
                  <span>{featured.year}</span>
                  <span className="px-2 py-0.5 bg-secondary rounded">
                    {featured.genre}
                  </span>
                  {featured.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featured.duration}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" size="lg">
                    <Play className="w-5 h-5 fill-current" />
                    Assistir Agora
                  </Button>
                  <Button variant="glass" size="lg">
                    <Info className="w-5 h-5" />
                    Mais Info
                  </Button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_100px_hsl(var(--primary)/0.2)]" />
              </div>
            </div>

            {/* Secondary Items */}
            <div className="grid grid-cols-2 gap-4">
              {rest.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer hover-lift"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-display text-lg text-foreground line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      {item.rating} • {item.year}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md glass-effect">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs font-semibold">{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-2">
            {title}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer hover-lift"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-display text-lg text-foreground line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  {item.rating} • {item.year}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
                <Button variant="hero" size="sm">
                  <Play className="w-4 h-4 fill-current" />
                  Assistir
                </Button>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md glass-effect">
                <Star className="w-3 h-3 text-primary fill-primary" />
                <span className="text-xs font-semibold">{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
