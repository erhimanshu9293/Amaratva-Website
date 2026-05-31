import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  // Farming Lab - Indoor
  { id: 1, src: "/saffron-flowers-rack.jpg", category: "Farming Lab", title: "Saffron Blooms in Full Glory — Indoor Rack Farming" },
  { id: 2, src: "/farm-lab-founders.jpg", category: "Farming Lab", title: "Naveen & Parveen — Aeroponic Saffron Lab" },
  { id: 3, src: "/founders-wooden-farm.jpg", category: "Farming Lab", title: "Founders Harvesting Saffron Flowers Indoors" },
  { id: 4, src: "/saffron-harvest-indoor.jpg", category: "Farming Lab", title: "Hand-Picking Freshly Bloomed Saffron Flowers" },
  { id: 5, src: "/farm-lab-naveen.jpg", category: "Farming Lab", title: "Naveen with Freshly Harvested Saffron" },
  { id: 6, src: "/farm-lab-parveen.jpg", category: "Farming Lab", title: "Parveen at the Indoor Aeroponic Facility" },
  { id: 7, src: "/naveen-with-flowers.jpg", category: "Farming Lab", title: "Saffron Corms in Full Bloom — Close View" },
  { id: 8, src: "/naveen-with-corms.jpg", category: "Farming Lab", title: "Saffron Corms with Products at the Office" },
  { id: 9, src: "/saffron-corm-closeup.jpg", category: "Farming Lab", title: "Crocus Sativus Corm — Ready to Bloom" },
  // Field Visits
  { id: 10, src: "/saffron-field-harvest.jpg", category: "Field Visits", title: "Hand-Picking Saffron Flowers from the Field" },
  { id: 11, src: "/founders-outdoor-sourcing.jpg", category: "Field Visits", title: "Founders on a Saffron Sourcing Trip" },
  { id: 12, src: "/founders-planting.jpg", category: "Field Visits", title: "Founders Planting Saffron Corms in the Ground" },
  // Products
  { id: 13, src: "/product-kesar-pure.jpg", category: "Products", title: "Pure Kesar — Premium 1g Amaratva Saffron" },
  { id: 14, src: "/product-saffron-water-ad.jpg", category: "Products", title: "Saffron Water — Luxury Hydrating Mist" },
  { id: 15, src: "/product-nector5-ad.jpg", category: "Products", title: "Nector-5 — Mix Herb Liquid Extract" },
  { id: 16, src: "/product-kesar-water-ad.jpg", category: "Products", title: "Kesar Distilled Water — Pure as Nature" },
  { id: 17, src: "/products-catalog.jpg", category: "Products", title: "Amaratva Agro — Premium Product Catalog" },
  { id: 18, src: "/product-tincture-bottle.jpg", category: "Products", title: "Tincture of Saffron — 30ml Dropper" },
  { id: 19, src: "/product-tincture-box.jpg", category: "Products", title: "Tincture of Saffron — Signature Gift Box" },
  { id: 20, src: "/product-kesar-honey.jpg", category: "Products", title: "Kesar + Honey — Glass Jar with Gift Box" },
  { id: 21, src: "/product-nector5.jpg", category: "Products", title: "Nector-5 — Handcrafted Jute Gift Bag" },
  // Awards & Press
  { id: 22, src: "/founders-award-ceremony.jpg", category: "Awards & Press", title: "Founders Receiving Certificate at International Saffron Conference, Srinagar" },
  { id: 23, src: "/founders-with-products.jpg", category: "Awards & Press", title: "Founder Showcasing Full Amaratva Product Range" },
  { id: 24, src: "/press-coverage-1.jpg", category: "Awards & Press", title: "Hisar Newspaper — Praveen & Naveen Sindhu Honoured" },
  { id: 25, src: "/press-coverage-2.jpg", category: "Awards & Press", title: "Hisar Union — Yuva Kisan Sammanit" },
];

const categories = ["All", "Farming Lab", "Field Visits", "Products", "Awards & Press"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeTab === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-accent mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            A visual journey through our indoor farms, premium products, and corporate events.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
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

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <Maximize2 className="w-8 h-8 mb-3" />
                    <h4 className="font-serif font-bold text-xl text-center">{img.title}</h4>
                    <p className="font-sans text-sm text-primary uppercase tracking-wider mt-2">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-serif font-bold text-2xl">{selectedImage.title}</h3>
                <p className="text-primary font-sans text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
