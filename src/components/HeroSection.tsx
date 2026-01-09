import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";
import { Star, MapPin, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ETAF Officers Club exterior"
          className="w-full h-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 heritage-container text-center py-32 mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={14} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="text-gold-light text-sm font-medium">60 Years of Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Where History Meets
          <span className="block text-gold mt-2">Ethiopian Hospitality</span>
        </h1>

        {/* Subheading */}
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Experience timeless elegance at ETAF Officers Club, 
          nestled beside the pristine crater lakes of Bishoftu since 1965.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" asChild className="hover:scale-105 transition-transform duration-300">
            <a href="#booking">Reserve Your Room</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild className="hover:scale-105 transition-transform duration-300">
            <a href="#about">Explore Our Story</a>
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-8 text-cream/70 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <MapPin size={18} className="text-gold" />
            <span className="text-sm">Bishoftu, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <Clock size={18} className="text-gold" />
            <span className="text-sm">24/7 Service</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
            <Star size={18} className="text-gold" />
            <span className="text-sm">Since 1965</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;