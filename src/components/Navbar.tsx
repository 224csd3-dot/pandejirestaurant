import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container-restaurant">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Opens daily at 11 AM</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+919998006840" className="hover:text-primary transition-colors">
                +91 99980 06840
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              100% Vegetarian
            </span>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between py-4 px-4 md:px-0">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              PANDEYJI
            </span>
            <span className="text-xs md:text-sm text-primary font-medium tracking-widest">
              RESTAURANT
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:+919998006840")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-saffron-dark"
            >
              Order Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-restaurant py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={() => window.open("tel:+919998006840")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-saffron-dark w-full">
                Order Online
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
