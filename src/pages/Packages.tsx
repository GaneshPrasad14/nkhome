import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import CTASection from "@/components/CTASection";

const packages = [
  {
    name: "Basic Package",
    priceRange: "₹1,650 - ₹1,800",
    unit: "per sq.ft",
    description: "Perfect for budget-conscious homeowners looking for quality construction",
    features: [
      "Standard architectural design",
      "Quality cement & bricks",
      "Basic electrical fittings",
      "Standard flooring tiles",
      "Basic plumbing fixtures",
      "White wash finish",
      "Standard doors & windows",
      "Basic safety features",
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    priceRange: "₹1,950 - ₹2,200",
    unit: "per sq.ft",
    description: "Ideal balance of quality and affordability for your dream home",
    features: [
      "Custom architectural design",
      "Premium cement & AAC blocks",
      "Branded electrical fittings",
      "Vitrified tiles flooring",
      "Premium plumbing fixtures (Jaquar/Parryware)",
      "Premium emulsion paint",
      "Teak wood doors & UPVC windows",
      "Complete safety features",
      "Basic interior design",
      "Modular kitchen (Basic)",
    ],
    popular: true,
  },
  {
    name: "Luxury Package",
    priceRange: "₹2,500 - ₹3,500",
    unit: "per sq.ft",
    description: "Premium construction with top-tier materials and finishes",
    features: [
      "Signature architectural design",
      "Ultra-premium materials",
      "High-end electrical (Legrand/Schneider)",
      "Imported marble/granite flooring",
      "Luxury plumbing (Grohe/Kohler)",
      "Designer wall textures & finishes",
      "Premium hardwood doors & windows",
      "Smart home automation ready",
      "Complete interior design",
      "Premium modular kitchen",
      "Landscaping included",
      "Swimming pool ready infrastructure",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Construction Packages
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Home Construction Packages
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Choose from our carefully crafted construction packages designed to
                suit every budget without compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative border ${pkg.popular ? "border-primary shadow-xl" : "border-border"
                    } p-8 bg-card`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-display font-bold text-primary">
                      {pkg.priceRange}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {pkg.unit}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 p-6 bg-background border-l-4 border-primary">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Prices may vary based on
                location, design complexity, and specific requirements. Contact us for a
                detailed estimate based on your needs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We understand every project is unique. Contact us for a customized
              package tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
