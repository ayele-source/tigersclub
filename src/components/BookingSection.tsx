import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Users, BedDouble, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomType, setRoomType] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const roomTypes = [
    { value: "standard", label: "Standard Room", price: "2,500 ETB" },
    { value: "deluxe", label: "Deluxe Room", price: "3,800 ETB" },
    { value: "suite", label: "Executive Suite", price: "5,500 ETB" },
    { value: "presidential", label: "Presidential Suite", price: "8,000 ETB" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut || !roomType || !guests || !name || !email || !phone) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your reservation.",
    });

    // Reset form
    setCheckIn(undefined);
    setCheckOut(undefined);
    setRoomType("");
    setGuests("");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <section id="booking" className="heritage-section bg-sky-dark">
      <div className="heritage-container">
        <div className="text-center mb-12">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">Reservations</span>
          <h2 className="heritage-heading mt-4 text-cream">
            Book Your
            <span className="text-gold block">Perfect Stay</span>
          </h2>
          <div className="heritage-divider" />
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-cream rounded-xl p-6 md:p-10 shadow-elevated">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Check-in Date */}
              <div className="space-y-2">
                <Label htmlFor="checkin" className="text-sky-dark font-medium">Check-in Date</Label> {/* CHANGED: text-sky-dark */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <Label htmlFor="checkout" className="text-sky-dark font-medium">Check-out Date</Label> {/* CHANGED: text-sky-dark */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Room Type */}
              <div className="space-y-2">
                <Label htmlFor="roomType" className="text-sky-dark font-medium">Room Type</Label> {/* CHANGED: text-sky-dark */}
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger className="h-12">
                    <BedDouble className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((room) => (
                      <SelectItem key={room.value} value={room.value}>
                        <span className="flex items-center justify-between w-full">
                          {room.label} <span className="text-muted-foreground ml-2">({room.price}/night)</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-sky-dark font-medium">Number of Guests</Label> {/* CHANGED: text-sky-dark */}
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sky-dark font-medium">Full Name</Label> {/* CHANGED: text-sky-dark */}
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="h-12"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sky-dark font-medium">Email Address</Label> {/* CHANGED: text-sky-dark */}
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone" className="text-sky-dark font-medium">Phone Number</Label> {/* CHANGED: text-sky-dark */}
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+251 9XX XXX XXX"
                  className="h-12"
                />
              </div>
            </div>

            {/* Room Features */}
            {roomType && (
              <div className="mt-6 p-4 bg-sky/10 rounded-lg border border-sky/20">
                <h4 className="font-display font-semibold text-sky-dark mb-3">Room Includes:</h4> {/* CHANGED: text-sky-dark */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-sky-dark/80"> {/* CHANGED: text-sky-dark/80 */}
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky" />
                    <span>Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky" />
                    <span>Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky" />
                    <span>Pool Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky" />
                    <span>Parking</span>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" variant="gold" size="xl" className="w-full mt-8">
              Request Booking
            </Button>

            <p className="text-center text-sm text-sky-dark/80 mt-4"> {/* CHANGED: text-sky-dark/80 */}
              Our team will confirm availability and contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;