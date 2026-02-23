import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

const CTASection = () => {
  return (
    <section className="cta-section py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Get in touch with our expert team today and let's start planning
              your perfect home together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8"
              asChild
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
