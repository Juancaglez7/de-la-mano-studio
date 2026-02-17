import ScrollReveal from "@/components/ScrollReveal";
import { FileText, Download } from "lucide-react";

const resources = [
  {
    title: "Development Milestones (0–6)",
    desc: "A clear overview of what to expect at each stage — motor, language, social, and cognitive.",
    tag: "Guide",
  },
  {
    title: "Early Warning Signs",
    desc: "When to seek support: a simple checklist for parents and caregivers.",
    tag: "Checklist",
  },
  {
    title: "Play Ideas at Home",
    desc: "Simple, evidence-informed activities to support your child's development through play.",
    tag: "Activities",
  },
  {
    title: "Routines & Behavior Tips",
    desc: "Practical strategies for daily routines, transitions, and managing challenging moments.",
    tag: "Tips",
  },
  {
    title: "Understanding Sensory Needs",
    desc: "What sensory processing means and how to create a supportive environment at home.",
    tag: "Guide",
  },
  {
    title: "Preparing for Your First Visit",
    desc: "What to expect, what to bring, and how to help your child feel comfortable.",
    tag: "Preparation",
  },
];

const Resources = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <span className="badge-stamp mb-6 inline-block">For Families</span>
        <h1 className="text-5xl md:text-7xl mb-4">RESOURCES</h1>
        <p className="font-serif text-xl text-muted-foreground italic max-w-lg leading-relaxed mb-16">
          Guides, checklists, and ideas to support your child's development at home.
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
            PDF downloads coming soon. For now, feel free to{" "}
            <a href="/contact" className="text-primary underline underline-offset-4">
              contact us
            </a>{" "}
            and we'll share resources directly.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Resources;
