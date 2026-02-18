import ScrollReveal from "@/components/ScrollReveal";
import { useMode } from "@/contexts/ModeContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const familyFaqs = [
  { q: "¿Cuándo deberíamos consultar?", a: "Si notas que tu hijo no alcanza los hitos esperados o si algo te genera inquietud — confía en tu instinto. El apoyo temprano marca una gran diferencia." },
  { q: "¿Qué pasa en la primera visita?", a: "Nos sentamos contigo, escuchamos tus preocupaciones, observamos a tu hijo y explicamos los próximos pasos con claridad. Sin presión ni tecnicismos." },
  { q: "¿Qué debemos traer?", a: "Cualquier informe previo, notas del colegio o documentos médicos que tengas. Pero si no tienes nada, está perfectamente bien." },
  { q: "¿Cuánto tiempo hasta ver avances?", a: "Cada niño es diferente. Algunas familias notan cambios en semanas; otras necesitan más tiempo. Hacemos un seguimiento cuidadoso y ajustamos según sea necesario." },
  { q: "¿Trabajan con colegios?", a: "Sí. Con tu permiso, nos coordinamos con los docentes y otros profesionales que atienden a tu hijo." },
  { q: "¿Cómo son las sesiones?", a: "Las sesiones combinan juego y actividades estructuradas, adaptadas a la edad y los objetivos de tu hijo. Después de cada sesión, compartimos un plan contigo." },
];

const proFaqs = [
  { q: "¿Qué herramientas de evaluación utilizan?", a: "Usamos instrumentos validados internacionalmente, apropiados para 0–6 años, incluyendo cribados del desarrollo y evaluaciones específicas por dominio." },
  { q: "¿Cómo se coordinan con otros profesionales?", a: "A través de informes compartidos, reuniones de caso y canales de comunicación continuos — siempre con el consentimiento de la familia." },
  { q: "¿Cuál es su marco clínico?", a: "Nuestro trabajo se fundamenta en ciencia del desarrollo basada en evidencia, práctica centrada en la familia y colaboración interdisciplinar." },
  { q: "¿Emiten informes escritos?", a: "Sí. Todas las evaluaciones incluyen informes escritos detallados con recomendaciones aptas para contextos clínicos y educativos." },
  { q: "¿Podemos derivar familias?", a: "Por supuesto. Contáctanos directamente o comparte nuestra información de derivación con las familias." },
];

const HowWeWork = () => {
  const { mode } = useMode();
  const faqs = mode === "professionals" ? proFaqs : familyFaqs;

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <span className="badge-stamp mb-6 inline-block">Metodología</span>
            <h1 className="text-5xl md:text-7xl mb-4">CÓMO TRABAJAMOS</h1>
            <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
              Un proceso claro y estructurado — siempre adaptado a cada familia.
            </p>
          </ScrollReveal>

          {/* Intervention Map */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16">
              <h2 className="text-2xl md:text-3xl mb-8">MAPA DE INTERVENCIÓN</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
                {["Valoración", "Plan", "Sesiones", "Revisión"].map((step, i) => (
                  <div key={step} className="flex items-center gap-4 flex-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center font-display text-lg text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="font-display text-sm tracking-wider mt-2">{step.toUpperCase()}</p>
                    </div>
                    {i < 3 && <div className="hidden md:block flex-1 h-[2px] bg-primary/15 mx-2" />}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Session format */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-6">FORMATO DE SESIÓN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">FRECUENCIA</p>
                  <p className="font-serif text-muted-foreground">Normalmente semanal o quincenal, ajustada a las necesidades del niño y la disponibilidad de la familia.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">DURACIÓN</p>
                  <p className="font-serif text-muted-foreground">Las sesiones duran 45–60 minutos. Los bloques de valoración pueden requerir 1–2 sesiones más largas.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">LUGAR</p>
                  <p className="font-serif text-muted-foreground">En consulta, a domicilio o en el colegio — según las necesidades y objetivos del niño.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">REVISIONES</p>
                  <p className="font-serif text-muted-foreground">Revisiones periódicas de progreso con las familias y, cuando corresponda, otros profesionales implicados.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl mb-6">
              {mode === "professionals" ? "PREGUNTAS PARA PROFESIONALES" : "PREGUNTAS FRECUENTES"}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="font-display text-lg tracking-wide hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif text-muted-foreground text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                AGENDA UNA PRIMERA LLAMADA <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
