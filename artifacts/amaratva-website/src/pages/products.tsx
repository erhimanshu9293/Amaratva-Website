import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { 
    id: "saffron-water", 
    title: "Saffron Water", 
    category: "Saffron Products", 
    img: "/images/saffron-water.png", 
    desc: "A pure, hydrating infusion combining pristine water with our premium indoor-farmed saffron threads." 
  },
  { 
    id: "tincture-of-saffron", 
    title: "Tincture of Saffron", 
    category: "Wellness Products", 
    img: "/images/saffron-tincture.png", 
    desc: "Highly concentrated saffron extract for maximum health benefits in a convenient liquid form." 
  },
  { 
    id: "kesar-honey", 
    title: "Kesar + Honey", 
    category: "Wellness Products", 
    img: "/images/kesar-honey.png", 
    desc: "Raw, organic honey infused with our finest saffron threads. A golden synergy of taste and immunity." 
  },
  { 
    id: "nector-5", 
    title: "Nector-5", 
    category: "Wellness Products", 
    img: "/images/nector-5.png", 
    desc: "A proprietary blend of 5 powerful natural ingredients formulated for holistic daily wellness." 
  },
  { 
    id: "indoor-setup", 
    title: "Indoor Farming Solutions", 
    category: "Indoor Farming", 
    img: "/images/indoor-lab.png", 
    desc: "Complete consultation and setup services for entrepreneurs looking to start aeroponic farming." 
  }
];

const categories = ["All", "Saffron Products", "Wellness Products", "Indoor Farming"];

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-accent mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Explore our range of premium, lab-tested products. Handcrafted with purity and powered by modern agricultural science.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-sans text-sm font-medium transition-colors border ${
                  activeTab === cat 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/products/${product.id}`}>
                  <Card className="overflow-hidden border border-border/50 group cursor-pointer hover:border-primary/50 transition-colors h-full flex flex-col hover:shadow-xl">
                    <div className="relative overflow-hidden aspect-square bg-card p-6">
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col flex-grow text-center bg-white border-t border-border/50">
                      <span className="text-xs font-sans text-primary uppercase tracking-widest mb-2">{product.category}</span>
                      <h4 className="text-2xl font-serif font-bold mb-3">{product.title}</h4>
                      <p className="text-sm text-muted-foreground font-sans mb-6 flex-grow">{product.desc}</p>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-md">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
