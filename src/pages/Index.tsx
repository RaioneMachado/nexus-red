import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AutoCarousel from "@/components/AutoCarousel";
import ParallaxNotebook from "@/components/ParallaxNotebook";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import SecaoValores from "@/components/secaovalores/SecaoValores";
import { featuredMovies, carouselMovies, series, games } from "@/data/content";

// Remover apenas os filmes "Stranger Things" e "Dinastia Digital"
const filteredFeaturedMovies = featuredMovies.filter(
  movie => movie.title !== "Stranger Things" && movie.title !== "Dinastia Digital"
);

const filteredCarouselMovies = carouselMovies.filter(
  movie => movie.title !== "Stranger Things" && movie.title !== "Dinastia Digital"
);

// Mesmo filtro nas séries
const filteredSeries = series.filter(
  item => item.title !== "Stranger Things" && item.title !== "Dinastia Digital"
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Featured Movies Section (corrigido) */}
        <section id="movies" className="relative">
          <ContentSection
            id="featured"
            title="EM DESTAQUE"
            subtitle="Os melhores lançamentos selecionados para você"
            items={filteredFeaturedMovies}
            layout="featured"
          />
        </section>

        {/* Carousel Trending (corrigido) */}
        <section className="py-8 bg-gradient-to-b from-background via-card to-background">
          <AutoCarousel
            items={filteredCarouselMovies}
            title="TENDÊNCIAS"
            direction="left"
            speed={35}
          />
        </section>

        <ParallaxNotebook />

        <SecaoValores 
          titulo="Escolha Seu Plano"
          subtitulo="Assista onde quiser. Cancele quando quiser."
        />

        {/* Série (corrigido) */}
        <section id="series" className="bg-gradient-to-b from-background to-card">
          <ContentSection
            id="series-content"
            title="SÉRIES"
            subtitle="Maratone as melhores séries do momento"
            items={filteredSeries}
            layout="featured"
          />
        </section>

        {/* “Mais assistidas” corrigido — NÃO usa slice antes do filtro */}
        <section className="py-8 bg-card">
          <AutoCarousel
            items={[
              ...filteredSeries,
              ...filteredCarouselMovies
            ]}
            title="MAIS ASSISTIDAS"
            direction="right"
            speed={40}
          />
        </section>

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
