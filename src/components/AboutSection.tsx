import { motion } from "framer-motion";
import cafeImg from "@/assets/ella-cafe.jpg";
import teaImg from "@/assets/ella-tea.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={cafeImg}
            alt="Ella Café interior with mountain view"
            className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          <img
            src={teaImg}
            alt="Ceylon tea plantation in Ella"
            className="absolute -bottom-8 -right-4 md:-right-8 w-2/5 rounded-xl shadow-xl border-4 border-background aspect-square object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Born from the<br />
            <span className="text-gradient-gold">Misty Mountains</span>
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-6">
            Perched along the iconic Ella railway, our café is a love letter to Sri Lanka's hill country.
            Every cup of Ceylon tea is sourced from neighbouring plantations, and every dish
            celebrates the vibrant flavours of local spices, fresh coconut, and tropical fruits.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed mb-8">
            Whether you've just hiked Little Adam's Peak or are watching the train cross the
            Nine Arch Bridge, Ella Café is your perfect pause — a warm seat, a steaming cup,
            and a view that goes on forever.
          </p>
          <div className="flex gap-10">
            {[
              { num: "2018", label: "Est." },
              { num: "15K+", label: "Travelers" },
              { num: "4.9", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">{stat.num}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
