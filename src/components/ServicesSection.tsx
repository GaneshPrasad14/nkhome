import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceVilla from "@/assets/service-villa.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceRowhouse from "@/assets/service-rowhouse.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

const services = [
  {
    id: "01",
    image: serviceConstruction,
    title: "Individual Homes",
    description: "Custom-designed homes tailored to your lifestyle and preferences.",
  },
  {
    id: "02",
    image: serviceVilla,
    title: "Farm & Villas",
    description: "Luxurious retreats and farmhouses with premium amenities.",
  },
  {
    id: "03",
    image: serviceInterior,
    title: "Interior Design",
    description: "Masterpiece interiors that form the soul of your home.",
  },
  {
    id: "04",
    image: serviceRowhouse,
    title: "Row Houses",
    description: "Modern community living with smart space utilization.",
  },
  {
    id: "05",
    image: serviceCommercial,
    title: "Commercial",
    description: "State-of-the-art commercial spaces and office complexes.",
  },
  {
    id: "06",
    image: serviceRenovation,
    title: "Renovation",
    description: "Transforming existing spaces with modern upgrades.",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <ScrollAnimation animation="fade-right">
              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Our Expertise
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting Excellence <br />
                <span className="text-foreground/80">In Every Detail</span>
              </h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-left">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "relative group overflow-hidden rounded-xl transition-all duration-700 ease-out cursor-pointer",
                "w-full h-[300px] lg:h-auto", // Mobile: w-full fixed height. Desktop: auto height
                activeIndex === index ? "lg:flex-[3]" : "lg:flex-1 grayscale hover:grayscale-0"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-1000",
                    activeIndex === index ? "scale-110" : "scale-100"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
                  activeIndex === index ? "from-black/90 via-black/40 to-transparent opacity-90" : "from-black/80 to-transparent opacity-80"
                )} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                {/* Number */}
                <span className={cn(
                  "font-display text-4xl lg:text-5xl font-bold text-white/20 mb-auto transition-all duration-500",
                  activeIndex === index ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 lg:opacity-100 lg:translate-y-0"
                )}>
                  {service.id}
                </span>

                {/* Title & Desc */}
                <div className="relative z-10 transform transition-all duration-500">
                  <h3 className={cn(
                    "font-display text-2xl lg:text-3xl font-bold text-white mb-2 transition-all duration-300",
                    activeIndex !== index && "lg:opacity-70"
                  )}>
                    {service.title}
                  </h3>

                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                  )}>
                    <p className="text-white/80 text-sm lg:text-base mb-6 max-w-md">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase hover:text-white transition-colors"
                    >
                      Explore Service <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
          <Button asChild variant="outline">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
