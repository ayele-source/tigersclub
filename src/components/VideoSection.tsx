import { Play, Award, Plane, Star } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="heritage-section bg-gradient-to-br from-background via-sky-light/5 to-gold/5">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Card */}
          <div className="relative group">
            <div className="aspect-video bg-sky-dark rounded-xl overflow-hidden shadow-elevated">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Vfdr5a2g9iw"
                title="ETAF Legacy Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-gold rounded-tl-lg opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-gold rounded-br-lg opacity-50" />
          </div>

          {/* Description */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Plane size={18} className="text-secondary" />
              <span className="text-secondary font-medium text-sm">Documentary</span>
            </div>
            
            <h2 className="heritage-heading mb-4 text-sky-dark">
              Our ETAF Legacy
            </h2>
            <h3 className="font-display text-2xl md:text-3xl text-secondary font-semibold mb-6">
              90 Years Anniversary
            </h3>
            
            <p className="heritage-body mb-6 text-sky-dark/90">
              Join us in celebrating 90 years of Ethiopian Air Force excellence. This documentary 
              chronicles the remarkable journey from our founding to becoming one of Africa's 
              most distinguished air forces.
            </p>
            
            <p className="heritage-body mb-8 text-sky-dark/90">
              Witness the stories of courage, dedication, and innovation that have defined our 
              organization. From the early pioneers to today's modern force, discover the proud 
              legacy that shapes ETAF Officers Club.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-display text-2xl font-bold text-sky-dark block">90</span>
                <span className="text-sm text-sky-dark/70">Years of Service</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Plane className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-display text-2xl font-bold text-sky-dark block">1000+</span>
                <span className="text-sm text-sky-dark/70">Officers Trained</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-display text-2xl font-bold text-sky-dark block">60+</span>
                <span className="text-sm text-sky-dark/70">Years at Club</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;