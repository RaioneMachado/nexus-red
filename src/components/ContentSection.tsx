import { Play, Star, Clock, Info, Plus } from "lucide-react";
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
      <section id={id} className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <h2 className="font-sans text-3xl md:text-5xl text-white font-bold mb-3">
              {title}
              <span className="text-red-500">.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Featured Item */}
            <div className="relative aspect-video lg:aspect-auto lg:row-span-2 rounded-xl md:rounded-2xl overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full w-fit mb-4 font-sans">
                  🎬 EM DESTAQUE
                </span>
                <h3 className="font-sans text-2xl md:text-4xl text-white font-bold mb-3 md:mb-4 leading-tight">
                  {featured.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-300 mb-6 font-sans">
                  <span className="flex items-center gap-1 font-semibold">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {featured.rating}
                  </span>
                  <span className="text-gray-400">{featured.year}</span>
                  <span className="px-3 py-1 bg-red-600 rounded-full text-xs md:text-sm font-bold text-white">
                    {featured.genre}
                  </span>
                  {featured.duration && (
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {featured.duration}
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold font-sans"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Assistir Agora
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-sans"
                  >
                    <Info className="w-5 h-5" />
                    Mais Info
                  </Button>
                </div>
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(239,68,68,0.4)]" />
                <div className="absolute -inset-4 bg-red-500/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                <div 
                  className="h-full bg-red-600 transition-all duration-1000"
                  style={{ width: '75%' }}
                />
              </div>
            </div>

            {/* Secondary Items */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {rest.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    <h4 className="font-sans text-sm md:text-base text-white font-bold line-clamp-1 mb-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-300 font-sans">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {item.rating} • {item.year}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-sans"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Assistir
                      </Button>
                      <Button 
                        variant="glass" 
                        size="icon" 
                        className="h-7 w-7 bg-white/20 hover:bg-white/30 border-white/30"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/20">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-white font-sans">{item.rating}</span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(239,68,68,0.3)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Grid Layout
  return (
    <section id={id} className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-sans text-3xl md:text-5xl text-white font-bold mb-3">
            {title}
            <span className="text-red-500">.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Static Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Static Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="font-sans text-sm md:text-base text-white font-bold line-clamp-2 mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-300 font-sans">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {item.rating} • {item.year}
                </div>
              </div>

              {/* Hover Overlay with Actions */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/80">
                <div className="text-center mb-4">
                  <h4 className="font-sans text-lg text-white font-bold mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-300 font-sans mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {item.rating}
                    </span>
                    <span>{item.year}</span>
                    <span className="px-2 py-1 bg-red-600 rounded text-xs font-bold text-white">
                      {item.genre}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold font-sans"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Assistir
                  </Button>
                  <Button 
                    variant="glass" 
                    size="icon" 
                    className="bg-white/20 hover:bg-white/30 border-white/30"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="glass" 
                    size="icon" 
                    className="bg-white/20 hover:bg-white/30 border-white/30"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/20">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white font-sans">{item.rating}</span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(239,68,68,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
