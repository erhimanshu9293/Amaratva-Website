import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/saffron-field.png", category: "Products", title: "Golden Saffron Threads" },
  { id: 2, src: "/images/indoor-lab.png", category: "Farming Lab", title: "Aeroponic Setup" },
  { id: 3, src: "/images/saffron-water.png", category: "Products", title: "Saffron Water Bottle" },
  { id: 4, src: "/images/saffron-tincture.png", category: "Products", title: "Tincture Extract" },
  { id: 5, src: "/images/kesar-honey.png", category: "Products", title: "Kesar Honey Jar" },
  { id: 6, src: "/images/nector-5.png", category: "Products", title: "Nector-5 Supplements" },
  { id: 7, src: "/images/consultation.png", category: "Events", title: "Client Consultation" },
  { id: 8, src: "/images/indoor-lab.png", category: "Infrastructure", title: "Lab Lighting Tech" },
];

const categories = ["All", "Products", "Farming Lab", "Infrastructure", "Events"];

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
