import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import React from 'react';
import SecaoValores from './components/secaovalores';

function App() {
  return (
    <div className="App">
      {/* Suas outras seções existentes */}
      <SecaoValores />
      {/* Ou com props customizadas: */}
      {/* <SecaoValores 
        titulo="Nossos Princípios" 
        subtitulo="Valores que nos guiam todos os dias"
        valores={[
          {
            icone: "🚀",
            titulo: "Inovação",
            descricao: "Sempre buscando novas soluções"
          },
          // ... outros valores
        ]}
      /> */}
    </div>
  );
}

export default App;
