import { Star, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hotel: [
      { label: "Our Story", href: "#about" },
      { label: "Rooms & Suites", href: "#rooms" },
      { label: "Dining", href: "#services" },
      { label: "Amenities", href: "#amenities" },
    ],
    services: [
      { label: "Restaurant", href: "#services" },
      { label: "Bar & Lounge", href: "#services" },
      { label: "Meeting Halls", href: "#services" },
      { label: "Events", href: "#contact" },
    ],
    information: [
      { label: "Location", href: "#location" },
      { label: "Contact Us", href: "#contact" },
      { label: "Reservations", href: "#booking" },
      { label: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-sky-dark text-cream">
      {/* Main Footer */}
      <div className="heritage-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ETAF Officers Club Logo" className="h-14 w-auto" />
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">ETAF Officers Club</h3>
                <div className="flex gap-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-sm">
              Experience 60 years of Ethiopian hospitality in the heart of Bishoftu's 
              stunning lake district. Where every stay becomes a treasured memory.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:bg-gold hover:text-sky-dark hover:border-gold transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Hotel</h4>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Information</h4>
            <ul className="space-y-3">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - UPDATED WITH ETHIOAPP CREDIT */}
      <div className="border-t border-gold/20">
        <div className="heritage-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream/60 text-sm">
            <div className="text-center md:text-left">
              <p>© {currentYear} ETAF Officers Club. All rights reserved.</p>
              <p className="mt-1 text-gold/80">Made by Ethioapp, Ethiopia 🇪🇹</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;