import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Our Story" },
    { href: "#services", label: "Services" },
    { href: "#rooms", label: "Rooms" },
    { href: "#amenities", label: "Amenities" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="heritage-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="ETAF Officers Club Logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="font-display text-cream text-lg font-semibold">ETAF Officers Club</h1>
              <p className="text-gold-light text-xs tracking-widest uppercase">Est. 1965</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <a href="#booking">Book Your Stay</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gold/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-gold transition-colors duration-300 text-base font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4 w-full" asChild>
                <a href="#booking">Book Your Stay</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
