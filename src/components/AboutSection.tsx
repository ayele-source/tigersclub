import historicalImage from "@/assets/historical.jpg";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="heritage-section bg-cream pb-12 md:pb-20">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Heritage</span>
            <h2 className="heritage-heading mt-4 mb-6 text-sky-dark">
              Six Decades of
              <span className="text-secondary block">Ethiopian Excellence</span>
            </h2>
            <div className="heritage-divider !mx-0" />
            
            <div className="space-y-4 mt-4">
              <p className="heritage-body text-sky-dark/90">
                Founded in 1965, ETAF Officers Club stands as a living testament to Ethiopian 
                hospitality. Our doors first opened during a golden era of aviation and tourism, 
                welcoming dignitaries, military officers, and travelers from across the globe.
              </p>
              <p className="heritage-body text-sky-dark/90">
                Through six decades, we have preserved the charm of our origins while embracing 
                modern comforts. Each corner of our club tells a story—from the original 
                hand-carved wooden panels in our lobby to the vintage photographs adorning 
                our corridors.
              </p>
              <p className="heritage-body text-sky-dark/90">
                Today, we continue our legacy of exceptional service, blending traditional 
                Ethiopian warmth with world-class hospitality standards. 
              </p>
            </div>
          </div>

          {/* Image with Hover Effects and Button - SIMPLIFIED */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="group relative overflow-hidden rounded-lg shadow-elevated">
              <img
                src={historicalImage}
                alt="Historical photo of ETAF Officers Club opening in 1965"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Simple overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Learn More Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="gold" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;