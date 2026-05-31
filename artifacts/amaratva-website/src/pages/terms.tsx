import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans uppercase tracking-widest text-sm font-semibold mb-3">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Terms of Service</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans">Last updated: May 2025</motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Terms of Service</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="space-y-10 font-sans text-foreground/80 leading-relaxed">

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the website of Amaratva Agro Pvt. Ltd. ("Company", "we", "us", or "our"), you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">2. Products and Services</h2>
              <p className="mb-3">Amaratva Agro Pvt. Ltd. offers the following products and services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Premium saffron wellness products (Saffron Water, Tincture of Saffron, Kesar + Honey, Nector-5)</li>
                <li>Indoor aeroponic saffron farming consultation and setup</li>
                <li>Saffron processing and supply</li>
              </ul>
              <p className="mt-3">All products are subject to availability. We reserve the right to discontinue any product at any time without notice.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">3. Health Disclaimer</h2>
              <p className="mb-3">Our wellness products are not intended to diagnose, treat, cure, or prevent any disease or health condition. The information provided on this website is for general educational and informational purposes only and is not a substitute for professional medical advice.</p>
              <p>Always consult a qualified healthcare professional before using any supplement, especially if you are pregnant, nursing, have a medical condition, or are taking prescription medication. Individual results may vary.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">4. Ordering and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orders placed through our inquiry forms are subject to confirmation by our team.</li>
                <li>Prices are listed in Indian Rupees (INR) and are subject to change without prior notice.</li>
                <li>Payment terms will be communicated at the time of order confirmation.</li>
                <li>We reserve the right to refuse or cancel any order at our discretion.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">5. Intellectual Property</h2>
              <p>All content on this website — including text, images, graphics, logos, brand names, and product designs — is the intellectual property of Amaratva Agro Pvt. Ltd. and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">6. User Conduct</h2>
              <p className="mb-3">When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the site for any unlawful purpose or in violation of applicable regulations</li>
                <li>Attempt to gain unauthorized access to any portion of our website or systems</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>Impersonate any person or entity</li>
                <li>Use automated tools to scrape or harvest data from our website</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Amaratva Agro Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Our total liability shall not exceed the amount paid by you for the specific product or service in question.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">8. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hisar, Haryana, India.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">9. Modifications</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Continued use of the website after any changes constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">10. Contact Us</h2>
              <p>For any questions regarding these Terms of Service, please contact us:</p>
              <div className="mt-4 space-y-1">
                <p><strong>Amaratva Agro Pvt. Ltd.</strong></p>
                <p>141, Professor Colony, Azad Nagar, Hisar, Haryana - 125001</p>
                <p>Phone: <a href="tel:+919671496386" className="text-primary hover:underline">+91 9671496386</a></p>
                <p>Email: <a href="mailto:info@amaratva.com" className="text-primary hover:underline">info@amaratva.com</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
