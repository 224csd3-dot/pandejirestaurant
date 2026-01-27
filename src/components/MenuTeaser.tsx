import { Link } from "react-router-dom";
import { Phone, ArrowRight, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import paneerDish from "@/assets/paneer-dish.jpg";
import paneerAngara from "@/assets/paneer-angara.jpg";
import paratha from "@/assets/paratha.jpg";
import thali from "@/assets/thali.jpg";

const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";
const PHONE_NUMBER = "+919998006840";

const popularDishes = [
  {
    name: "Paneer Butter Masala",
    description: "Creamy and rich paneer curry with aromatic spices",
    image: paneerDish,
    tag: "Bestseller",
    tagColor: "bg-primary",
    price: 219,
  },
  {
    name: "Paneer Angara",
    description: "Charcoal-grilled paneer in spicy red gravy",
    image: paneerAngara,
    tag: "Spicy",
    tagColor: "bg-destructive",
    price: 259,
  },
  {
    name: "Stuffed Paratha",
    description: "Buttery parathas stuffed with seasonal vegetables",
    image: paratha,
    tag: "Popular",
    tagColor: "bg-accent",
    price: 99,
  },
  {
    name: "Punjabi Thali",
    description: "Complete meal with dal, sabzi, rice, roti & more",
    image: thali,
    tag: "Value",
    tagColor: "bg-gold",
    price: 229,
  },
];

const MenuTeaser = () => {
  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-restaurant px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our most loved Punjabi-style vegetarian dishes, prepared with 
            fresh ingredients and authentic recipes passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {popularDishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border/50 gpu-accelerated"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className={`absolute top-4 left-4 ${dish.tagColor} text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md`}>
                  {dish.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-bold whitespace-nowrap">₹{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mb-12">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-saffron-dark font-bold px-10 smooth-transition btn-shine group"
            >
              <Utensils className="w-5 h-5 mr-2" />
              View Full Menu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-3 text-sm">180+ dishes across 19 categories</p>
        </div>

        {/* Order CTA */}
        <div className="relative bg-gradient-to-br from-card to-secondary rounded-3xl p-10 md:p-12 border border-border/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto">
              Call us directly or order online through Zomato for quick delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                className="bg-primary text-primary-foreground hover:bg-saffron-dark font-bold px-8 smooth-transition btn-shine"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(ZOMATO_URL, "_blank")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 smooth-transition"
              >
                Order on Zomato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuTeaser;
