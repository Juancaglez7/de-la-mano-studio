import ScrollReveal from "@/components/ScrollReveal";
import { FileText, Download } from "lucide-react";

const resources = [
  {
    title: "Hitos del Desarrollo (0–6)",
    desc: "Una visión clara de qué esperar en cada etapa — motor, lenguaje, social y cognitivo.",
    tag: "Guía",
  },
  {
    title: "Señales de Alerta Temprana",
    desc: "Cuándo buscar apoyo: una lista sencilla para padres y cuidadores.",
    tag: "Checklist",
  },
  {
    title: "Ideas de Juego en Casa",
    desc: "Actividades simples y basadas en evidencia para apoyar el desarrollo de tu hijo a través del juego.",
    tag: "Actividades",
  },
  {
    title: "Rutinas y Consejos de Conducta",
    desc: "Estrategias prácticas para rutinas diarias, transiciones y momentos difíciles.",
    tag: "Consejos",
  },
  {
    title: "Comprendiendo las Necesidades Sensoriales",
    desc: "Qué significa el procesamiento sensorial y cómo crear un entorno de apoyo en casa.",
    tag: "Guía",
  },
  {
    title: "Preparándote para tu Primera Visita",
    desc: "Qué esperar, qué traer y cómo ayudar a tu hijo a sentirse cómodo.",
    tag: "Preparación",
  },
];

const Resources = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <span className="badge-stamp mb-6 inline-block">Para Familias</span>
        <h1 className="text-5xl md:text-7xl mb-4">RECURSOS</h1>
        <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
          Guías, listas y actividades para apoyar el desarrollo de tu hijo en casa.
        </p>
      </ScrollReveal>

      <div className="space-y-4">
        {resources.map((resource, i) => (
          <ScrollReveal key={resource.title} delay={i * 0.05}>
            <div className="group bg-card rounded-2xl p-6 md:p-8 border border-border/50 card-hover flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <FileText className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl">{resource.title}</h3>
                  <span className="badge-stamp text-[10px]">{resource.tag}</span>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed">{resource.desc}</p>
              </div>
              <button className="shrink-0 mt-1 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Download size={16} />
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border/50 text-center">
          <p className="font-serif text-lg text-muted-foreground italic">
            Descargas en PDF próximamente. Mientras tanto, no dudes en{" "}
            <a href="/contact" className="text-primary underline underline-offset-4">
              contactarnos
            </a>{" "}
            y te compartiremos los recursos directamente.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Resources;
