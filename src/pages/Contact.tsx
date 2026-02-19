import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

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
                    Hemos recibido tu mensaje y te responderemos en 24–48 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">NOMBRE *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">TELÉFONO *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">CORREO ELECTRÓNICO</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">MENSAJE *</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Cuéntanos brevemente tus inquietudes o preguntas…" />
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
                    <Phone className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">TELÉFONO</p>
                  </div>
                  <a href="tel:611658382" className="font-serif text-foreground hover:text-primary transition-colors">611 65 83 82</a>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">WHATSAPP</p>
                  </div>
                  <a href="https://wa.me/34611658382" target="_blank" rel="noopener noreferrer" className="font-serif text-foreground hover:text-primary transition-colors">Enviar mensaje</a>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">CORREO</p>
                  </div>
                  <p className="font-serif text-muted-foreground">info@dlamano.es</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">UBICACIÓN</p>
                  </div>
                  <p className="font-serif text-muted-foreground">Jerez de la Frontera<br />Cádiz, España</p>
                </div>
                <div className="bg-card rounded-2xl border border-border/50 aspect-[4/3] flex items-center justify-center">
                  <p className="font-serif text-muted-foreground italic text-sm">Mapa de Google — próximamente</p>
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
