import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider } from "@/contexts/ModeContext";
import Layout from "@/components/Layout";
import CinematicIntro from "@/components/CinematicIntro";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowWeWork from "./pages/HowWeWork";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useState, useCallback } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModeProvider>
          <Toaster />
          <Sonner />
          {!introDone && <CinematicIntro onComplete={handleIntroComplete} />}
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/team" element={<Team />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ModeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
