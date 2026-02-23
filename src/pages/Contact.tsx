import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/siteConfig";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Build Your Dream Home Together
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Get in touch with our expert team for a free consultation.
                We're here to help you at every step of your construction journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="font-display text-2xl font-bold mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground text-sm">
                        {siteConfig.contact.address.line1},<br />
                        {siteConfig.contact.address.line2}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={siteConfig.contact.phoneDisplay}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-background">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">
                {siteConfig.fullName}
              </h3>
              <p className="text-muted-foreground">
                {siteConfig.contact.address.line2}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
