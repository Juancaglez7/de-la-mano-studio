import ScrollReveal from "@/components/ScrollReveal";
import CinematicHero from "@/components/CinematicHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamPhoto1 from "@/assets/team-photo-1.jpeg";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";
import teamPhoto3 from "@/assets/team-photo-3.jpeg";
import teamPhoto4 from "@/assets/team-photo-4.jpeg";
import teamPhoto5 from "@/assets/team-photo-5.jpeg";
import heroImage from "@/assets/hero-image.jpg";

const photos = [
  { src: teamPhoto1, alt: "Profesional del centro D' La Mano", span: "md:row-span-2" },
  { src: teamPhoto2, alt: "Detalle del uniforme corporativo", span: "" },
  { src: teamPhoto3, alt: "Compromiso y cercanía profesional", span: "" },
  { src: teamPhoto4, alt: "Dirección del centro", span: "md:row-span-2" },
  { src: teamPhoto5, alt: "Logo bordado en uniforme", span: "md:col-span-2" },
  { src: heroImage, alt: "Instalaciones del centro", span: "" },
];

const GalleryItem = ({ photo, index }: { photo: typeof photos[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`group overflow-hidden rounded-2xl border border-border/50 h-full ${photo.span}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-full overflow-hidden">
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl border-2 border-led/0 group-hover:border-led/30 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-serif text-xs text-background/90 italic bg-foreground/50 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
            {photo.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Galeria = () => (
  <>
    <CinematicHero
      badge="Nuestro espacio"
      title="GALERÍA"
      subtitle="Imágenes del centro, el equipo y el día a día en D' La Mano."
      image={teamPhoto1}
    />
    <div className="led-line" />

    <section className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none">
              FOTOS
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {photos.map((photo, i) => (
            <GalleryItem key={i} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Galeria;
