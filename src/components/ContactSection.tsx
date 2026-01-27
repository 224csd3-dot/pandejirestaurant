import { Phone, MapPin, Clock, Car, Truck, UtensilsCrossed, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919998006840";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Pandeyji+Restaurant+Sayajiganj+Vadodara";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100093194160367&mibextid=LQQJ4d";
const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";

const services = [
  { icon: UtensilsCrossed, label: "Dine-in" },
  { icon: Car, label: "Drive-through" },
  { icon: Truck, label: "No-contact Delivery" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="container-restaurant">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Contact Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-5">
            Visit or Order Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Ready to experience authentic vegetarian cuisine? 
            Give us a call or visit our restaurant in Sayajiganj, Vadodara.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Contact Info */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-primary to-saffron-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-primary-foreground shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Order Now
                </h3>
                <p className="text-primary-foreground/85 mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                  Call us directly to place your order or make a reservation.
                </p>
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-primary-foreground/70 mb-0.5 sm:mb-1">Call us at</p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:underline"
                    >
                      +91 99980 06840
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                    className="flex-1 bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 font-bold smooth-transition py-5 sm:py-6 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => window.open(ZOMATO_URL, "_blank")}
                    className="flex-1 bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 font-bold smooth-transition py-5 sm:py-6 text-sm sm:text-base"
                  >
                    Order Online
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 shadow-soft border border-border/50 card-hover">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Opening Hours</h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Opens daily at 11 AM</p>
              </div>
              <a 
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 shadow-soft border border-border/50 card-hover block"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Follow Us</h4>
                <span className="text-primary hover:underline font-medium text-xs sm:text-sm md:text-base">Facebook Page</span>
              </a>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 bg-accent/10 text-accent px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full smooth-transition hover:bg-accent/20 text-xs sm:text-sm md:text-base"
                >
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-border/50">
              {/* Map */}
              <div className="h-48 sm:h-56 md:h-72 bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169374876895!2d73.17841!3d22.3107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSayajiganj%2C%20Vadodara!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pandeyji Restaurant Location"
                  className="hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              
              {/* Address */}
              <div className="p-5 sm:p-6 md:p-8">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.open(GOOGLE_MAPS_URL, "_blank"); }}
                  className="flex gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 smooth-transition">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2 md:mb-3 group-hover:text-primary smooth-transition">Our Location</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed group-hover:text-foreground smooth-transition text-xs sm:text-sm md:text-base">
                      GF-4, Dhanvantari Complex<br />
                      Near Sardar Patel Statue, Dairy Den Circle<br />
                      Opposite M.S. University, Sarod<br />
                      Sayajiganj, Vadodara – 390007
                    </address>
                  </div>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(GOOGLE_MAPS_URL, "_blank")}
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold smooth-transition py-5 sm:py-6 text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
