import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

const testimonials = [
  {
    content: "We loved NK Homes! The finished project is not only beautiful but also exactly what we hoped for. We give the project 5 out of 5 stars and strongly recommend them to everyone looking to build their dream home.",
    author: "Ramesh Kumar",
    role: "Individual Home, Peelamedu",
    rating: 5,
    projectType: "Individual Home",
    year: "2024",
  },
  {
    content: "NK Homes delivered our dream villa on time and within budget. Their attention to detail and quality of work is exceptional. The team was professional throughout the project. Highly recommended!",
    author: "Priya Venkatesh",
    role: "Villa Project, Karamadai",
    rating: 5,
    projectType: "Villa",
    year: "2023",
  },
  {
    content: "Professional team with excellent communication throughout the project. They transformed our old house into a modern contemporary home. Thank you NK Homes for making our renovation seamless!",
    author: "Suresh Babu",
    role: "Renovation, Saibaba Colony",
    rating: 5,
    projectType: "Renovation",
    year: "2023",
  },
  {
    content: "We were impressed by the quality of materials and craftsmanship. NK Homes built our traditional style home with all modern amenities. Their expertise in blending tradition with modernity is remarkable.",
    author: "Lakshmi Narayanan",
    role: "Traditional Home, Race Course",
    rating: 5,
    projectType: "Traditional Home",
    year: "2022",
  },
  {
    content: "From design to completion, the experience was smooth. The team listened to our requirements and delivered beyond our expectations. Our commercial building is now a landmark in the area!",
    author: "Arjun Enterprises",
    role: "Commercial Building, Avinashi Road",
    rating: 5,
    projectType: "Commercial",
    year: "2023",
  },
  {
    content: "NK Homes made our farmhouse dream a reality. The landscaping, pool, and overall design exceeded our expectations. It's our perfect weekend getaway now!",
    author: "Dr. Meena Krishnan",
    role: "Farm House, Mettupalayam",
    rating: 5,
    projectType: "Farm House",
    year: "2024",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Testimonials
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                What Our Clients Say About Us
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Don't just take our word for it. Hear from our satisfied clients
                who have trusted us with their dream projects.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card border border-border p-8 relative"
                >
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-display font-bold text-foreground">
                      {testimonial.author}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="bg-background px-2 py-1">
                        {testimonial.projectType}
                      </span>
                      <span>{testimonial.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "100+", label: "Happy Clients" },
                { number: "5.0", label: "Average Rating" },
                { number: "8+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index}>
                  <span className="text-4xl md:text-5xl font-display font-bold text-primary">
                    {stat.number}
                  </span>
                  <span className="block text-muted-foreground mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
