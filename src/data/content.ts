/* Estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: #141414;
  color: white;
}

/* Container principal */
.app {
  max-width: 100%;
  overflow-x: hidden;
  padding: 0 1rem;
}

/* Seções */
section {
  margin: 2rem 0;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding-left: 0.5rem;
}

/* Cards de filmes */
.movie-card {
  background: #1f1f1f;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.03);
}

/* Container flexível para imagens */
.image-container {
  position: relative;
  width: 100%;
  min-height: 200px;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}

.movie-card:hover .movie-image {
  transform: scale(1.05);
}

.rating-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: #ffd700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.875rem;
}

.movie-info {
  padding: 0.75rem;
}

.movie-title {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #aaa;
}

.movie-meta span {
  background: #333;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
}

/* Grid para filmes em destaque, séries e jogos */
.featured-grid,
.series-grid,
.games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Carrossel */
.carousel-container {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
}

.carousel-container::-webkit-scrollbar {
  height: 4px;
}

.carousel-container::-webkit-scrollbar-track {
  background: #333;
}

.carousel-container::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 2px;
}

.carousel-item {
  flex: 0 0 auto;
  width: 140px;
  scroll-snap-align: start;
}

/* Para items do carrossel com imagens flexíveis */
.carousel-item .image-container {
  height: 200px;
}

.carousel-item .movie-image {
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 200px;
}

/* Media Queries para dispositivos maiores */
@media (min-width: 640px) {
  .app {
    padding: 0 1.5rem;
  }
  
  .featured-grid,
  .series-grid,
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .carousel-item {
    width: 160px;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  /* Ajustes para desktop - manter proporção mais uniforme */
  .image-container {
    height: 280px;
  }
  
  .movie-image {
    height: 280px;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  .featured-grid,
  .series-grid,
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .carousel-item {
    width: 180px;
  }
  
  .movie-title {
    font-size: 1rem;
  }
  
  .image-container {
    height: 320px;
  }
  
  .movie-image {
    height: 320px;
  }
  
  .carousel-item .image-container {
    height: 240px;
  }
  
  .carousel-item .movie-image {
    max-height: 240px;
  }
}

@media (min-width: 1024px) {
  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .featured-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
  .series-grid,
  .games-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  
  .carousel-item {
    width: 200px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .image-container {
    height: 360px;
  }
  
  .movie-image {
    height: 360px;
  }
  
  .carousel-item .image-container {
    height: 280px;
  }
  
  .carousel-item .movie-image {
    max-height: 280px;
  }
}

/* Ajustes específicos para mobile */
@media (max-width: 639px) {
  .image-container {
    min-height: 180px;
    max-height: 250px;
  }
  
  .movie-image {
    max-height: 250px;
    object-fit: contain; /* Mantém a imagem inteira visível no mobile */
  }
  
  .movie-meta {
    font-size: 0.7rem;
  }
  
  .carousel-item {
    width: 120px;
  }
  
  .carousel-item .image-container {
    height: 160px;
  }
  
  .carousel-item .movie-image {
    max-height: 160px;
  }
}

/* Para garantir que as imagens do Unsplash sejam responsivas */
.movie-image[src*="unsplash"] {
  background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
}

/* Fallback para imagens quebradas */
.movie-image:not([src]),
.movie-image[src=""],
.movie-image[src*="undefined"],
.movie-image[src*="null"] {
  background: linear-gradient(45deg, #2a2a2a, #1a1a1a);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;
}

/* Classe auxiliar para imagens verticais */
.image-vertical {
  width: auto !important;
  max-width: 100% !important;
  height: 100% !important;
}

/* Classe auxiliar para imagens horizontais */
.image-horizontal {
  width: 100% !important;
  height: auto !important;
  max-height: 100% !important;
}
