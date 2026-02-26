import { motion } from "framer-motion";
import foodImg from "@/assets/ella-food.jpg";

const menuItems = [
  { name: "Ceylon Golden Tips Tea", price: "LKR 450", desc: "Single-estate tea from Ella's finest gardens" },
  { name: "Ella Sunrise Smoothie", price: "LKR 650", desc: "Mango, passion fruit, king coconut" },
  { name: "Sri Lankan Rice & Curry", price: "LKR 1,200", desc: "Traditional rice with 5 authentic curries" },
  { name: "Hoppers & Sambol", price: "LKR 550", desc: "Crispy egg hoppers with coconut sambol" },
  { name: "Tropical Açaí Bowl", price: "LKR 850", desc: "With fresh papaya, banana & local honey" },
  { name: "Ella Rock Coffee", price: "LKR 500", desc: "Locally roasted single-origin espresso" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-3">
          Taste of Ella
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Our <span className="text-gradient-gold">Menu</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-between items-start py-5 border-b border-border group"
            >
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
              <span className="font-sans text-sm font-semibold text-accent whitespace-nowrap ml-4">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={foodImg}
            alt="Sri Lankan food spread"
            className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default MenuSection;
