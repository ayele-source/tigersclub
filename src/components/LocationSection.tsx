import lakeImage from "@/assets/bishoftu-lake.jpg";
import { MapPin, Car, Building2, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Crater Lakes",
      description: "Minutes from the famous Bishoftu crater lakes, including Hora and Kuriftu.",
    },
    {
      icon: Car,
      title: "45km from Addis",
      description: "A scenic 45-minute drive from Ethiopia's vibrant capital city.",
    },
    {
      icon: Building2,
      title: "Vibrant City",
      description: "Revitalized city center with modern shops, cafes, and cultural attractions.",
    },
    {
      icon: Mountain,
      title: "Natural Beauty",
      description: "Surrounded by the Ethiopian Highlands, perfect for nature exploration.",
    },
  ];

  return (
    <section id="location" className="heritage-section">
      <div className="heritage-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Location</span>
          <h2 className="heritage-heading mt-4">
            Discover
            <span className="text-secondary"> Bishoftu</span>
          </h2>
          <div className="heritage-divider" />
          <p className="heritage-body mt-6">
            Nestled in the heart of Ethiopia's lake district, our hotel offers the perfect blend 
            of natural beauty and modern urban convenience in one of Ethiopia's most revitalized cities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with Button */}
          <div>
            <div className="relative mb-8">
              <img
                src={lakeImage}
                alt="Bishoftu crater lake surrounded by lush green hills"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute top-6 left-6 bg-cream/95 backdrop-blur-sm p-4 rounded-lg shadow-soft">
                <div className="flex items-center gap-2">
                  <MapPin className="text-secondary" size={20} />
                  <span className="font-display font-semibold text-sky-dark">Bishoftu, Ethiopia</span>
                </div>
              </div>
            </div>
            
            {/* Learn More Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="gold" size="lg">
                Discover Bishoftu
              </Button>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-sky-dark mb-6">
              The Revitalized Jewel of the Rift Valley
            </h3>
            <p className="heritage-body mb-6">
              Bishoftu, also known as Debre Zeit, has transformed into one of Ethiopia's most 
              vibrant and modern resort cities. Located in the Oromia Region, just 47 kilometers 
              southeast of Addis Ababa, it offers the perfect blend of natural beauty and urban 
              sophistication.
            </p>
            <p className="heritage-body mb-8">
              Today's Bishoftu features revitalized city centers with modern shopping districts, 
              trendy cafes, cultural attractions, and excellent dining options—all while preserving 
              its natural charm. The city sits at an elevation of 1,920 meters, offering refreshing 
              temperatures and stunning views of the surrounding volcanic landscape.
            </p>

            {/* Location Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50 hover:shadow-soft transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-sky-dark/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;