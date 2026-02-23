import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const testimonials = [
  {
    content: "We loved NK Homes! The finished project is not only beautiful but also exactly what we hoped for. We give the project 5 out of 5 stars and strongly recommend them to everyone.",
    author: "Ramesh Kumar",
    role: "Individual Home, Peelamedu",
    rating: 5,
  },
  {
    content: "NK Homes delivered our dream villa on time and within budget. Their attention to detail and quality of work is exceptional. Highly recommended for anyone looking to build their home.",
    author: "Priya Venkatesh",
    role: "Villa Project, Karamadai",
    rating: 5,
  },
  {
    content: "Professional team with excellent communication throughout the project. They transformed our old house into a modern contemporary home. Thank you NK Homes!",
    author: "Suresh Babu",
    role: "Renovation, Saibaba Colony",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-up">
            <span className="section-subtitle">Testimonials</span>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="section-title">What Our Clients Say</h2>
          </ScrollAnimation>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="scale-in" duration={800}>
            <div className="testimonial-card relative">
              <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />

              <div className="relative z-10 text-center px-4 md:px-12 py-8">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Navigation */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
