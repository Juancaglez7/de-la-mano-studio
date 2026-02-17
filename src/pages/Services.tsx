import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-image.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Developmental Assessment (0–6)",
    who: "Children showing delays or differences in any area of development.",
    what: "Comprehensive evaluation using validated tools to understand strengths and challenges.",
    session: "1–2 sessions of structured observation and standardized testing, plus a detailed written report.",
  },
  {
    title: "Individual Therapy Sessions",
    who: "Children who need targeted, one-on-one intervention.",
    what: "Speech, motor, cognitive, social-emotional, or behavioral goals — tailored to each child.",
    session: "45–60 minute sessions with the child, incorporating play-based and structured activities.",
  },
  {
    title: "Parent & Family Coaching",
    who: "Families seeking guidance on supporting their child's development at home.",
    what: "Practical strategies, routines, and tools to reinforce progress outside of sessions.",
    session: "Scheduled coaching calls or in-person sessions, with written action plans.",
  },
  {
    title: "School & Professional Coordination",
    who: "Families and professionals who need alignment across settings.",
    what: "Collaboration with teachers, pediatricians, and other therapists to ensure consistency.",
    session: "Reports, meetings, and shared documentation tailored to each case.",
  },
  {
    title: "Targeted Programs",
    who: "Children with specific needs in speech, motor skills, communication, or daily routines.",
    what: "Focused intervention blocks with clear, measurable goals.",
    session: "Structured programs with regular review points and family involvement.",
  },
];

const Services = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <ScrollReveal>
              <span className="badge-stamp mb-6 inline-block">What We Offer</span>
              <h1 className="text-5xl md:text-7xl mb-4">OUR SERVICES</h1>
              <p className="font-serif text-xl text-muted-foreground italic max-w-md leading-relaxed">
                Every service is designed to be clear, collaborative, and grounded in evidence — adapted to your child and your family.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="right">
            <img
              src={servicesImage}
              alt="Therapist working with a child in a bright, welcoming space"
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
                        <p className="font-display text-xs tracking-widest text-primary mb-2">WHO IT'S FOR</p>
                        <p className="font-serif text-muted-foreground leading-relaxed">{service.who}</p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary mb-2">WHAT WE WORK ON</p>
                        <p className="font-serif text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-primary mb-2">WHAT A SESSION LOOKS LIKE</p>
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
              REQUEST AN ASSESSMENT <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
