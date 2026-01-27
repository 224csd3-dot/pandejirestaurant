import { Leaf, Shield, UtensilsCrossed, Car, Truck, Wallet } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    description: "Authentic North Indian vegetarian cuisine with no compromise on taste",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Hygienic Kitchen",
    description: "Clean, sanitized kitchen with strict food safety standards",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: UtensilsCrossed,
    title: "Dine-in Experience",
    description: "Comfortable family-friendly seating for a memorable meal",
    color: "text-saffron-dark",
    bg: "bg-saffron/10",
  },
  {
    icon: Car,
    title: "Drive-Through",
    description: "Quick and convenient service without leaving your vehicle",
    color: "text-forest",
    bg: "bg-forest/10",
  },
  {
    icon: Truck,
    title: "No-Contact Delivery",
    description: "Safe doorstep delivery with contactless payment options",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wallet,
    title: "Student-Friendly Prices",
    description: "Quality food at pocket-friendly rates (₹200-400 per person)",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

const HighlightsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="container-restaurant px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Quality You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-hover border border-border/50 gpu-accelerated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 smooth-transition group-hover:scale-110`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
