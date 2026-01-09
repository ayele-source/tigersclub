import historicalImage from "@/assets/historical.jpg";

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
                Ethiopian warmth with world-class hospitality standards. Our dedicated team, 
                many of whom represent second and third generations of club families, 
                ensure every guest experiences the genuine spirit of our heritage.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={historicalImage}
                alt="Historical photo of ETAF Officers Club opening in 1965"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-sky-dark text-cream p-6 rounded-lg shadow-elevated animate-float">
                <span className="font-display text-3xl font-bold text-gold">1965</span>
                <p className="text-cream/80 text-sm mt-1">Year Established</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;