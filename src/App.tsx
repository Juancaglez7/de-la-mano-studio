import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import CinematicIntro from "@/components/CinematicIntro";
import Index from "./pages/Index";
import Centro from "./pages/Centro";
import Programas from "./pages/Programas";
import Team from "./pages/Team";
import Methodology from "./pages/Methodology";
import Tarifas from "./pages/Tarifas";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Reservar from "./pages/Reservar";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";
import { useState, useCallback } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!introDone && <CinematicIntro onComplete={handleIntroComplete} />}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/centro" element={<Centro />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/services" element={<Programas />} />
              <Route path="/team" element={<Team />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/tarifas" element={<Tarifas />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservar" element={<Reservar />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
