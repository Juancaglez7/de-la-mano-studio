import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Realizan diagnósticos clínicos?", a: "No. Se realiza valoración del desarrollo y orientación educativa. Si fuera necesario, se deriva al profesional clínico correspondiente." },
  { q: "¿Con qué frecuencia se asiste?", a: "Depende de cada caso tras la valoración inicial. Se propone la frecuencia más adecuada según las necesidades del niño." },
  { q: "¿Trabajan con colegios?", a: "Sí. Cuando es necesario, nos coordinamos con el entorno educativo del niño para garantizar coherencia en la intervención." },
  { q: "¿Desde qué edad atendéis?", a: "Desde los primeros meses hasta los 6 años." },
  { q: "¿Las sesiones son en el centro?", a: "Sí. Todas las sesiones se realizan en nuestro centro en Jerez de la Frontera, en un entorno diseñado para favorecer la calma y el desarrollo." },
  { q: "¿Qué debo traer a la primera visita?", a: "Cualquier informe previo, notas del colegio o documentos médicos que tengas. Si no tienes nada, no te preocupes." },
];

const Faqs = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Resolvemos tus dudas</span>
          <h1 className="text-5xl md:text-7xl mb-4">PREGUNTAS FRECUENTES</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Las preguntas más habituales de las familias que contactan con nosotros.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
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
            <p className="font-serif text-lg text-muted-foreground italic mb-6">
              ¿Tienes otra pregunta? Escríbenos sin compromiso.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
            >
              CONTACTAR <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Faqs;
