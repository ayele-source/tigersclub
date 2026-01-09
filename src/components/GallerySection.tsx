import bar2 from "@/assets/bar2.jpg";
import bar3 from "@/assets/bar3.jpg";
import hall2 from "@/assets/hall2.jpg";
import hall3 from "@/assets/hall3.jpg";
import { Maximize2 } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    { src: bar2, alt: "Heritage Bar elegant interior", title: "Bar Lounge" },
    { src: bar3, alt: "Bar seating area with ambient lighting", title: "Evening Ambiance" },
    { src: hall2, alt: "Conference hall professional setup", title: "Conference Hall" },
    { src: hall3, alt: "Event hall spacious layout", title: "Event Space" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-sky-dark mt-4 mb-6">
            Explore Our
            <span className="text-secondary block">Facilities</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-secondary to-accent mx-auto my-6" />
          <p className="text-sky-dark/80 text-lg leading-relaxed">
            Take a visual journey through our exceptional amenities and spaces designed for your comfort and enjoyment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elevated hover:shadow-gold transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-cream/80 mt-1">{image.alt}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-5 h-5 text-sky-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-sky-dark/70 text-sm md:text-base">
            Want to see more? <span className="text-secondary font-medium">Visit us for a full tour!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;