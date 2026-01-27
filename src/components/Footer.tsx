import { Facebook, Phone, MapPin, Leaf } from "lucide-react";

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
      {/* Main Footer */}
      <div className="container-restaurant px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-cream">PANDEYJI</h3>
              <p className="text-saffron-light text-sm tracking-widest">RESTAURANT</p>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6">
              Vadodara's trusted destination for authentic North Indian 
              vegetarian cuisine. Quality, hygiene, and taste since years.
            </p>
            <div className="flex items-center gap-2 text-saffron-light">
              <Leaf className="w-5 h-5" />
              <span className="font-medium">100% Pure Vegetarian</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-saffron-light transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-cream/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-cream">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron-light mt-0.5" />
                <div>
                  <p className="text-cream/70 text-sm">Call us at</p>
                  <a
                    href="tel:+919998006840"
                    className="text-cream hover:text-saffron-light transition-colors font-medium"
                  >
                    +91 99980 06840
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-light mt-0.5" />
                <div>
                  <p className="text-cream/70 text-sm">Location</p>
                  <p className="text-cream">Sayajiganj, Vadodara</p>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 transition-colors px-4 py-2 rounded-lg"
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
            <p>Pure Vegetarian • Hygienic • Quality Food</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
