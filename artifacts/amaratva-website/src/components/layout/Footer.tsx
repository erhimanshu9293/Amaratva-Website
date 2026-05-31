import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const logoUrl = "/amaratva-logo.png";

  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img src={logoUrl} alt="Amaratva Agro Logo" className="h-14 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none">Amaratva</span>
                <span className="text-xs font-sans uppercase tracking-widest text-primary-foreground/80">A Range of Purity</span>
              </div>
            </Link>
            <p className="font-sans text-accent-foreground/80 text-sm leading-relaxed mt-2">
              India's trusted indoor saffron farming and premium wellness brand. We combine ancient wisdom with modern aeroponics to deliver purity straight to you.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/amaratvaofficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaYoutube size={18} />
              </a>
              <a href="https://wa.me/919671496386" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-accent-foreground/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/indoor-farming" className="hover:text-primary transition-colors">Indoor Farming</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-accent-foreground/80">
              <li><Link href="/products/saffron-water" className="hover:text-primary transition-colors">Saffron Water</Link></li>
              <li><Link href="/products/tincture-of-saffron" className="hover:text-primary transition-colors">Tincture of Saffron</Link></li>
              <li><Link href="/products/kesar-honey" className="hover:text-primary transition-colors">Kesar + Honey</Link></li>
              <li><Link href="/products/nector-5" className="hover:text-primary transition-colors">Nector-5</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors mt-2 text-primary font-medium">View All Products &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-accent-foreground/80">
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+919671496386" className="hover:text-primary transition-colors">+91 9671496386 (Naveen)</a>
                  <a href="tel:+919468162388" className="hover:text-primary transition-colors">+91 9468162388 (Parveen)</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@amaratva.com" className="hover:text-primary transition-colors">info@amaratva.com</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Lab:</strong> 522 Krishna Nagar Railway Road, Camp Chowk, Near Lazeez Vatika, Hisar - 125001
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 font-sans text-sm text-accent-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Amaratva Agro Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
