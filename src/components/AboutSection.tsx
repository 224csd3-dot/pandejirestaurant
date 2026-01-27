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
      <div className="container-restaurant px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated smooth-scale">
              <img
                src={restaurantImage}
                alt="Pandeyji Restaurant interior"
                className="w-full h-[400px] lg:h-[550px] object-cover image-hover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-saffron-light/10 rounded-3xl -z-10 animate-pulse-soft"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-forest-light/10 rounded-3xl -z-10"></div>
            
            {/* Stats badge */}
            <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-md rounded-2xl p-5 shadow-elevated border border-border/50">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-primary">4.5★</div>
                  <div className="text-xs text-muted-foreground font-medium">Rating</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-foreground">180+</div>
                  <div className="text-xs text-muted-foreground font-medium">Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Taste of Home in Every Bite
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to <strong className="text-foreground">Pandeyji Restaurant</strong> – 
              Vadodara's beloved destination for authentic North Indian vegetarian cuisine. 
              We take pride in serving meals that remind you of home-cooked goodness, 
              prepared with fresh ingredients and traditional recipes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our commitment to hygiene, quality, and generous portions has earned us 
              the trust of families, students, and food lovers alike. Whether you're craving 
              comfort food or celebrating a special occasion, we welcome you with warmth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 smooth-transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
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
