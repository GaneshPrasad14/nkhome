import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { cn } from "@/lib/utils";

// Import new images
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";
import award4 from "@/assets/award-4.jpg";
import achievement1 from "@/assets/achievement-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import office3 from "@/assets/office-3.jpg";
import office4 from "@/assets/office-4.jpg";
import office5 from "@/assets/office-5.jpg";
import office6 from "@/assets/office-6.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectContemporary1 from "@/assets/project-contemporary-1.jpg";

const categories = ["All", "Individual Homes", "Villas", "Traditional", "Commercial", "Interior", "Awards"];

const projects = [
  {
    image: projectContemporary1,
    category: "Individual Homes",
    title: "Contemporary Family Residence",
    location: "Peelamedu",
    year: "2023",
  },
  {
    image: project1,
    category: "Villas",
    title: "Luxury Villa Project",
    location: "Saravanampatti",
    year: "2024",
  },
  {
    image: gallery1,
    category: "Individual Homes",
    title: "Modern Residential Complex",
    location: "Coimbatore",
    year: "2024",
  },
  {
    image: office1,
    category: "Interior",
    title: "Corporate Office Lounge",
    location: "Gandhipuram",
    year: "2024",
  },
  {
    image: project2,
    category: "Traditional",
    title: "Traditional Heritage Home",
    location: "RS Puram",
    year: "2023",
  },
  {
    image: gallery2,
    category: "Villas",
    title: "Premium Gated Community",
    location: "Kovaipudur",
    year: "2023",
  },
  {
    image: office4,
    category: "Commercial",
    title: "Office Workspace Setup",
    location: "Coimbatore",
    year: "2024",
  },
  {
    image: award1,
    category: "Awards",
    title: "Excellence in Construction",
    location: "Coimbatore",
    year: "2023",
  },
  {
    image: project3,
    category: "Villas",
    title: "Modern Garden Villa",
    location: "Vadavalli",
    year: "2023",
  },
  {
    image: gallery3,
    category: "Traditional",
    title: "Kerala Style Elevation",
    location: "Pollachi",
    year: "2023",
  },
  {
    image: award2,
    category: "Awards",
    title: "Best Builder Award",
    location: "Tamil Nadu",
    year: "2022",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const getPosition = (index: number) => {
    const total = filteredProjects.length;
    if (total === 0) return "hidden";

    // Calculate relative index ensuring correct wrapping
    let relativeIndex = (index - activeIndex + total) % total;

    // Adjust for negative wrapping to handle the left side correctly
    if (relativeIndex > total / 2) relativeIndex -= total;

    if (relativeIndex === 0) return "active";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === -1) return "prev";
    return "hidden";
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-24 lg:pt-32">
        {/* Gallery Header */}
        <section className="container mx-auto px-4 lg:px-8 mb-12 text-center">
          <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
            Our Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Architectural Gallery
          </h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-1.5 text-sm transition-all rounded-full border border-transparent",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:border-primary/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* 3D Carousel Section */}
        <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden mb-20">
          {/* Architectural Lines Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <line x1="0" y1="300" x2="1000" y2="300" stroke="currentColor" strokeWidth="1" />
              <line x1="500" y1="0" x2="500" y2="600" stroke="currentColor" strokeWidth="1" />
              <circle cx="500" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="0" x2="1000" y2="600" stroke="currentColor" strokeWidth="0.5" />
              <line x1="1000" y1="0" x2="0" y2="600" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-12 z-30 p-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-12 z-30 p-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center perspective-1000">
            {filteredProjects.map((project, index) => {
              const position = getPosition(index);
              if (position === "hidden") return null;

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                    // Active Card (Center)
                    position === "active" && "z-20 scale-100 opacity-100 left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[400px] shadow-2xl",
                    // Previous Card (Left)
                    position === "prev" && "z-10 scale-75 opacity-40 left-[15%] -translate-x-1/2 w-[80%] md:w-[600px] h-[400px] grayscale blur-[1px]",
                    // Next Card (Right)
                    position === "next" && "z-10 scale-75 opacity-40 left-[85%] -translate-x-1/2 w-[80%] md:w-[600px] h-[400px] grayscale blur-[1px]"
                  )}
                >
                  <div className="relative w-full h-full overflow-hidden bg-muted group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Active Card Overlay */}
                    {position === "active" && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-primary text-xs uppercase tracking-wider mb-2">{project.category}</p>
                            <h3 className="text-2xl font-display font-bold mb-1">{project.title}</h3>
                            <p className="text-white/70 text-sm">{project.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white/50 text-xs">{project.year}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Decorative Corner Lines for architectural feel */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/30" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/30" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/30" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/30" />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Carousel Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-muted-foreground">
            {String(activeIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
