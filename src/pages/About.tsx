import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import heroVilla from "@/assets/hero-villa-1.jpg";
import heroTraditional from "@/assets/hero-traditional-2.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our clients' satisfaction is our top priority. We listen, understand, and deliver.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We carve every atom of your house with precision and care.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about building homes that families will cherish for generations.",
  },
];

const milestones = [
  { year: "2016", event: "NK Homes founded in Coimbatore" },
  { year: "2018", event: "Completed 50+ residential projects" },
  { year: "2020", event: "Expanded to commercial construction" },
  { year: "2022", event: "Launched interior design division" },
  { year: "2024", event: "150+ successful projects milestone" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building Dreams Since 2016
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                NeelaKandeswarar Homes PVT Ltd has been transforming dreams into reality
                for over 8 years, one home at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={heroVilla}
                  alt="NK Homes Project"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-primary/20 -z-10" />
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  NK Homes PVT Ltd was founded in 2016 with a simple vision - to build
                  homes that families would love for generations. What started as a small
                  team of passionate builders has now grown into one of Coimbatore's most
                  trusted construction companies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our expertise spans across Individual Homes, Villas, Farm Houses,
                  Traditional & Contemporary Homes, Commercial Buildings, Interior Design,
                  and Renovation projects. We believe in delivering quality without
                  compromise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, with over 150 successful projects and 100+ happy families,
                  we continue our journey of turning dreams into beautiful homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-background p-8 md:p-12">
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred construction company in South India,
                  known for building homes that combine quality, innovation, and affordability.
                  We envision a future where every family has access to their dream home.
                </p>
              </div>
              <div className="bg-foreground text-background p-8 md:p-12">
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-background/80 leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations
                  through innovative designs, quality materials, and transparent processes.
                  We commit to building not just structures, but homes filled with memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-subtitle">Our Values</span>
              <h2 className="section-title">What Drives Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4 block">
                Our Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Milestones
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 mb-8 last:mb-0">
                  <div className="w-24 shrink-0 text-right">
                    <span className="text-primary font-display font-bold text-xl">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="relative pb-8 last:pb-0">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2" />
                    {index < milestones.length - 1 && (
                      <div className="absolute left-0 top-5 w-px h-full bg-background/20 -translate-x-1/2" />
                    )}
                    <p className="text-background/80 pl-6">{milestone.event}</p>
                  </div>
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

export default About;
