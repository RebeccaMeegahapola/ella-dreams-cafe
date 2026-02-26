import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", value: "Main Street, Ella, Sri Lanka" },
  { icon: Clock, label: "Hours", value: "7:00 AM – 10:00 PM Daily" },
  { icon: Phone, label: "Phone", value: "+94 77 123 4567" },
  { icon: Instagram, label: "Instagram", value: "@ellacafe.lk" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 bg-forest-gradient">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-3">
          Come Find Us
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
          Visit <span className="text-gradient-gold">Ella Café</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {details.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
              <item.icon className="text-accent" size={22} />
            </div>
            <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/60 mb-1">
              {item.label}
            </p>
            <p className="font-sans text-primary-foreground font-medium">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold-gradient text-accent-foreground font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:scale-105 transition-transform"
        >
          Get Directions
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
