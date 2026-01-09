import { Button } from "@/components/ui/button";
import restaurantImage from "@/assets/restaurant.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import barImage from "@/assets/bar1.jpg";
import hallImage from "@/assets/hall1.jpg";
import { UtensilsCrossed, BedDouble, Wine, Users, CheckCircle2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BedDouble,
      title: "Luxurious Accommodations",
      description: "50 elegantly appointed rooms and suites with modern amenities and timeless décor, each offering views of our gardens or the distant crater lakes.",
      features: ["24-Hour Room Service", "Premium Bedding", "Private Balconies", "High-Speed WiFi"],
      image: bedroomImage,
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining Restaurant",
      description: "Savor authentic Ethiopian cuisine alongside international favorites, prepared by our award-winning chefs using locally sourced ingredients.",
      features: ["Traditional Ethiopian Dishes", "International Menu", "Private Dining Rooms", "Breakfast Included"],
      image: restaurantImage,
    },
    {
      icon: Wine,
      title: "Heritage Bar & Lounge",
      description: "Unwind in our sophisticated bar featuring Ethiopian wines, craft cocktails, and live traditional music on weekends.",
      features: ["Ethiopian Wines", "Craft Cocktails", "Live Music", "Lounge Area"],
      image: barImage,
    },
    {
      icon: Users,
      title: "Conference & Events",
      description: "Our fully equipped meeting halls accommodate up to 200 guests, perfect for conferences, weddings, and corporate retreats.",
      features: ["Up to 200 Guests", "AV Equipment", "Catering Services", "Event Planning"],
      image: hallImage,
    },
  ];

  return (
    <section id="services" className="heritage-section bg-background pt-12 md:pt-20">
      <div className="heritage-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="heritage-heading mt-4 text-sky-dark">
            Exceptional Service,
            <span className="text-secondary block"> Every Moment</span>
          </h2>
          <div className="heritage-divider" />
          <p className="heritage-body mt-6 text-sky-dark/90">
            At ETAF Officers Club, we believe in delivering experiences that exceed expectations. 
            Our dedicated team ensures every detail is perfected for your comfort.
          </p>
        </div>

        {/* All Services in 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="heritage-card group overflow-hidden">
              {/* Image */}
              <div className="relative h-48 md:h-56 mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-sky-dark mb-3">
                  {service.title}
                </h3>
                <p className="heritage-body text-sky-dark/90 mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-sky-dark/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="gold" size="sm" className="w-full md:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Preview - REMOVED FOR NOW TO FIX ERROR */}
      </div>
    </section>
  );
};

export default ServicesSection;