import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface CinematicHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
}

const CinematicHero = ({ badge, title, subtitle, image, children }: CinematicHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 0.06]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -120]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-28 right-20 w-20 h-20 border border-led/15 rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-36 left-16 w-14 h-14 border border-primary/10 rotate-45 pointer-events-none hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [45, 135, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-led/20 rounded-full pointer-events-none hidden lg:block"
        animate={{ y: [-12, 12, -12], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="container max-w-4xl text-center relative z-10" style={{ y: textY }}>
        <motion.span
          className="led-badge mb-6 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {badge}
        </motion.span>
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl mb-6 led-glow-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="w-20 h-[2px] bg-gradient-to-r from-transparent via-led to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="font-serif text-xl md:text-2xl text-muted-foreground italic max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {children}
          </motion.div>
        )}
        <motion.div className="mt-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <ArrowDown size={22} className="mx-auto text-led animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;
