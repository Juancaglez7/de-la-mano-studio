import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-image.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Valoración del Desarrollo (0–6)",
    who: "Niños que muestran retrasos o diferencias en cualquier área del desarrollo.",
    what: "Evaluación integral con herramientas validadas para comprender fortalezas y dificultades.",
    session: "1–2 sesiones de observación estructurada y pruebas estandarizadas, más un informe escrito detallado.",
  },
  {
    title: "Sesiones de Terapia Individual",
    who: "Niños que necesitan intervención personalizada, uno a uno.",
    what: "Objetivos en habla, motricidad, cognición, socioemocional o conducta — adaptados a cada niño.",
    session: "Sesiones de 45–60 minutos con el niño, combinando actividades lúdicas y estructuradas.",
  },
  {
    title: "Orientación a Padres y Familias",
    who: "Familias que buscan apoyo para acompañar el desarrollo de su hijo en casa.",
    what: "Estrategias prácticas, rutinas y herramientas para reforzar los avances fuera de las sesiones.",
    session: "Sesiones de orientación presenciales o por videollamada, con planes de acción escritos.",
  },
  {
    title: "Coordinación con Colegios y Profesionales",
    who: "Familias y profesionales que necesitan alinearse entre entornos.",
    what: "Colaboración con docentes, pediatras y otros terapeutas para garantizar coherencia.",
    session: "Informes, reuniones y documentación compartida, adaptados a cada caso.",
  },
  {
    title: "Programas Específicos",
    who: "Niños con necesidades puntuales en habla, motricidad, comunicación o rutinas diarias.",
    what: "Bloques de intervención focalizados con objetivos claros y medibles.",
    session: "Programas estructurados con puntos de revisión periódicos y participación de la familia.",
  },
];

const Services = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <ScrollReveal>
              <span className="badge-stamp mb-6 inline-block">Lo que ofrecemos</span>
              <h1 className="text-5xl md:text-7xl mb-4">NUESTROS SERVICIOS</h1>
              <p className="font-serif text-xl text-muted-foreground italic max-w-md leading-relaxed">
                Cada servicio está diseñado para ser claro, colaborativo y basado en evidencia — adaptado a tu hijo y tu familia.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="right">
            <img
              src={servicesImage}
              alt="Terapeuta trabajando con un niño en un espacio luminoso y acogedor"
              className="rounded-2xl shadow-warm w-full object-cover aspect-square"
            />
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <div className="group bg-card rounded-2xl p-8 md:p-10 border border-border/50 card-hover">
                <div className="flex items-start gap-6">
                  <span className="section-number hidden md:block">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary mb-2">PARA QUIÉN</p>
                        <p className="font-serif text-muted-foreground leading-relaxed">{service.who}</p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary mb-2">QUÉ TRABAJAMOS</p>
                        <p className="font-serif text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary mb-2">CÓMO ES UNA SESIÓN</p>
                        <p className="font-serif text-muted-foreground leading-relaxed">{service.session}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              SOLICITAR VALORACIÓN <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
