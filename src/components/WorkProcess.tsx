import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Get an Idea",
    description: "Construction starts with a basic idea - what you need and how to execute it.",
  },
  {
    number: "02",
    title: "Expert Consultation",
    description: "Once you have an idea but don't know how to execute it, get our expert consultation.",
  },
  {
    number: "03",
    title: "Build Your Dream",
    description: "Finally, start building your dream project end-to-end with our expert support.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-up">
            <span className="section-subtitle">Work Progress</span>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="section-title mb-6">
              We Make Build/Maintain Property Easier
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we build or maintain the property in an easy and simple way is our
              secret of success in the competitive industry.
            </p>
          </ScrollAnimation>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 150} className="h-full">
              <div
                className="relative bg-background p-8 group hover:shadow-xl transition-shadow h-full"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                )}

                {/* Step Number */}
                <span className="text-8xl font-display font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 font-display font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up" delay={400} className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WorkProcess;
