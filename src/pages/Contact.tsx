import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Hablemos</span>
          <h1 className="text-5xl md:text-7xl mb-4">CONTACTO</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            Estamos aquí para escucharte, responder tus preguntas y ayudarte a dar el primer paso.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="bg-card rounded-2xl p-10 border border-border/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="text-primary" size={24} />
                  </div>
                  <h2 className="text-3xl mb-3">GRACIAS</h2>
                  <p className="font-serif text-lg text-muted-foreground italic max-w-sm mx-auto">
                    Hemos recibido tu mensaje y te responderemos en 24–48 horas. Mientras tanto, ten presente que ya has dado un paso muy importante.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">TU NOMBRE *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">CORREO ELECTRÓNICO *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">EDAD DEL NIÑO</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option value="">Seleccionar…</option>
                        <option>0–12 meses</option>
                        <option>1–2 años</option>
                        <option>2–3 años</option>
                        <option>3–4 años</option>
                        <option>4–5 años</option>
                        <option>5–6 años</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">DISPONIBILIDAD</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option value="">Seleccionar…</option>
                        <option>Mañanas</option>
                        <option>Tardes</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">MOTIVO DE CONSULTA *</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Cuéntanos brevemente tus inquietudes o preguntas…" />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">COLEGIO (OPCIONAL)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Si aplica" />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    ENVIAR MENSAJE <Send size={18} />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">CORREO</p>
                  </div>
                  <p className="font-serif text-muted-foreground">hello@delamano.com</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">TELÉFONO / WHATSAPP</p>
                  </div>
                  <p className="font-serif text-muted-foreground">+1 (555) 000-0000</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">UBICACIÓN</p>
                  </div>
                  <p className="font-serif text-muted-foreground">Dirección placeholder<br />Ciudad, País</p>
                </div>
                <div className="bg-card rounded-2xl border border-border/50 aspect-[4/3] flex items-center justify-center">
                  <p className="font-serif text-muted-foreground italic text-sm">Placeholder para mapa</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">AGENDA DIRECTAMENTE</p>
                  <p className="font-serif text-muted-foreground italic text-sm">Placeholder para Calendly</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
