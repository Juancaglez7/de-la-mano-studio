import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"text" | "reveal" | "done">("text");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 2800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <>
          {/* Top curtain */}
          <motion.div
            className="fixed inset-x-0 top-0 h-1/2 bg-foreground z-[200] origin-top"
            initial={{ scaleY: 1 }}
            animate={phase === "reveal" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Bottom curtain */}
          <motion.div
            className="fixed inset-x-0 bottom-0 h-1/2 bg-foreground z-[200] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={phase === "reveal" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Center line */}
          <motion.div
            className="fixed left-0 right-0 top-1/2 h-[1px] bg-primary/40 z-[201]"
            initial={{ scaleX: 0 }}
            animate={
              phase === "text"
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: phase === "text" ? 0.3 : 0 }}
          />
          {/* Text content */}
          <motion.div
            className="fixed inset-0 z-[202] flex flex-col items-center justify-center pointer-events-none"
            animate={phase === "reveal" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-serif text-lg md:text-xl italic text-primary-foreground/60 mb-4 tracking-wide"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Intervención temprana · 0–6 años
            </motion.p>
            <motion.img
              src={logo}
              alt="D' La Mano"
              className="h-32 sm:h-40 md:h-56 w-auto invert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            <motion.p
              className="font-serif text-base md:text-lg italic text-primary-foreground/50 mt-6 max-w-xs text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Cada paso cuenta cuando se da a tiempo.
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
