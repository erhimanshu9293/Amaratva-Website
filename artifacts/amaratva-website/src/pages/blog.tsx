import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Aeroponic Saffron Farming",
    excerpt: "Discover how omitting soil and utilizing nutrient mists creates a cleaner, more potent saffron yield compared to traditional methods.",
    category: "Technology",
    date: "Oct 15, 2024",
    img: "/images/indoor-lab.png",
    featured: true
  },
  {
    id: 2,
    title: "5 Hidden Health Benefits of Saffron Water",
    excerpt: "From skin radiance to mood elevation, saffron water is the ancient wellness secret you need in your daily routine.",
    category: "Wellness",
    date: "Sep 28, 2024",
    img: "/images/saffron-water.png",
    featured: false
  },
  {
    id: 3,
    title: "Identifying Authentic Saffron: A Buyer's Guide",
    excerpt: "With so much adulterated saffron on the market, learn the simple tests to ensure you are buying pure Crocus sativus.",
    category: "Education",
    date: "Sep 10, 2024",
    img: "/images/saffron-field.png",
    featured: false
  },
  {
    id: 4,
    title: "Why Kesar and Honey is the Ultimate Immunity Booster",
    excerpt: "Exploring the synergistic effects of raw honey and premium saffron for combating seasonal illness.",
    category: "Nutrition",
    date: "Aug 22, 2024",
    img: "/images/kesar-honey.png",
    featured: false
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(p => !p.featured);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-accent mb-4"
          >
            Journal & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Thoughts, research, and news from the forefront of indoor agriculture and premium wellness.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Post */}
              <motion.div {...fadeInUp}>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Card className="overflow-hidden border border-border group cursor-pointer hover:shadow-xl transition-shadow">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <CardContent className="p-8 md:p-10 bg-white">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-sans uppercase tracking-widest text-sm font-bold">{featuredPost.category}</span>
                        <span className="text-muted-foreground font-sans text-sm">{featuredPost.date}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                      <p className="text-muted-foreground font-sans text-lg mb-6">{featuredPost.excerpt}</p>
                      <span className="inline-flex items-center text-primary font-sans font-semibold">
                        Read Article <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Grid of regular posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post, i) => (
                  <motion.div key={post.id} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                    <Link href={`/blog/${post.id}`}>
                      <Card className="overflow-hidden border border-border h-full flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="aspect-video overflow-hidden">
                          <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <CardContent className="p-6 bg-white flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-primary font-sans uppercase tracking-widest text-xs font-bold">{post.category}</span>
                            <span className="text-muted-foreground font-sans text-xs">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-muted-foreground font-sans text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                          <span className="inline-flex items-center text-primary font-sans font-semibold text-sm">
                            Read More <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="space-y-10">
              {/* Search */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-serif font-bold text-xl mb-4">Search</h3>
                <div className="relative">
                  <Input type="text" placeholder="Search articles..." className="pl-10 bg-white border-border" />
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-serif font-bold text-xl mb-4">Categories</h3>
                <ul className="space-y-3 font-sans">
                  {["Technology", "Wellness", "Nutrition", "Education", "Company News"].map((cat, i) => (
                    <li key={i}>
                      <Link href="#" className="text-muted-foreground hover:text-primary flex items-center justify-between transition-colors">
                        <span>{cat}</span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-serif font-bold text-xl mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(1,4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="group flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                        <span className="text-xs text-muted-foreground font-sans mt-1 block">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
