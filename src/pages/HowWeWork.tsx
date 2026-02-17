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
  { q: "When should we come?", a: "If you notice your child is not meeting expected milestones, or if something feels 'off' — trust your instinct. Early support makes a real difference." },
  { q: "What happens in the first visit?", a: "We'll sit with you, listen to your concerns, observe your child, and explain next steps clearly. No pressure, no jargon." },
  { q: "What should we bring?", a: "Any previous reports, school notes, or medical records you have. But if you have nothing, that's perfectly fine too." },
  { q: "How long until we see progress?", a: "Every child is different. Some families notice changes within weeks; others take longer. We track progress carefully and adjust as needed." },
  { q: "Do you work with schools?", a: "Yes. With your permission, we coordinate with teachers and other professionals involved in your child's care." },
  { q: "How are sessions structured?", a: "Sessions are play-based and structured, adapted to your child's age and goals. We share a plan with you after each session." },
];

const proFaqs = [
  { q: "What assessment tools do you use?", a: "We use internationally validated instruments appropriate for 0–6, including developmental screeners and domain-specific assessments." },
  { q: "How do you coordinate with other professionals?", a: "Through shared reports, case meetings, and ongoing communication channels — always with family consent." },
  { q: "What is your clinical framework?", a: "Our work is grounded in evidence-based developmental science, family-centered practice, and interdisciplinary collaboration." },
  { q: "Do you provide written reports?", a: "Yes. All assessments include detailed written reports with recommendations suitable for clinical and educational settings." },
  { q: "Can we refer families to you?", a: "Absolutely. Contact us directly or share our referral information with families." },
];

const HowWeWork = () => {
  const { mode } = useMode();
  const faqs = mode === "professionals" ? proFaqs : familyFaqs;

  return (
    <>
      {/* METHODOLOGY */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <span className="badge-stamp mb-6 inline-block">Methodology</span>
            <h1 className="text-5xl md:text-7xl mb-4">HOW WE WORK</h1>
            <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
              A clear, structured process — always adapted to each family.
            </p>
          </ScrollReveal>

          {/* Intervention Map */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16">
              <h2 className="text-2xl md:text-3xl mb-8">INTERVENTION MAP</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
                {["Assessment", "Plan", "Sessions", "Review"].map((step, i) => (
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
              <h2 className="text-2xl md:text-3xl mb-6">SESSION FORMAT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">FREQUENCY</p>
                  <p className="font-serif text-muted-foreground">Typically weekly or biweekly, adjusted to each child's needs and family schedule.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">DURATION</p>
                  <p className="font-serif text-muted-foreground">Sessions last 45–60 minutes. Assessment blocks may require 1–2 longer sessions.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">LOCATION</p>
                  <p className="font-serif text-muted-foreground">In-clinic, at home, or at school — depending on the child's needs and goals.</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">REVIEWS</p>
                  <p className="font-serif text-muted-foreground">Regular progress reviews with families and, when appropriate, other professionals involved.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl mb-6">
              {mode === "professionals" ? "PROFESSIONAL FAQ" : "FREQUENTLY ASKED"}
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
                BOOK A FIRST CALL <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
