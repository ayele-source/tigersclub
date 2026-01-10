import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+251 911474246",
      description: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@etafoffclub.com",
      description: "Quick response within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Lake Hora Road, Bishoftu",
      description: "Oromia Region, Ethiopia",
    },
    {
      icon: Clock,
      title: "Reception Hours",
      value: "24/7 Service",
      description: "We're always here for you",
    },
  ];

  return (
    <section id="contact" className="heritage-section bg-background">
      <div className="heritage-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="heritage-heading mt-4 mb-6 text-sky-dark"> {/* CHANGED: text-sky-dark */}
              We'd Love to
              <span className="text-secondary block">Hear From You</span>
            </h2>
            <div className="heritage-divider !mx-0" />
            
            <p className="heritage-body mt-8 mb-10 text-sky-dark/90"> {/* CHANGED: text-sky-dark/90 */}
              Whether you're planning a romantic getaway, a family vacation, or a corporate 
              retreat, our team is ready to help you create an unforgettable experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-dark">{item.title}</h4> {/* CHANGED: text-sky-dark */}
                    <p className="text-sky-dark font-medium">{item.value}</p> {/* CHANGED: text-sky-dark */}
                    <p className="text-sm text-sky-dark/80">{item.description}</p> {/* CHANGED: text-sky-dark/80 */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="heritage-card">
            <h3 className="font-display text-2xl font-semibold text-sky-dark mb-6"> {/* CHANGED: text-sky-dark */}
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sky-dark mb-2"> {/* CHANGED: text-sky-dark */}
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-dark mb-2"> {/* CHANGED: text-sky-dark */}
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-dark mb-2"> {/* CHANGED: text-sky-dark */}
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  placeholder="dereje@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-dark mb-2"> {/* CHANGED: text-sky-dark */}
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-dark mb-2"> {/* CHANGED: text-sky-dark */}
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                  placeholder="Tell us about your plans..."
                />
              </div>

              <Button variant="gold" size="xl" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;