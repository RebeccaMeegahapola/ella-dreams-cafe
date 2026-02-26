import { motion } from "framer-motion";
import heroImg from "@/assets/ella-hero.jpg";
import cafeImg from "@/assets/ella-cafe.jpg";
import teaImg from "@/assets/ella-tea.jpg";
import mountainImg from "@/assets/ella-mountain.jpg";
import waterfallImg from "@/assets/ella-waterfall.jpg";
import foodImg from "@/assets/ella-food.jpg";

const images = [
  { src: heroImg, alt: "Nine Arch Bridge Ella", span: "md:col-span-2 md:row-span-2" },
  { src: cafeImg, alt: "Ella Café", span: "" },
  { src: waterfallImg, alt: "Ravana Falls", span: "" },
  { src: teaImg, alt: "Tea Plantation", span: "md:col-span-2" },
  { src: mountainImg, alt: "Little Adam's Peak", span: "" },
  { src: foodImg, alt: "Sri Lankan Cuisine", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-3">
          Ella Through Our Lens
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          The <span className="text-gradient-gold">Gallery</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`overflow-hidden rounded-xl group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
