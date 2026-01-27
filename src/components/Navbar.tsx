import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";
const PHONE_NUMBER = "+919998006840";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? "bg-card/98 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container-restaurant">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <a href="#home" onClick={() => scrollToSection("#home")} className="flex flex-col group">
            <span className={`font-serif text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-cream"
            }`}>
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
                className={`relative font-medium transition-colors duration-300 hover:text-primary group ${
                  scrolled ? "text-foreground/80" : "text-cream/90"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
              className={`border-2 font-semibold smooth-transition btn-shine ${
                scrolled 
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                  : "border-cream/60 text-cream hover:bg-cream/10"
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              onClick={() => window.open(ZOMATO_URL, "_blank")}
              className="bg-primary text-primary-foreground hover:bg-saffron-dark font-semibold smooth-transition btn-shine"
            >
              Order Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-cream"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden bg-card/98 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-restaurant py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              onClick={() => window.open(ZOMATO_URL, "_blank")}
              className="bg-primary text-primary-foreground hover:bg-saffron-dark w-full font-semibold"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
