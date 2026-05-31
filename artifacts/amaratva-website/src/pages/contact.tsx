import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Map } from "lucide-react";

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Have a question about our products or interested in setting up your own indoor farm? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2">Call Us</h3>
                  <div className="flex flex-col gap-1 font-sans text-muted-foreground">
                    <a href="tel:+919671496386" className="hover:text-primary transition-colors">Naveen: +91 9671496386</a>
                    <a href="tel:+919468162388" className="hover:text-primary transition-colors">Parveen: +91 9468162388</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2">Email Us</h3>
                  <a href="mailto:info@amaratva.com" className="font-sans text-muted-foreground hover:text-primary transition-colors">
                    info@amaratva.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2">Visit Us</h3>
                  <div className="space-y-4 font-sans text-muted-foreground text-sm leading-relaxed">
                    <div>
                      <strong className="text-foreground block mb-1">Lab Address:</strong>
                      522 Krishna Nagar Railway Road,<br/>Camp Chowk, Near Lazeez Vatika,<br/>Hisar - 125001
                    </div>
                    <div>
                      <strong className="text-foreground block mb-1">Registered Address:</strong>
                      141, Professor Colony, Azad Nagar,<br/>Hisar, Haryana - 125001
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border h-full">
                <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">Send us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="bg-card" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-card" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Product Inquiry / Farming Consultation" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="bg-card min-h-[150px]" />
                  </div>
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-base">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          <Map className="w-16 h-16 mb-4 opacity-50" />
          <p className="font-sans font-medium">Interactive Google Map Placeholder</p>
          <p className="font-sans text-sm opacity-75">Hisar, Haryana - 125001</p>
        </div>
      </section>
    </div>
  );
}
