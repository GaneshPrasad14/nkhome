import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
  { name: "Packages", path: "/packages" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

import { siteConfig } from "@/config/siteConfig";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Determine text color based on scroll state and page
  const headerTextColor = isScrolled || !isHome ? "text-foreground" : "text-background";
  const logoTextColor = isScrolled || !isHome ? "text-primary" : "text-background"; // Logo uses primary or white on hero

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-new.jpeg" alt="NK Homes" className="h-12 w-auto object-contain" />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-underline text-sm font-medium transition-colors ${location.pathname === link.path
                  ? "text-primary"
                  : `${headerTextColor} hover:text-primary`
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors ${headerTextColor}`}
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <Button asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${headerTextColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in bg-background/95 backdrop-blur-md absolute left-0 right-0 px-4 shadow-lg top-16">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-colors ${location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-foreground"
                >
                  <Phone className="h-5 w-5" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <Button asChild className="w-full">
                  <Link to="/contact">Book a Call</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
