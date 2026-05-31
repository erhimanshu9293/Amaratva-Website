import { useState } from "react";
import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronRight, Droplets, FlaskConical, Beaker } from "lucide-react";
import { Link } from "wouter";

const productsData = {
  "saffron-water": {
    title: "Saffron Water",
    subtitle: "Pure Hydration with Golden Essence",
    images: ["/images/saffron-water.png"],
    price: "₹899",
    size: "500ml",
    desc: "Experience the delicate aroma and health benefits of pure indoor-farmed saffron infused in pristine mineral water. Refreshing, hydrating, and naturally rich in antioxidants.",
    benefits: [
      "Naturally rich in antioxidants",
      "Promotes glowing, healthy skin",
      "Aids in digestion and gut health",
      "Natural mood elevator"
    ],
    ingredients: "Purified Water, Pure Indoor-Farmed Saffron Extract.",
    usage: "Consume 50ml daily on an empty stomach or mix with your favorite beverages."
  },
  "tincture-of-saffron": {
    title: "Tincture of Saffron",
    subtitle: "Concentrated Golden Wellness — Net Volume 30ml",
    images: ["/product-tincture-bottle.jpg", "/product-tincture-box.jpg"],
    price: "₹1,499",
    size: "30ml",
    desc: "A highly concentrated liquid extract of our finest indoor-grown saffron. Presented in a signature orange gift box with a premium gold-capped dropper bottle — perfect for adding a powerful dose of wellness to your daily routine with just a few drops.",
    benefits: [
      "Supports emotional well-being and mood",
      "May help reduce PMS symptoms naturally",
      "Potent anti-inflammatory properties",
      "Enhances memory and cognitive function",
      "Promotes glowing, radiant skin",
      "Powerful antioxidant protection"
    ],
    ingredients: "Pure Saffron Extract (Crocus sativus), Food-grade Glycerin, Purified Water.",
    usage: "Add 5-10 drops to water, tea, or warm milk once or twice daily. Shake gently before use."
  },
  "kesar-honey": {
    title: "Kesar + Honey",
    subtitle: "With Goodness of Pure Kesar & Natural Honey — Net Weight 30g",
    images: ["/product-kesar-honey.jpg"],
    price: "₹1,299",
    size: "30g",
    desc: "Raw, natural honey infused with premium indoor-farmed saffron threads. Presented in an elegant glass jar in a signature white and gold gift box — a golden synergy of taste, immunity, and purity.",
    benefits: [
      "Excellent natural immunity booster",
      "Soothes sore throats and coughs",
      "Rich source of vitamins and minerals",
      "Provides sustained natural energy",
      "Anti-bacterial and anti-inflammatory",
      "Natural skin brightening properties"
    ],
    ingredients: "Pure Natural Honey, Indoor-Farmed Saffron Threads (Crocus sativus).",
    usage: "Take one teaspoon daily, either directly or dissolved in warm (not hot) water or milk. Best on an empty stomach."
  },
  "nector-5": {
    title: "Nector-5",
    subtitle: "A Mix Herb Liquid Extract — 10ml",
    images: ["/product-nector5.jpg"],
    price: "₹1,999",
    size: "10ml",
    desc: "A powerful proprietary Mix Herb Liquid Extract — a blend of five potent natural adaptogens and botanicals. Presented in a premium 10ml dropper bottle with a signature handcrafted jute gift bag. Formulated to support holistic vitality, stamina, immunity, and mental performance.",
    benefits: [
      "Libido booster and vitality enhancer",
      "Strengthens immunity naturally",
      "Manages stress and anxiety effectively",
      "Reduces stress-related inflammation",
      "Releases stamina and endurance",
      "Supports stamina and faster recovery"
    ],
    ingredients: "Proprietary blend of 5 mixed herbal extracts including adaptogenic botanicals. 100% natural, vegan-friendly.",
    usage: "Take 5-10 drops directly or in warm water once or twice daily, preferably with meals. Consult your healthcare provider before use."
  }
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData[slug as keyof typeof productsData];
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link href="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 border-b border-border mb-12">
        <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Main Image */}
            <div className="bg-card rounded-2xl p-6 lg:p-10 flex items-center justify-center border border-border overflow-hidden" style={{ minHeight: 380 }}>
              <motion.img
                key={activeImg}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={product.images[activeImg]}
                alt={product.title}
                className="max-w-full h-auto object-cover rounded-xl max-h-[420px] drop-shadow-2xl"
              />
            </div>
            {/* Thumbnails — only shown when more than 1 image */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      activeImg === i ? "border-primary shadow-md scale-105" : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.title} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-primary font-sans uppercase tracking-widest text-sm font-bold mb-2">Premium Wellness</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">{product.title}</h1>
            <p className="text-xl text-muted-foreground font-sans mb-6">{product.subtitle}</p>
            
            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-border">
              <span className="text-3xl font-serif font-bold text-accent">{product.price}</span>
              <span className="text-muted-foreground font-sans">/ {product.size}</span>
            </div>

            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-8">
              {product.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-sans text-sm font-medium">100% Pure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-sans text-sm font-medium">Lab Tested</span>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-base px-10">
              Inquire Now
            </Button>
          </motion.div>
        </div>

        {/* Product Details Tabs / Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" /> Key Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></span>
                    <span className="font-sans text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Beaker className="text-primary w-6 h-6" /> Ingredients & Usage
              </h3>
              <div className="bg-card p-8 rounded-2xl border border-border/50 space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Ingredients</h4>
                  <p className="font-sans text-muted-foreground leading-relaxed">{product.ingredients}</p>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Recommended Usage</h4>
                  <p className="font-sans text-muted-foreground leading-relaxed">{product.usage}</p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-accent text-white p-8 rounded-2xl sticky top-28 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-2">Interested?</h3>
              <p className="font-sans text-white/80 text-sm mb-6">Leave your details and our team will get back to you regarding wholesale or retail inquiries.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" placeholder="I am interested in..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary min-h-[100px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
