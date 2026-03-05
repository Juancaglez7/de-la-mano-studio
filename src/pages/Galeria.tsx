import ScrollReveal from "@/components/ScrollReveal";
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

/* Replace placeholders: swap src values with your own photos (photo1.jpg … photo6.jpg) */

const Galeria = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <ScrollReveal>
        <span className="badge-stamp mb-6 inline-block">Nuestro espacio</span>
        <h1 className="text-5xl md:text-7xl mb-4">GALERÍA</h1>
        <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-12">
          Imágenes del centro, el equipo y el día a día en D' La Mano.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        {photos.map((photo, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className={`group overflow-hidden rounded-2xl border border-border/50 h-full ${photo.span}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-warm"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Galeria;
