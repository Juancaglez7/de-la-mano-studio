import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { Send, Phone } from "lucide-react";

const Reservar = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <span className="badge-stamp mb-6 inline-block">Primer paso</span>
          <h1 className="text-5xl md:text-7xl mb-4">RESERVAR ENTREVISTA</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-6">
            La entrevista inicial permite conocer la situación del niño, resolver dudas y establecer un plan de intervención adecuado.
          </p>
          <div className="flex items-center gap-3 mb-16">
            <Phone className="text-primary" size={18} />
            <span className="font-serif text-muted-foreground">
              También puedes llamarnos directamente:{" "}
              <a href="tel:611658382" className="text-primary font-medium">611 65 83 82</a>
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {submitted ? (
            <div className="bg-card rounded-2xl p-10 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Send className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl mb-3">SOLICITUD RECIBIDA</h2>
              <p className="font-serif text-lg text-muted-foreground italic max-w-sm mx-auto">
                Nos pondremos en contacto contigo en un plazo de 24–48 horas para confirmar la entrevista. Gracias por confiar en nosotros.
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
                <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">MENSAJE</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Cuéntanos brevemente la situación o tus dudas…" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
              >
                SOLICITAR ENTREVISTA <Send size={18} />
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reservar;
