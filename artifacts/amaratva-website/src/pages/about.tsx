import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-accent mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Discover the story of Amaratva Agro, where ancient agricultural wisdom meets modern scientific precision to deliver unmatched purity.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src="/farm-lab-founders.jpg" alt="Naveen & Parveen — Amaratva Agro Founders" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img src="/farm-lab-naveen.jpg" alt="Naveen in the indoor saffron lab" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img src="/farm-lab-parveen.jpg" alt="Parveen in the indoor saffron lab" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Amaratva Agro Pvt. Ltd. was founded with a singular vision: to cultivate the world's most pristine saffron locally in India, untainted by environmental pollution and weather unpredictability.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                By leveraging state-of-the-art indoor aeroponics, we have successfully decoupled saffron farming from its traditional geographical constraints. Based in Hisar, Haryana, our facility represents a leap forward in sustainable, high-yield luxury agriculture.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Founded by <strong className="text-foreground">Naveen</strong> and <strong className="text-foreground">Parveen</strong>, the company is driven by a passion for purity and a deep respect for traditional Indian botanical wisdom, reimagined for the modern consumer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders with Products */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">Meet the Founders</h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">Two visionaries who brought indoor saffron farming to Haryana and built a premium wellness brand from scratch.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="overflow-hidden rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <img src="/founders-with-products.jpg" alt="Amaratva Agro founders with complete product range" className="w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-white/80 font-sans leading-relaxed text-lg">
                To redefine agricultural purity through innovation. We aim to provide consumers with 100% natural, lab-tested saffron and wellness products while empowering the farming community with modern indoor cultivation techniques.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl font-serif font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-white/80 font-sans leading-relaxed text-lg">
                To establish Amaratva Agro as the global gold standard for premium indoor-farmed wellness products, demonstrating that luxury, health, and sustainability can beautifully coexist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* In the Media / Press */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-3">In the News</h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Praveen and Naveen Sindhu have been recognized across national media, academic conferences, and government bodies for their pioneering work in indoor saffron farming.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div {...fadeInUp} className="overflow-hidden rounded-2xl shadow-xl group">
              <img src="/founders-award-ceremony.jpg" alt="Founders receiving certificate at International Saffron Conference, Srinagar" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-4 bg-card border-t border-border">
                <p className="font-serif font-semibold text-foreground text-sm">International Saffron Conference — Srinagar</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">Praveen & Naveen Sindhu honoured by NITI Aayog Chairman Prof. Ramesh Chand for innovation in saffron cultivation.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="overflow-hidden rounded-2xl shadow-xl group">
              <img src="/press-coverage-1.jpg" alt="Newspaper coverage — Hisar Union" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-4 bg-card border-t border-border">
                <p className="font-serif font-semibold text-foreground text-sm">Hisar Newspaper — Hisar Union</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">"Yuva Kisan Praveen v Naveen Sindhu Sammanit" — recognised for achieving ₹6–7 lakh revenue from indoor saffron farming in Azad Nagar, Hisar.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="overflow-hidden rounded-2xl shadow-xl group">
              <img src="/press-coverage-2.jpg" alt="Newspaper coverage — full article" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-4 bg-card border-t border-border">
                <p className="font-serif font-semibold text-foreground text-sm">Hisar News — Extended Feature</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">Featured in regional press for growing saffron in a single room and inspiring a new generation of indoor agri-entrepreneurs in Haryana.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">The principles that guide every seed we plant and product we bottle.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Purity", desc: "No compromises. No adulteration. Only 100% natural ingredients from farm to finish." },
              { title: "Innovation", desc: "Constantly researching and refining our aeroponics methods to push the boundaries of agriculture." },
              { title: "Transparency", desc: "Complete honesty about our processes, lab tests, and ingredients." }
            ].map((val, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary font-serif text-2xl font-bold">{i + 1}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold mb-3">{val.title}</h4>
                <p className="text-muted-foreground font-sans">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
