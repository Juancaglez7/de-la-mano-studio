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
          <span className="badge-stamp mb-6 inline-block">Let's Talk</span>
          <h1 className="text-5xl md:text-7xl mb-4">GET IN TOUCH</h1>
          <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
            We're here to listen, answer your questions, and help you take the first step.
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
                  <h2 className="text-3xl mb-3">THANK YOU</h2>
                  <p className="font-serif text-lg text-muted-foreground italic max-w-sm mx-auto">
                    We've received your message and will get back to you within 24–48 hours. In the meantime, know that you've already taken an important step.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">YOUR NAME *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">EMAIL *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">CHILD'S AGE</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option value="">Select…</option>
                        <option>0–12 months</option>
                        <option>1–2 years</option>
                        <option>2–3 years</option>
                        <option>3–4 years</option>
                        <option>4–5 years</option>
                        <option>5–6 years</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">AVAILABILITY</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option value="">Select…</option>
                        <option>Mornings</option>
                        <option>Afternoons</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">REASON FOR CONTACT *</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us briefly about your concerns or questions…" />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 block">SCHOOL (OPTIONAL)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground font-serif focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="If applicable" />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display text-lg tracking-wider rounded-full hover:opacity-90 transition-opacity"
                  >
                    SEND MESSAGE <Send size={18} />
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
                    <p className="font-display text-sm tracking-wider">EMAIL</p>
                  </div>
                  <p className="font-serif text-muted-foreground">hello@delamano.com</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">PHONE / WHATSAPP</p>
                  </div>
                  <p className="font-serif text-muted-foreground">+1 (555) 000-0000</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-primary" size={18} />
                    <p className="font-display text-sm tracking-wider">LOCATION</p>
                  </div>
                  <p className="font-serif text-muted-foreground">Address placeholder<br />City, Country</p>
                </div>
                {/* Map placeholder */}
                <div className="bg-card rounded-2xl border border-border/50 aspect-[4/3] flex items-center justify-center">
                  <p className="font-serif text-muted-foreground italic text-sm">Map embed placeholder</p>
                </div>
                {/* Calendly placeholder */}
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="font-display text-xs tracking-widest text-primary mb-2">SCHEDULE DIRECTLY</p>
                  <p className="font-serif text-muted-foreground italic text-sm">Calendly embed placeholder</p>
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
