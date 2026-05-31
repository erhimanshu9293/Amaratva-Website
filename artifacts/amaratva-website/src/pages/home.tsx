import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Leaf, ShieldCheck, Microscope, Star, PhoneCall } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const products = [
    { title: "Saffron Water", img: "/images/saffron-water.png", desc: "Pure infusion for daily wellness" },
    { title: "Tincture of Saffron", img: "/images/saffron-tincture.png", desc: "Potent drops of health" },
    { title: "Kesar + Honey", img: "/images/kesar-honey.png", desc: "Nature's golden synergy" },
    { title: "Nector-5", img: "/images/nector-5.png", desc: "Premium wellness supplement" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/saffron-field.png" 
            alt="Golden Saffron" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary-foreground font-sans text-sm uppercase tracking-wider">
                A Range of Purity
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                India's Trusted <br/>
                <span className="text-primary">Indoor Saffron</span> Farming & Premium Wellness Brand
              </h1>
              <p className="text-lg md:text-xl font-sans text-white/80 max-w-lg leading-relaxed">
                Experience the intersection of ancient purity and modern science. Handcrafted wellness products from our advanced aeroponics labs directly to you.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/products">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-accent hover:bg-white rounded-full px-8 h-14 text-base">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-6 relative"
            >
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5 
                  }}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl ${i % 2 !== 0 ? 'mt-12' : ''}`}
                >
                  <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <h3 className="font-serif font-semibold text-white text-lg">{product.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3 z-0"></div>
              <img src="/images/indoor-lab.png" alt="Indoor Saffron Lab" className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="font-serif text-5xl text-primary font-bold mb-1">100%</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider font-semibold">Pure & Tested</div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-sm font-sans text-primary uppercase tracking-widest font-semibold">About Amaratva Agro</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Redefining the standard of purity in agriculture</h3>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Amaratva Agro Pvt. Ltd. represents the pinnacle of modern Indian agriculture. By harnessing advanced indoor aeroponics, we cultivate premium-grade saffron free from environmental contaminants, heavy metals, and pesticides.
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Our mission goes beyond farming; it's about crafting a range of pure wellness products that elevate your daily rituals. From our specialized labs to your home, trust is our most vital ingredient.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-primary hover:text-primary/80 px-0 h-auto font-semibold text-base mt-4 group">
                  Discover Our Journey <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-sans text-primary uppercase tracking-widest font-semibold mb-3">Our Promise</h2>
            <h3 className="text-4xl font-serif font-bold text-foreground">Why Choose Amaratva</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Indoor Farming", desc: "Climate-controlled environments ensuring zero contamination and year-round harvest." },
              { icon: Microscope, title: "Lab Tested Quality", desc: "Every batch undergoes rigorous scientific testing for crocin, picrocrocin, and safranal levels." },
              { icon: Star, title: "Premium Packaging", desc: "Hygienic, beautiful packaging that preserves the delicate aroma and efficacy of our saffron." },
              { icon: Droplet, title: "Research Driven", desc: "Constant innovation in aeroponics and formulation by leading agronomists." },
              { icon: Leaf, title: "Natural Ingredients", desc: "Absolutely no artificial colors, preservatives, or synthetic additives." },
              { icon: ShieldCheck, title: "Trusted Brand", desc: "A registered Indian company committed to transparency and ethical practices." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground font-sans">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-sans text-primary uppercase tracking-widest font-semibold mb-3">Our Collection</h2>
              <h3 className="text-4xl font-serif font-bold text-foreground">Premium Wellness Products</h3>
            </div>
            <Link href="/products">
              <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                View All Products
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Link href={`/products/${product.title.toLowerCase().replace(/ \+ | /g, '-')}`}>
                  <Card className="overflow-hidden border border-border/50 group cursor-pointer hover:border-primary/50 transition-colors h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square bg-card">
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow text-center">
                      <h4 className="text-xl font-serif font-bold mb-2">{product.title}</h4>
                      <p className="text-sm text-muted-foreground font-sans mb-4 flex-grow">{product.desc}</p>
                      <span className="text-primary font-sans font-semibold text-sm group-hover:underline">View Details</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Farming Tech */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="/images/saffron-field.png" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="text-white space-y-8">
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Grow Premium Saffron Beyond Kashmir</h3>
              <p className="text-lg text-white/80 font-sans leading-relaxed">
                Our proprietary aeroponics technology allows us to recreate the exact climatic conditions required for the world's finest saffron, right here in Haryana.
              </p>
              <ul className="space-y-4">
                {['Controlled Environment Agriculture', 'Significantly Higher Yield', 'Advanced Aeroponics System', 'Research Based Cultivation Process'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
                    <span className="font-sans text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/indoor-farming">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 mt-4">
                  Explore The Technology
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <img src="/images/indoor-lab.png" alt="Farming lab" className="rounded-2xl shadow-2xl border-4 border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Successful Deliveries" },
              { number: "100+", label: "Farming Consultations" },
              { number: "100%", label: "Quality Tested" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-sans font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">Let's Grow Purity Together</h2>
            <p className="text-lg text-muted-foreground font-sans mb-10">
              Whether you want to try our premium products or consult us for indoor farming setups, we're just a call away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919671496386">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base shadow-lg gap-2">
                  <PhoneCall className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/919671496386" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8 h-14 text-base shadow-lg gap-2">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
