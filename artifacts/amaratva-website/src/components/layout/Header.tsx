import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Indoor Farming", path: "/indoor-farming" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location === "/";
  const headerBg = isScrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColor = isScrolled || !isHome ? "text-foreground" : "text-white";
  const logoUrl = "/amaratva-logo.png";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src={logoUrl} alt="Amaratva Agro Logo" className="h-12 w-auto object-contain" />
          <div className={`hidden sm:flex flex-col ${textColor}`}>
            <span className="font-serif font-bold text-xl leading-none">Amaratva</span>
            <span className="text-xs font-sans uppercase tracking-widest opacity-80">A Range of Purity</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : textColor
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 gap-2">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block py-3 px-4 font-sans text-base font-medium rounded-md ${
                    location === link.path ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border px-4 pb-2">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Call Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
