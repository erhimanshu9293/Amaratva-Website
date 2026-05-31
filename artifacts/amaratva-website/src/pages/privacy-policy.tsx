import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans uppercase tracking-widest text-sm font-semibold mb-3">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Privacy Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans">Last updated: May 2025</motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Privacy Policy</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none">
          <div className="space-y-10 font-sans text-foreground/80 leading-relaxed">

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">1. Introduction</h2>
              <p>Amaratva Agro Pvt. Ltd. ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.</p>
              <p className="mt-3">Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and postal address when you fill out our contact or inquiry forms.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Communication Data:</strong> Messages or inquiries you send to us via contact forms or WhatsApp.</li>
                <li><strong>Device Information:</strong> Information about the device you use to access our website.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill product orders and consultations</li>
                <li>Send you information about our products, offers, and services (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Detect and prevent fraud or unauthorized activity</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">4. Sharing Your Information</h2>
              <p className="mb-3">We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and conducting our business (e.g., logistics and delivery partners).</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">6. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain parts of our website.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent to data processing at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us at <a href="mailto:info@amaratva.com" className="text-primary hover:underline">info@amaratva.com</a>.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">9. Changes to This Policy</h2>
              <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
