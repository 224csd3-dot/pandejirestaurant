import { CheckCircle2 } from "lucide-react";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const features = [
  "Trusted vegetarian restaurant since years",
  "Generous portions with authentic taste",
  "Friendly owner and caring staff",
  "Perfect for families, students & regular diners",
  "Consistent food quality every visit",
  "Clean and comfortable dining space",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-restaurant">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated smooth-scale">
              <img
                src={restaurantImage}
                alt="Pandeyji Restaurant interior"
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] object-cover image-hover"
              />
            </div>
            {/* Decorative elements - hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-primary/20 to-saffron-light/10 rounded-2xl sm:rounded-3xl -z-10 animate-pulse-soft"></div>
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-accent/20 to-forest-light/10 rounded-2xl sm:rounded-3xl -z-10"></div>
            
            {/* Stats badge */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-elevated border border-border/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary">4.5★</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Rating</div>
                </div>
                <div className="w-px h-8 sm:h-10 md:h-12 bg-border"></div>
                <div className="text-center">
                  <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">180+</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              About Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 leading-tight">
              A Taste of Home in Every Bite
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
              Welcome to <strong className="text-foreground">Pandeyji Restaurant</strong> – 
              Vadodara's beloved destination for authentic North Indian vegetarian cuisine. 
              We take pride in serving meals that remind you of home-cooked goodness, 
              prepared with fresh ingredients and traditional recipes.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Our commitment to hygiene, quality, and generous portions has earned us 
              the trust of families, students, and food lovers alike. Whether you're craving 
              comfort food or celebrating a special occasion, we welcome you with warmth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-secondary/50 smooth-transition"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
