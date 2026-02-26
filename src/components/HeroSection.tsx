import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/ella-hero.jpg";

const HeroSection = () => (
  <section id="home" className="relative h-screen w-full overflow-hidden">
    <img
      src={heroImg}
      alt="Nine Arch Bridge Ella Sri Lanka"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-hero-overlay" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-sans text-sm md:text-base tracking-[0.35em] uppercase text-secondary mb-4"
      >
        Nestled in the hills of Sri Lanka
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight"
      >
        Ella <span className="text-gradient-gold italic">Café</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="font-sans text-lg md:text-xl text-secondary/80 mt-6 max-w-lg"
      >
        Where mountain mist meets Ceylon tea & local flavours
      </motion.p>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-12 bg-gold-gradient text-accent-foreground font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:scale-105 transition-transform"
      >
        Discover Our Story
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-secondary/60 animate-bounce" size={28} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
