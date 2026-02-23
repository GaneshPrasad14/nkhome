import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProject from "@/components/FeaturedProject";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <FeaturedProject />
        <WhyChooseUs />
        <WorkProcess />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
