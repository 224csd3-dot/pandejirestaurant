import { Star, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious Indian vegetarian thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/90 via-warm-brown/70 to-warm-brown/40"></div>
      </div>

      <div className="container-restaurant relative z-10 px-4 md:px-8 py-16">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-gold text-gold" />
              <span className="font-bold text-gold">4.5</span>
            </div>
            <span className="text-cream/90 text-sm">180+ Happy Customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Pure Vegetarian Food,
            <span className="block text-saffron-light">Made with Quality & Care</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed">
            Experience authentic North Indian vegetarian cuisine in Vadodara. 
            Hygienic, delicious, and pocket-friendly meals for the whole family.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-cream/90">
              <Clock className="w-5 h-5 text-saffron-light" />
              <span>Opens at 11 AM</span>
            </div>
            <div className="flex items-center gap-2 text-cream/90">
              <MapPin className="w-5 h-5 text-saffron-light" />
              <span>Sayajiganj, Vadodara</span>
            </div>
            <div className="inline-flex items-center gap-2 text-cream/90">
              <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">₹200–400 per person</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-saffron-dark text-primary-foreground font-semibold text-lg px-8 shadow-elevated"
            >
              Order Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("tel:+919998006840")}
              className="border-2 border-cream/50 text-cream hover:bg-cream/10 font-semibold text-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 99980 06840
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
