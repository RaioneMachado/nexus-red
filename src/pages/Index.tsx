import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AutoCarousel from "@/components/AutoCarousel";
import ParallaxNotebook from "@/components/ParallaxNotebook";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { featuredMovies, carouselMovies, series, games } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Featured Movies Section */}
        <section id="movies" className="relative">
          <ContentSection
            id="featured"
            title="EM DESTAQUE"
            subtitle="Os melhores lançamentos selecionados para você"
            items={featuredMovies}
            layout="featured"
          />
        </section>

        {/* Auto Carousel - Trending */}
        <section className="py-8 bg-gradient-to-b from-background via-card to-background">
          <AutoCarousel
            items={carouselMovies}
            title="TENDÊNCIAS"
            direction="left"
            speed={35}
          />
        </section>

        {/* Parallax Notebook */}
        <ParallaxNotebook />

        {/* Series Section */}
        <section id="series" className="bg-gradient-to-b from-background to-card">
          <ContentSection
            id="series-content"
            title="SÉRIES"
            subtitle="Maratone as melhores séries do momento"
            items={series}
            layout="featured"
          />
        </section>

        {/* Auto Carousel - Series */}
        <section className="py-8 bg-card">
          <AutoCarousel
            items={[...series, ...carouselMovies.slice(0, 3)]}
            title="MAIS ASSISTIDAS"
            direction="right"
            speed={40}
          />
        </section>

        {/* Games Section */}
        <section id="games" className="bg-gradient-to-b from-card to-background">
          <ContentSection
            id="games-content"
            title="GAMES"
            subtitle="Jogue os melhores títulos direto do navegador"
            items={games}
            layout="grid"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
