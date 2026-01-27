import { Star, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const PHONE_NUMBER = "+919998006840";
const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious Indian vegetarian thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/95 via-warm-brown/80 to-warm-brown/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 via-transparent to-transparent"></div>
      </div>

      <div className="container-restaurant relative z-10 px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-fade-in">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 smooth-transition">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
              <span className="font-bold text-gold text-base sm:text-lg">4.5</span>
            </div>
            <div className="w-px h-4 sm:h-5 bg-cream/30" />
            <span className="text-cream/90 font-medium text-sm sm:text-base">180+ Happy Customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.15] mb-4 sm:mb-6">
            Pure Vegetarian Food,
            <span className="block text-saffron-light mt-1 sm:mt-2">Made with Quality & Care</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-cream/85 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl">
            Experience authentic North Indian vegetarian cuisine in Vadodara. 
            Hygienic, delicious, and pocket-friendly meals for the whole family.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center gap-1.5 sm:gap-2 text-cream/90 bg-cream/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-saffron-light flex-shrink-0" />
              <span className="font-medium">Opens at 11 AM</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/pandeyji-restaurant-vadodara" 
              onClick={(e) => { e.preventDefault(); window.open("https://www.google.com/maps/search/?api=1&query=Pandeyji+Restaurant+GF-4+Dhanvantari+Complex+Sayajiganj+Vadodara", "_blank"); }}
              className="flex items-center gap-1.5 sm:gap-2 text-cream/90 bg-cream/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:bg-cream/15 smooth-transition text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-saffron-light flex-shrink-0" />
              <span className="font-medium">Sayajiganj, Vadodara</span>
            </a>
            <div className="flex items-center gap-2 text-cream/90 bg-accent/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
              <span className="font-semibold">₹200–400 per person</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              onClick={() => window.open(ZOMATO_URL, "_blank")}
              className="bg-primary hover:bg-saffron-dark text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 shadow-elevated smooth-transition btn-shine w-full sm:w-auto"
            >
              Order Online
            </Button>
            <Button
              size="lg"
              onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
              className="bg-primary/20 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 smooth-transition w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-saffron-light/10 rounded-full blur-3xl animate-float hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
