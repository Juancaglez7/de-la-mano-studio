import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield } from "lucide-react";
import centroInterior from "@/assets/centro-interior.jpg";

const ParallaxRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Text moves up as you scroll
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [0, -200]);
  // Image opacity increases as text moves away
  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0.08, 0.6]);
  // Slight scale on image for cinematic feel
  const imageScale = useTransform(scrollYProgress, [0.15, 0.7], [1.05, 1.15]);
  // Text opacity fades out
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.65], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 min-h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* Background image with scroll-driven opacity */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: imageOpacity, scale: imageScale }}
      >
        <img
          src={centroInterior}
          alt="Interior del centro D' La Mano"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-card via-card/60 to-card pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-card via-transparent to-card pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-led/10 pointer-events-none z-[2]" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b border-l border-led/10 pointer-events-none z-[2]" />

      {/* Text content that moves up on scroll */}
      <motion.div
        className="container max-w-3xl text-center relative z-10"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="relative mb-8">
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 font-display text-7xl md:text-9xl text-primary/[0.04] leading-none select-none pointer-events-none">
            02
          </span>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-led/40" />
            <span className="font-serif text-lg text-muted-foreground italic">El centro</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-led/40" />
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 led-glow-text">
          UN ESPACIO PROFESIONAL
        </h2>
        <p className="font-serif text-xl text-muted-foreground italic leading-relaxed mb-10">
          Un entorno estructurado, calmado y profesional donde cada persona recibe atención
          personalizada. Trabajamos con rigor y cercanía, respetando el ritmo de cada proceso.
        </p>
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-led/20 inline-flex items-center gap-3">
          <Shield className="text-led shrink-0" size={20} />
          <p className="font-serif text-sm text-muted-foreground text-left">
            El centro dispone de sistema de videovigilancia en zonas comunes con fines
            exclusivamente de seguridad, cumpliendo la normativa vigente y señalización
            informativa.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxRevealSection;
