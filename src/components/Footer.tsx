import { Facebook, Phone, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919998006840";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Pandeyji+Restaurant+GF-4+Dhanvantari+Complex+Sayajiganj+Vadodara";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100093194160367&mibextid=LQQJ4d";
const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Dine-in",
    "Drive-through",
    "No-contact Delivery",
    "Online Orders",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-warm-brown text-cream">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary to-saffron-dark py-10">
        <div className="container-restaurant px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Ready to Order?
              </h3>
              <p className="text-primary-foreground/85">
                Call us or order online for authentic vegetarian delights!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 font-bold smooth-transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                onClick={() => window.open(ZOMATO_URL, "_blank")}
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 font-bold smooth-transition"
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-restaurant px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-3xl font-bold text-cream">PANDEYJI</h3>
              <p className="text-saffron-light text-sm tracking-widest font-medium">RESTAURANT</p>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6">
              Vadodara's trusted destination for authentic North Indian 
              vegetarian cuisine. Quality, hygiene, and taste since years.
            </p>
            <div className="flex items-center gap-3 text-saffron-light bg-saffron-light/10 px-4 py-2 rounded-full inline-flex">
              <Leaf className="w-5 h-5" />
              <span className="font-bold">100% Pure Vegetarian</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-cream">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-saffron-light transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-cream">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-cream/70 font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-cream">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-saffron-light mt-1" />
                <div>
                  <p className="text-cream/60 text-sm mb-1">Call us at</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-cream hover:text-saffron-light transition-colors duration-300 font-bold text-lg"
                  >
                    +91 99980 06840
                  </a>
                </div>
              </div>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); window.open(GOOGLE_MAPS_URL, "_blank"); }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-saffron-light mt-1" />
                <div>
                  <p className="text-cream/60 text-sm mb-1">Location</p>
                  <p className="text-cream font-medium group-hover:text-saffron-light transition-colors duration-300">Sayajiganj, Vadodara</p>
                </div>
              </a>
              <div className="pt-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-cream/10 hover:bg-cream/20 transition-colors duration-300 px-5 py-3 rounded-xl font-medium"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-restaurant px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>© {currentYear} Pandeyji Restaurant. All rights reserved.</p>
            <p className="font-medium">Pure Vegetarian • Hygienic • Quality Food</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
