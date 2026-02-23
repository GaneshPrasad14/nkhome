import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVilla1 from "@/assets/hero-villa-1.jpg";
import heroTraditional2 from "@/assets/hero-traditional-2.jpg";
import heroApartment3 from "@/assets/hero-apartment-3.jpg";

const slides = [
  {
    image: heroVilla1,
    subtitle: "Specializes In",
    title: "Individual Homes & Villas",
    description: "We carve every atom of your house with precision and care",
  },
  {
    image: heroTraditional2,
    subtitle: "Traditional Excellence",
    title: "Traditional & Contemporary Homes",
    description: "Blending heritage with modern comfort for timeless living",
  },
  {
    image: heroApartment3,
    subtitle: "Commercial Projects",
    title: "Apartments & Buildings",
    description: "Building spaces that inspire success and growth",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<() => void>(() => { });

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      autoPlayRef.current();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${index === currentSlide ? "animate-zoom-in" : "scale-100"
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <span
                className={`inline-block text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4 ${index === currentSlide
                  ? "hero-text-animate"
                  : "opacity-0"
                  }`}
              >
                {slide.subtitle}
              </span>
              <h1
                className={`font-display text-3xl md:text-5xl lg:text-7xl font-bold text-background mb-6 leading-tight ${index === currentSlide
                  ? "hero-text-animate hero-text-animate-delay-1"
                  : "opacity-0"
                  }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-background/80 text-lg md:text-xl mb-8 max-w-lg ${index === currentSlide
                  ? "hero-text-animate hero-text-animate-delay-2"
                  : "opacity-0"
                  }`}
              >
                "{slide.description}"
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 ${index === currentSlide
                  ? "hero-text-animate hero-text-animate-delay-3"
                  : "opacity-0"
                  }`}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Start A Project
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background/10" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 glass-card rounded-full text-background hover:bg-background/20 hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 glass-card rounded-full text-background hover:bg-background/20 hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-1 transition-all duration-500 ${index === currentSlide
              ? "w-12 bg-primary"
              : "w-6 bg-background/50 hover:bg-background/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <div className="scroll-indicator" />
      </div>

      {/* Book a Call Badge */}
      <div className="absolute top-1/2 right-0 z-20 hidden lg:block -translate-y-1/2">
        <Link
          to="/contact"
          className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rotate-90 origin-right -translate-x-full hover:bg-terracotta-dark transition-colors"
        >
          <span className="font-medium">Book a Call</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;
