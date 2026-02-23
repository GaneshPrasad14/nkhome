import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

const reasons = [
  {
    title: "8+ Years of Expertise",
    description: "Trusted experience in construction industry with proven track record",
  },
  {
    title: "Budget Friendly",
    description: "Quality construction at competitive prices without compromising quality",
  },
  {
    title: "On-Time Delivery",
    description: "We ensure timely completion of projects as per schedule",
  },
  {
    title: "Quality Materials",
    description: "We use only premium quality materials for lasting durability",
  },
  {
    title: "Expert Team",
    description: "Skilled architects, engineers, and craftsmen at your service",
  },
  {
    title: "End-to-End Support",
    description: "From design to handover, we support you throughout the journey",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <ScrollAnimation animation="fade-right">
            <div>
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Our Most Popular Construction Services For You
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-8">
                We NK Homes PVT Ltd, is a pioneer in the construction industry. That's why
                people choose us for their dream build in a reliable and budget-friendly way.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Right Column - Reasons */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div
                  className="p-6 border border-background/10 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Check className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-background/60 text-sm">
                    {reason.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
