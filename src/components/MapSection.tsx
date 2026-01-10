import { MapPin, Phone, Mail, Clock } from "lucide-react";

const MapSection = () => {
  return (
    <section className="heritage-section bg-sky-dark">
      <div className="heritage-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">Find Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mt-4">
            Visit <span className="text-gold">ETAF Officers Club</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold to-gold-light mx-auto my-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-sky-dark/50 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-1">Address</h4>
                <p className="text-cream/70">
                  Ethiopian Air Force Officers Club<br />
                  Bishoftu, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-sky-dark/50 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-1">Phone</h4>
                <p className="text-cream/70">+251 911474246</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-sky-dark/50 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-1">Email</h4>
                <p className="text-cream/70">info@etafofficersclub.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-sky-dark/50 border border-gold/20">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-1">Reception Hours</h4>
                <p className="text-cream/70">24 Hours, 7 Days a Week</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-elevated border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.125560184998!2d38.99259477589332!3d8.782733691394628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f0b9f9f9f9f%3A0x9f9f9f9f9f9f9f9f!2sEthiopian%20Air%20Force%20Officers%20Club%2C%20Bishoftu!5e0!3m2!1sen!2set!4v1698765432100!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ETAF Officers Club Location - Bishoftu, Ethiopia"
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;