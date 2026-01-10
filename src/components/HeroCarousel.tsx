import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      alt: "ETAF Officers Club main view",
    },
    {
      image: hero2,
      alt: "ETAF Officers Club exterior at sunset",
    },
    {
      image: hero3,
      alt: "ETAF Officers Club elegant lobby",
    },
    {
      image: hero4,
      alt: "ETAF Officers Club garden terrace",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-dark/70 via-sky-dark/50 to-sky-dark/80" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream hover:bg-gold/30 hover:border-gold/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream hover:bg-gold/30 hover:border-gold/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

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
        <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Experience timeless elegance at ETAF Officers Club, 
          nestled beside the pristine crater lakes of Bishoftu since 1965.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#booking">Reserve Your Room</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#about">Explore Our Story</a>
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-8 text-cream/80 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-gold" />
            <span className="text-sm">Bishoftu, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-gold" />
            <span className="text-sm">24/7 Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="text-gold" />
            <span className="text-sm">Since 1965</span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;