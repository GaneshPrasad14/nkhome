import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVilla1 from "@/assets/hero-villa-1.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <ScrollAnimation animation="fade-right">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroVilla1}
                  alt="NK Homes Project"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-primary/20 -z-0" />
              <div className="absolute top-8 -left-8 w-32 h-32 bg-primary/10 -z-0" />

              {/* Stats Badge */}
              <div className="absolute -bottom-12 left-8 bg-primary text-primary-foreground p-8 z-20">
                <span className="text-5xl font-display font-bold">8+</span>
                <span className="block text-sm mt-1 text-primary-foreground/80">Years of Excellence</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content Column */}
          <div className="lg:pl-8">
            <ScrollAnimation animation="fade-left" delay={100}>
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title mb-6">
                NK Homes PVT Ltd
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                NeelaKandeswarar Homes PVT Ltd is an 8+ years expertise Construction company
                in Coimbatore. We are specialized in Individual Homes, Villas/Farm house,
                Traditional House, Contemporary Homes, Luxury House, Renovated Homes,
                Commercial Buildings, Interior Design, and Architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us
                one of the most trusted construction companies in Coimbatore. We believe in
                turning your dream home into reality with precision and care.
              </p>
            </ScrollAnimation>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "100+", label: "Happy Families" },
                { number: "50+", label: "Expert Team" },
                { number: "8+", label: "Years Experience" },
              ].map((stat, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={200 + (index * 50)}>
                  <div className="border-l-2 border-primary pl-4">
                    <span className="text-3xl font-display font-bold text-primary">
                      {stat.number}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fade-up" delay={400}>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
