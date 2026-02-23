import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceVilla from "@/assets/service-villa.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceRowhouse from "@/assets/service-rowhouse.jpg";
import CTASection from "@/components/CTASection";

const services = [
  {
    id: "individual-homes",
    image: serviceConstruction,
    title: "Individual Homes",
    description: "Custom-designed homes tailored to your lifestyle and preferences. We build your dream home from the ground up with attention to every detail.",
    features: [
      "Custom architectural design",
      "Premium quality materials",
      "Vastu compliance",
      "Modern amenities",
      "Energy efficient construction",
    ],
  },
  {
    id: "villa-farmhouse",
    image: serviceVilla,
    title: "Villa & Farm House",
    description: "Luxurious villas and farmhouses with premium amenities. Experience the perfect blend of nature and modern living.",
    features: [
      "Sprawling landscapes",
      "Private swimming pool options",
      "Outdoor entertainment areas",
      "Premium interiors",
      "Sustainable construction",
    ],
  },
  {
    id: "interior-design",
    image: serviceInterior,
    title: "Interior Design",
    description: "Transform your space with our masterpiece interior designs. We create interiors that reflect your personality and lifestyle.",
    features: [
      "Space planning & optimization",
      "Custom furniture design",
      "Lighting solutions",
      "Material selection",
      "3D visualization",
    ],
  },
  {
    id: "row-houses",
    image: serviceRowhouse,
    title: "Row Houses",
    description: "Modern row houses with smart space utilization. Perfect for families looking for community living with privacy.",
    features: [
      "Smart space utilization",
      "Community amenities",
      "Modern architecture",
      "Affordable luxury",
      "Gated community benefits",
    ],
  },
  {
    id: "commercial",
    image: serviceCommercial,
    title: "Commercial Buildings",
    description: "State-of-the-art commercial buildings designed for success. We create spaces that inspire productivity and growth.",
    features: [
      "Office complexes",
      "Retail spaces",
      "Industrial buildings",
      "Healthcare facilities",
      "Educational institutions",
    ],
  },
  {
    id: "renovation",
    image: serviceRenovation,
    title: "Renovation Projects",
    description: "Transform your existing space with modern upgrades. Give your property a fresh new look while maintaining its character.",
    features: [
      "Complete home makeover",
      "Kitchen & bathroom remodeling",
      "Structural modifications",
      "Modern upgrades",
      "Heritage restoration",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Construction Services & Interior Design
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                At NK Homes PVT Ltd, we are committed to delivering top-quality construction 
                services that exceed our clients' expectations. Our team combines years of 
                industry experience, innovative solutions, and a passion for excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
