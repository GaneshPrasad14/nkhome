import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectVilla from "@/assets/project-villa-gandhipuram.jpg";
import projectContemporary from "@/assets/project-contemporary-1.jpg";
import office1 from "@/assets/office-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import projectTraditional from "@/assets/project-traditional-1.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    image: projectVilla,
    category: "Villa",
    title: "Modern Villa at Gandhipuram",
    location: "Gandhipuram, Coimbatore",
    description: "A masterpiece of modern architecture featuring spacious living areas."
  },
  {
    id: 2,
    image: projectContemporary,
    category: "Contemporary",
    title: "Contemporary Family Home",
    location: "Peelamedu, Coimbatore",
    description: "Designed for modern families with detailed attention to comfort."
  },
  {
    id: 3,
    image: office1,
    category: "Corporate",
    title: "Corporate Office Lounge",
    location: "Gandhipuram, Coimbatore",
    description: "Premium office space designed for productivity and style."
  },
  {
    id: 4,
    image: gallery1,
    category: "Apartment",
    title: "Modern Residential Complex",
    location: "Coimbatore",
    description: "Luxury apartments with state-of-the-art amenities."
  },
  {
    id: 5,
    image: projectTraditional,
    category: "Traditional",
    title: "Traditional Heritage Home",
    location: "Saibaba Colony, Coimbatore",
    description: "Preserving culture with modern engineering excellence."
  },
];

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState(1);

  const handleNext = () => {
    const currentIndex = projects.findIndex(p => p.id === activeId);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveId(projects[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex(p => p.id === activeId);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setActiveId(projects[prevIndex].id);
  };

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <ScrollAnimation animation="fade-right">
              <span className="section-subtitle">Our Projects</span>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-right" delay={100}>
              <h2 className="section-title">Latest Works</h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-left">
            <div className="flex items-center gap-4">
              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <Button asChild variant="outline" className="ml-4">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Cinematic Carousel */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={cn(
                "relative cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden rounded-3xl group",
                activeId === project.id ? "flex-[3]" : "flex-[1] hover:flex-[1.2]"
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-1000",
                    activeId === project.id ? "scale-100" : "scale-110 grayscale group-hover:grayscale-0"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500",
                  activeId === project.id ? "opacity-100" : "opacity-60 group-hover:opacity-40"
                )} />
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
