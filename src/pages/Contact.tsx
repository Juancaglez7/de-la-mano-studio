import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CinematicHero from "@/components/CinematicHero";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, ArrowRight } from "lucide-react";
import teamPhoto2 from "@/assets/team-photo-2.jpeg";

const ContactCard = ({ icon: Icon, label, children, index }: { icon: any; label: string; children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="card-neon-white group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-11 h-11 rounded-full bg-led/10 border border-led/30 flex items-center justify-center shrink-0 group-hover:bg-led/20 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.1, type: "spring" }}
        >
          <Icon size={18} className="text-led" strokeWidth={1.5} />
        </motion.div>
        <div>
          <p className="font-display text-xs tracking-widest text-led/60 mb-1">{label}</p>
          <div className="font-serif text-foreground">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <CinematicHero
        badge="Hablemos"
        title="CONTACTO"
        subtitle="Estamos aquí para escucharte, responder tus preguntas y ayudarte a dar el primer paso."
        image={teamPhoto2}
      />
      <div className="led-line" />

      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          {/* Section intro */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-display text-8xl md:text-[10rem] text-primary/[0.04] leading-none select-none pointer-events-none">
                HOLA
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div ref={formRef} className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  className="card-neon-white text-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-led/10 border border-led/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Send className="text-led" size={24} />
                  </motion.div>
                  <h2 className="text-3xl mb-3">GRACIAS</h2>
                  <p className="font-serif text-lg text-muted-foreground italic max-w-sm mx-auto">
                    Hemos recibido tu mensaje y te responderemos en 24–48 horas.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">NOMBRE *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-led/30 focus:border-led/40 transition-all duration-300" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">TELÉFONO *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-led/30 focus:border-led/40 transition-all duration-300" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">CORREO ELECTRÓNICO</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-led/30 focus:border-led/40 transition-all duration-300" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">MENSAJE *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-led/30 focus:border-led/40 transition-all duration-300 resize-none" placeholder="Cuéntanos brevemente tus inquietudes o preguntas…" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                    >
                      ENVIAR MENSAJE <Send size={18} />
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-4">
              <ContactCard icon={Phone} label="TELÉFONO" index={0}>
                <a href="tel:611658382" className="hover:text-led transition-colors">611 65 83 82</a>
              </ContactCard>
              <ContactCard icon={MessageCircle} label="WHATSAPP" index={1}>
                <a href="https://wa.me/34611658382" target="_blank" rel="noopener noreferrer" className="hover:text-led transition-colors">Enviar mensaje</a>
              </ContactCard>
              <ContactCard icon={Mail} label="CORREO" index={2}>
                <span className="text-muted-foreground">info@dlamano.es</span>
              </ContactCard>
              <ContactCard icon={MapPin} label="UBICACIÓN" index={3}>
                <span className="text-muted-foreground">Jerez de la Frontera<br />Cádiz, España</span>
              </ContactCard>
              <ContactCard icon={Clock} label="HORARIO" index={4}>
                <span className="text-muted-foreground">Mañanas: Personas mayores<br />Tardes: Infancia 0–6</span>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>

      <div className="led-line" />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl mb-6">¿PREFIERES LLAMAR?</h2>
            <p className="font-serif text-xl text-muted-foreground italic leading-relaxed mb-10 max-w-md mx-auto">
              También puedes contactarnos directamente por teléfono o WhatsApp. Estaremos encantados de atenderte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:611658382"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                LLAMAR AHORA <Phone size={18} />
              </a>
              <a
                href="https://wa.me/34611658382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground font-display text-lg tracking-wider rounded-full hover:bg-foreground/5 transition-colors"
              >
                <MessageCircle size={18} /> WHATSAPP
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
