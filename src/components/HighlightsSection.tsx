import { Leaf, Shield, UtensilsCrossed, Car, Truck, Wallet } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    description: "Authentic North Indian vegetarian cuisine with no compromise on taste",
  },
  {
    icon: Shield,
    title: "Hygienic Kitchen",
    description: "Clean, sanitized kitchen with strict food safety standards",
  },
  {
    icon: UtensilsCrossed,
    title: "Dine-in Experience",
    description: "Comfortable family-friendly seating for a memorable meal",
  },
  {
    icon: Car,
    title: "Drive-Through",
    description: "Quick and convenient service without leaving your vehicle",
  },
  {
    icon: Truck,
    title: "No-Contact Delivery",
    description: "Safe doorstep delivery with contactless payment options",
  },
  {
    icon: Wallet,
    title: "Student-Friendly Prices",
    description: "Quality food at pocket-friendly rates (₹200-400 per person)",
  },
];

const HighlightsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-restaurant px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Quality You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
