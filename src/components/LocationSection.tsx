import lakeImage from "@/assets/bishoftu-lake.jpg";
import { MapPin, Car, Plane, Mountain } from "lucide-react";

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
      icon: Plane,
      title: "Near Bole Airport",
      description: "Convenient access with complimentary airport shuttle service available.",
    },
    {
      icon: Mountain,
      title: "Natural Beauty",
      description: "Surrounded by the Ethiopian Highlands, perfect for nature exploration.",
    },
  ];

  return (
    <section id="location" className="heritage-section bg-cream">
      <div className="heritage-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Location</span>
          <h2 className="heritage-heading mt-4 text-sky-dark"> {/* CHANGED: text-sky-dark */}
            Discover
            <span className="text-secondary"> Bishoftu</span>
          </h2>
          <div className="heritage-divider" />
          <p className="heritage-body mt-6 text-sky-dark/90"> {/* CHANGED: text-sky-dark/90 */}
            Nestled in the heart of Ethiopia's lake district, our hotel offers the perfect blend 
            of natural beauty and convenient access to the region's most treasured attractions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={lakeImage}
              alt="Bishoftu crater lake surrounded by lush green hills"
              className="rounded-lg shadow-elevated w-full"
            />
            <div className="absolute top-6 left-6 bg-cream/95 backdrop-blur-sm p-4 rounded-lg shadow-soft">
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" size={20} />
                <span className="font-display font-semibold text-sky-dark">Bishoftu, Ethiopia</span> {/* CHANGED: text-sky-dark */}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-sky-dark mb-6"> {/* CHANGED: text-sky-dark */}
              The Jewel of the Rift Valley
            </h3>
            <p className="heritage-body mb-6 text-sky-dark/90"> {/* CHANGED: text-sky-dark/90 */}
              Bishoftu, also known as Debre Zeit, is a breathtaking resort town famous for its 
              volcanic crater lakes and year-round pleasant climate. Located in the Oromia Region, 
              just 47 kilometers southeast of Addis Ababa, it has been Ethiopia's premier 
              weekend getaway destination for generations.
            </p>
            <p className="heritage-body mb-8 text-sky-dark/90"> {/* CHANGED: text-sky-dark/90 */}
              Our hotel sits at an elevation of 1,920 meters, offering refreshing temperatures 
              and stunning views of the surrounding volcanic landscape. The area is home to 
              diverse birdlife, making it a paradise for nature enthusiasts and photographers alike.
            </p>

            {/* Location Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-dark mb-1">{item.title}</h4> {/* CHANGED: text-sky-dark */}
                    <p className="text-sm text-sky-dark/80">{item.description}</p> {/* CHANGED: text-sky-dark/80 */}
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