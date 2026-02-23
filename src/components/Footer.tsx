import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-4">

          {/* Left Column - Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end space-y-6 order-2 lg:order-1">
            <Link to="/" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/projects" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Our Projects
            </Link>
            <Link to="/packages" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Packages
            </Link>
          </div>

          {/* Center Column - Logo & Brand */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="border-4 border-white p-4 mb-8">
              <img
                src="/logo-new.jpeg"
                alt="NK Homes"
                className="h-24 w-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-display font-medium tracking-widest mb-4">
              NK HOMES
            </h3>
            <p className="text-white/60 text-xs max-w-xs leading-relaxed mb-6 font-light">
              Building dreams with precision and elegance.
              <br />
              Creating timeless spaces since 2016.
            </p>

            {/* Contact Details Small */}
            <div className="flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-wider uppercase">
              <span className="flex items-center gap-2">
                <Phone className="h-3 w-3" /> {siteConfig.contact.phoneDisplay}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3 w-3" /> {siteConfig.contact.email}
              </span>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6 order-3">
            <Link to="/services" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              All Services
            </Link>
            <Link to="/services" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Interior Design
            </Link>
            <Link to="/testimonials" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Client Stories
            </Link>
            <Link to="/contact" className="text-xs font-medium uppercase tracking-[0.2em] hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
          <p className="text-[10px] text-background/40 tracking-widest uppercase">
            © {new Date().getFullYear()} NeelaKandeswarar Homes PVT Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
