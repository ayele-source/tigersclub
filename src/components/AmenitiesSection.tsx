import poolImage from "@/assets/pool.jpg";
import poolSideImage from "@/assets/pool-side.jpg";
import gymImage from "@/assets/gym.jpg";
import gardenImage from "@/assets/garden.jpg";
import tennisImage from "@/assets/tennis.jpg";
import { Waves, Dumbbell, TreePine, CircleDot } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Relax in our Olympic-sized outdoor pool surrounded by tropical gardens, with poolside service and comfortable loungers.",
      image: poolSideImage,
      gradient: "from-sky-dark/80 via-sky/60 to-sky-dark/80",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Stay active in our fully equipped gym featuring modern cardio and strength training equipment with personal trainers available.",
      image: gymImage,
      gradient: "from-forest-dark/80 via-forest/60 to-forest-dark/80",
    },
    {
      icon: TreePine,
      title: "Garden Grounds",
      description: "Stroll through our lush 5-acre gardens, home to indigenous plants, serene walking paths, and tranquil meditation spots.",
      image: gardenImage,
      gradient: "from-secondary-dark/80 via-secondary/60 to-secondary-dark/80",
    },
    {
      icon: CircleDot,
      title: "Tennis Courts",
      description: "Enjoy a match on our professional-grade tennis courts, available for guests with equipment rental and coaching sessions.",
      image: tennisImage,
      gradient: "from-gold-dark/80 via-gold/60 to-gold-dark/80",
    },
  ];

  return (
    <section id="amenities" className="heritage-section bg-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="heritage-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sky-light font-medium tracking-widest uppercase text-sm">Recreation & Leisure</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-sky-light mt-4 mb-6">
              Unwind in
              <span className="text-gold block">Paradise</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-gold-light my-6" />
            
            <p className="text-sky-light/90 text-lg leading-relaxed mb-10">
              Beyond comfortable accommodations, we offer a range of premium recreational facilities 
              designed to help you relax, recharge, and create lasting memories.
            </p>

            {/* Amenity Cards with Images */}
            <div className="grid sm:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-elevated hover:shadow-gold transition-all duration-500"
                >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 min-h-[180px] flex flex-col justify-between">
                    <div>
                      <amenity.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                      <h3 className="font-display text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                        {amenity.title}
                      </h3>
                      <p className="text-cream/80 text-sm leading-relaxed group-hover:text-cream/90 transition-colors duration-300">
                        {amenity.description}
                      </p>
                    </div>
                    
                    {/* Animated Underline */}
                    <div className="mt-4">
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gold to-gold-light transition-all duration-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Pool Image with Additional Content */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg shadow-elevated group">
              <img
                src={poolImage}
                alt="swimming pool at sunset"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Reflective Water Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Open Daily Badge */}
              <div className="absolute bottom-4 right-4 bg-gold text-forest-dark p-4 rounded-lg shadow-elevated hidden md:block animate-pulse-slow">
                <span className="font-display text-xl font-bold">Open Daily</span>
                <p className="text-forest-dark/80 text-sm mt-1">6:00 AM - 10:00 PM</p>
              </div>

              {/* Water Ripple Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-cream/50 rounded-full animate-ping" />
                <div className="absolute bottom-2 left-2/4 w-3 h-3 bg-cream/40 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                <div className="absolute bottom-4 left-3/4 w-1 h-1 bg-cream/60 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            {/* Additional Text and Button - CORRECTED COLORS */}
            <div className="bg-sky-light/20 backdrop-blur-sm border border-gold/30 rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-sky-dark mb-4">
                Premium Recreational Experience
              </h3>
              <p className="text-sky-light mb-4">
                Our amenities are designed with your ultimate comfort in mind. Whether you're 
                seeking active recreation or peaceful relaxation, our facilities provide the 
                perfect setting. All amenities are complimentary for our guests throughout 
                your stay.
              </p>
              <p className="text-sky-light mb-6">
                From sunrise yoga by the pool to evening tennis matches under the stars, 
                every moment at ETAF Officers Club is an opportunity to create cherished memories.
              </p>
              
              <button className="w-full bg-gold text-sky-dark font-semibold py-3 px-6 rounded-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-gold">
                Explore All Amenities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;