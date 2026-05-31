import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Truck, Package, Clock, MapPin } from "lucide-react";

const highlights = [
  { icon: Truck, label: "Free Shipping", desc: "On all orders above ₹999" },
  { icon: Clock, label: "Processing Time", desc: "1–2 business days" },
  { icon: Package, label: "Delivery Time", desc: "4–7 business days across India" },
  { icon: MapPin, label: "Pan India Delivery", desc: "Shipped from Hisar, Haryana" },
];

export default function ShippingPolicy() {
  return (
    <div className="pt-20 pb-24 bg-background min-h-screen">
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans uppercase tracking-widest text-sm font-semibold mb-3">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Shipping Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans">Last updated: May 2025</motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Shipping Policy</span>
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
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">1. Order Processing</h2>
              <p className="mb-3">Once your order inquiry is confirmed and payment is received, we typically process and dispatch orders within <strong>1–2 business days</strong> (Monday through Saturday, excluding public holidays).</p>
              <p>Orders placed after 3:00 PM IST may be processed the following business day. You will receive a confirmation message with tracking details once your order is dispatched.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">2. Delivery Timelines</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 font-semibold text-accent rounded-tl-lg">Region</th>
                      <th className="text-left p-3 font-semibold text-accent">Estimated Delivery</th>
                      <th className="text-left p-3 font-semibold text-accent rounded-tr-lg">Shipping Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Haryana & NCR", "2–3 Business Days", "Delhivery / India Post"],
                      ["North India", "3–5 Business Days", "Delhivery / DTDC"],
                      ["Rest of India", "5–7 Business Days", "Delhivery / BlueDart"],
                      ["Remote Areas", "7–10 Business Days", "India Post"],
                    ].map(([region, time, partner], i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="p-3">{region}</td>
                        <td className="p-3 text-primary font-medium">{time}</td>
                        <td className="p-3 text-muted-foreground">{partner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Delivery timelines are estimates and may vary due to courier delays, weather conditions, or peak seasons.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">3. Shipping Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Free Shipping:</strong> On all orders above ₹999.</li>
                <li><strong>Standard Shipping:</strong> ₹60–₹120 for orders below ₹999, depending on delivery location and weight.</li>
                <li>Shipping charges are calculated and confirmed at the time of order processing.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">4. Order Tracking</h2>
              <p>Once dispatched, we will share an AWB (Air Waybill) number or tracking link via WhatsApp or SMS. You can track your shipment directly on the courier partner's website or app.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">5. Packaging</h2>
              <p>All Amaratva Agro products are packed with care in tamper-proof, protective packaging to ensure they arrive in perfect condition. Fragile products such as glass bottles are bubble-wrapped and secured before dispatch. Our packaging is designed to reflect the premium quality of the products inside.</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">6. Delivery Issues</h2>
              <p className="mb-3">If your order is delayed beyond the estimated timeline, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WhatsApp / Call: <a href="tel:+919671496386" className="text-primary hover:underline">+91 9671496386</a> (Naveen)</li>
                <li>Email: <a href="mailto:info@amaratva.com" className="text-primary hover:underline">info@amaratva.com</a></li>
              </ul>
              <p className="mt-3">We are not liable for delays caused by the courier partner, incorrect addresses, or unforeseen circumstances (natural disasters, strikes, etc.).</p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-serif font-bold text-accent mb-4">7. Undelivered Packages</h2>
              <p>If a package is returned to us due to an incorrect or incomplete address, failed delivery attempts, or the recipient being unavailable, we will contact you to arrange re-delivery. Additional shipping charges may apply for re-dispatch.</p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
