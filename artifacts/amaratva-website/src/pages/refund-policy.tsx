import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, RefreshCw, ShieldCheck, AlertCircle, Phone } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Quality Guaranteed", desc: "100% authentic products" },
  { icon: RefreshCw, label: "Easy Returns", desc: "Within 7 days of delivery" },
  { icon: AlertCircle, label: "Damaged Items", desc: "Full replacement or refund" },
  { icon: Phone, label: "Quick Support", desc: "Reach us within 24 hours" },
];

export default function RefundPolicy() {
  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans uppercase tracking-widest text-sm font-semibold mb-3">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Refund & Return Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans">Last updated: May 2025</motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Refund & Return Policy</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-card rounded-2xl p-6 border border-border/50 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif font-bold text-accent text-sm">{label}</p>
                <p className="font-sans text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10 font-sans text-foreground/80 leading-relaxed">

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">1. Our Commitment</h2>
              <p>At Amaratva Agro Pvt. Ltd., we stand behind the quality of every product we sell. We are committed to ensuring your complete satisfaction. If you are not satisfied with your purchase, we will do our best to make it right.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">2. Eligibility for Returns</h2>
              <p className="mb-3">You may request a return or replacement within <strong>7 days of delivery</strong> under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The product received is damaged, broken, or leaking</li>
                <li>The product received is different from what was ordered</li>
                <li>The product is expired or has a manufacturing defect</li>
                <li>The product seal is broken upon arrival (when it should be sealed)</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">3. Non-Returnable Items</h2>
              <p className="mb-3">The following items are not eligible for return:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Products that have been opened and partially used (unless damaged/defective)</li>
                <li>Products returned after 7 days of delivery</li>
                <li>Products damaged due to improper use or storage by the customer</li>
                <li>Indoor Farming Consultation services once rendered</li>
                <li>Customized or bulk orders (unless defective)</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">4. How to Initiate a Return</h2>
              <p className="mb-4">To initiate a return or exchange, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Contact us within 7 days of receiving your order via WhatsApp (<a href="https://wa.me/919671496386" className="text-primary hover:underline">+91 9671496386</a>) or email (<a href="mailto:info@amaratva.com" className="text-primary hover:underline">info@amaratva.com</a>).</li>
                <li>Share your order details, including the product name, quantity, and a brief description of the issue.</li>
                <li>Attach clear photographs or a short video of the damaged/incorrect product.</li>
                <li>Our team will review your request within <strong>1–2 business days</strong> and confirm the return authorization.</li>
                <li>Pack the product securely in its original packaging (if available) and ship it to our lab address.</li>
              </ol>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">5. Refund Process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Once we receive and inspect the returned product, we will notify you of the approval or rejection of your refund.</li>
                <li>Approved refunds are processed within <strong>5–7 business days</strong> to your original payment method or via bank transfer/UPI.</li>
                <li>Replacement shipments are dispatched within 3 business days of return inspection approval.</li>
                <li>Shipping charges for the original order are non-refundable, unless the error was on our part.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">6. Return Shipping Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Defective or wrong product:</strong> We will cover the return shipping cost.</li>
                <li><strong>Change of mind or other reasons:</strong> Return shipping is at the customer's expense.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">7. Cancellations</h2>
              <p className="mb-3">Order cancellations may be requested under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation requests must be made <strong>within 12 hours of placing the order</strong>, before dispatch.</li>
                <li>Once an order has been dispatched, it cannot be cancelled. Please use the return process instead.</li>
                <li>To cancel an order, contact us immediately via WhatsApp or phone.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">8. Contact for Returns & Refunds</h2>
              <p>Our dedicated support team is here to help:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Naveen:</strong> <a href="tel:+919671496386" className="text-primary hover:underline">+91 9671496386</a></p>
                <p><strong>Parveen:</strong> <a href="tel:+919468162388" className="text-primary hover:underline">+91 9468162388</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@amaratva.com" className="text-primary hover:underline">info@amaratva.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/919671496386" className="text-primary hover:underline">Chat on WhatsApp</a></p>
                <p className="mt-3 text-sm text-muted-foreground">Support hours: Monday – Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
