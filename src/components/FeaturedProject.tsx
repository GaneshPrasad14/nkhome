import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/project-villa-gandhipuram.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

const FeaturedProject = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <ScrollAnimation animation="fade-right">
              <span className="section-subtitle">Featured Project</span>
              <h2 className="section-title mb-6">
                Modern Contemporary Villa For Sale At Gandhipuram
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Decide now or it's too late to buy your feature-rich Villa near
                Gandhipuram Bus Terminal. It has fully furnished and ready to move immediately.
              </p>
            </ScrollAnimation>
            <ul className="space-y-3 mb-8">
              {[
                "Premium location near Gandhipuram Bus Terminal",
                "Fully furnished with modern amenities",
                "Ready to move immediately",
                "Contemporary architectural design",
                "Spacious living areas with natural lighting",
              ].map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={200 + (index * 50)}>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Enquire Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Image */}
          <ScrollAnimation animation="scale-in" className="order-1 lg:order-2 h-full">
            <div className="relative h-full">
              <img
                src={villaImage}
                alt="Modern Villa at Gandhipuram"
                className="w-full h-[300px] lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2">
                <span className="font-medium">For Sale</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-6 hidden md:block">
                <span className="text-3xl font-display font-bold">Ready to</span>
                <span className="block text-primary text-xl">Move In</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
