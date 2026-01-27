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
    <section id="about" className="section-padding bg-background">
      <div className="container-restaurant px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={restaurantImage}
                alt="Pandeyji Restaurant interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Taste of Home in Every Bite
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to <strong className="text-foreground">Pandeyji Restaurant</strong> – 
              Vadodara's beloved destination for authentic North Indian vegetarian cuisine. 
              We take pride in serving meals that remind you of home-cooked goodness, 
              prepared with fresh ingredients and traditional recipes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to hygiene, quality, and generous portions has earned us 
              the trust of over <strong className="text-foreground">180+ happy customers</strong> with 
              a stellar <strong className="text-primary">4.5★ rating</strong>. Whether you're a 
              student looking for affordable meals or a family seeking wholesome dining, 
              we welcome you with open arms.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
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
