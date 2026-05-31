import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThermometerSun, Droplets, Lightbulb, Wind } from "lucide-react";

export default function IndoorFarming() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0">
          <img 
            src="/farm-lab-founders.jpg" 
            alt="Amaratva Agro Indoor Saffron Farming Lab" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-accent/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary font-sans text-sm uppercase tracking-wider font-bold">
              Advanced Agritech
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              The Future of Saffron Cultivation
            </h1>
            <p className="text-lg font-sans text-white/80 leading-relaxed">
              Discover how our advanced aeroponics technology enables us to grow the world's most precious spice indoors, free from geographical limitations and climate dependencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lab Photo Gallery Strip */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/farm-lab-naveen.jpg", caption: "Naveen harvesting saffron flowers" },
              { src: "/farm-lab-founders.jpg", caption: "Both founders inside the aeroponic facility" },
              { src: "/farm-lab-parveen.jpg", caption: "Parveen monitoring saffron growth" },
            ].map((photo, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl shadow-lg group">
                <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="bg-card border-t border-border px-4 py-3">
                  <p className="font-sans text-sm text-muted-foreground">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-sm font-sans text-primary uppercase tracking-widest font-semibold">Technology Overview</h2>
              <h3 className="text-4xl font-serif font-bold text-foreground">Controlled Environment Agriculture</h3>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Traditional saffron farming is heavily dependent on specific climatic conditions found only in regions like Kashmir or Iran. With changing weather patterns and pollution, traditional yields and quality have become unpredictable.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                At Amaratva Agro, we utilize high-tech indoor aeroponic systems. We suspend the saffron corms (bulbs) in the air and mist their roots with a precisely calculated nutrient solution. Every variable—light, temperature, humidity, and airflow—is strictly monitored and controlled.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl border border-border space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <ThermometerSun className="w-8 h-8 text-secondary" />
                <h4 className="font-serif font-bold text-xl">Temperature Control</h4>
                <p className="font-sans text-sm text-muted-foreground">Replicating perfect seasonal shifts necessary for corm flowering.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-4 shadow-sm hover:shadow-md transition-shadow translate-y-6">
                <Droplets className="w-8 h-8 text-secondary" />
                <h4 className="font-serif font-bold text-xl">Nutrient Misting</h4>
                <p className="font-sans text-sm text-muted-foreground">Aeroponic delivery uses 90% less water than traditional soil farming.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <Lightbulb className="w-8 h-8 text-secondary" />
                <h4 className="font-serif font-bold text-xl">LED Grow Lights</h4>
                <p className="font-sans text-sm text-muted-foreground">Specific light spectrums optimize plant growth and compound synthesis.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-4 shadow-sm hover:shadow-md transition-shadow translate-y-6">
                <Wind className="w-8 h-8 text-secondary" />
                <h4 className="font-serif font-bold text-xl">Air Purification</h4>
                <p className="font-sans text-sm text-muted-foreground">HEPA filters ensure the environment is entirely free of contaminants.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farming Process Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">The Cultivation Cycle</h2>
            <p className="text-muted-foreground font-sans">A scientific approach to a delicate natural process.</p>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {[
              { phase: "Phase 1: Corm Selection", desc: "We source the highest quality, disease-free Crocus sativus corms with optimal weight for guaranteed flowering." },
              { phase: "Phase 2: Dormancy & Incubation", desc: "Corms undergo a period of strict temperature manipulation to break dormancy and stimulate biological activity." },
              { phase: "Phase 3: Aeroponic Racking", desc: "Corms are placed in our aeroponic racks where they develop without soil, receiving misted nutrients." },
              { phase: "Phase 4: Blooming", desc: "Under precise LED lighting and temperature drops, the corms produce the beautiful purple saffron flowers." },
              { phase: "Phase 5: Harvesting & Drying", desc: "Flowers are hand-picked immediately. The red stigmas (saffron threads) are carefully separated and scientifically dried to preserve crocin levels." }
            ].map((step, i) => (
              <motion.div key={i} {...fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <h4 className="font-serif font-bold text-xl mb-2 text-foreground">{step.phase}</h4>
                  <p className="font-sans text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-24 relative overflow-hidden bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">Start Your Own Indoor Farm</h2>
            <p className="text-lg text-muted-foreground font-sans mb-10">
              Amaratva Agro provides end-to-end consulting, lab setup, and training for entrepreneurs looking to enter the profitable world of indoor saffron farming.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base shadow-lg">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
