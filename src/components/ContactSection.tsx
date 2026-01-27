import { Phone, MapPin, Clock, Car, Truck, UtensilsCrossed, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: UtensilsCrossed, label: "Dine-in" },
  { icon: Car, label: "Drive-through" },
  { icon: Truck, label: "No-contact Delivery" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-restaurant px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit or Order Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to experience authentic vegetarian cuisine? 
            Give us a call or visit our restaurant in Sayajiganj, Vadodara.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Call to Action Card */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-elevated">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Order Now
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Call us directly to place your order or make a reservation.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Call us at</p>
                  <a
                    href="tel:+919998006840"
                    className="text-2xl font-bold hover:underline"
                  >
                    +91 99980 06840
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open("tel:+919998006840")}
                  className="flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Order Online
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Opening Hours</h4>
                <p className="text-muted-foreground">Opens daily at 11 AM</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
                <a href="#" className="text-primary hover:underline">Facebook Page</a>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full"
                >
                  <service.icon className="w-5 h-5" />
                  <span className="font-medium">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              {/* Map placeholder */}
              <div className="h-64 bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169374876895!2d73.17841!3d22.3107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSayajiganj%2C%20Vadodara!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pandeyji Restaurant Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              
              {/* Address */}
              <div className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Location</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      GF-4, Dhanvantari Complex<br />
                      Near Sardar Patel Statue, Dairy Den Circle<br />
                      Opposite M.S. University, Sarod<br />
                      Sayajiganj, Vadodara – 390007
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
