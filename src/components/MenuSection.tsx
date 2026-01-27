import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import paneerDish from "@/assets/paneer-dish.jpg";
import paneerAngara from "@/assets/paneer-angara.jpg";
import paratha from "@/assets/paratha.jpg";
import thali from "@/assets/thali.jpg";

const popularDishes = [
  {
    name: "Paneer Begum Bahaar",
    description: "Creamy and rich paneer curry with aromatic spices, a house specialty",
    image: paneerDish,
    tag: "Bestseller",
  },
  {
    name: "Paneer Angara",
    description: "Charcoal-grilled paneer in spicy red gravy with smoky flavors",
    image: paneerAngara,
    tag: "Spicy",
  },
  {
    name: "Stuffed Paratha",
    description: "Buttery, flaky parathas stuffed with seasonal vegetables",
    image: paratha,
    tag: "Popular",
  },
  {
    name: "Special Thali",
    description: "Complete meal with dal, sabzi, rice, roti, papad, and sweet",
    image: thali,
    tag: "Value",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-secondary">
      <div className="container-restaurant px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our most loved Punjabi-style vegetarian dishes, prepared with 
            fresh ingredients and authentic recipes passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularDishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {dish.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-soft border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
            Want to see our full menu?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us or visit us to explore our complete range of authentic vegetarian dishes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.open("tel:+919998006840")}
              className="bg-primary text-primary-foreground hover:bg-saffron-dark"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call for Menu
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
