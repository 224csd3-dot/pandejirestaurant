import { Link } from "react-router-dom";
import { Phone, ArrowRight, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import paneerDish from "@/assets/paneer-dish.jpg";
import paneerAngara from "@/assets/paneer-angara.jpg";
import paratha from "@/assets/paratha.jpg";
import thali from "@/assets/thali.jpg";

const PHONE_NUMBER = "+919998006840";
const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";

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
      <div className="container-restaurant">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Our Menu
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-5">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Discover our most loved Punjabi-style vegetarian dishes, prepared with 
            fresh ingredients and authentic recipes passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          {popularDishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-border/50 gpu-accelerated"
            >
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className={`absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 ${dish.tagColor} text-primary-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full shadow-md`}>
                  {dish.tag}
                </span>
              </div>
              <div className="p-3 sm:p-4 md:p-5">
                <div className="flex items-start justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-bold whitespace-nowrap text-sm sm:text-base">₹{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-saffron-dark font-bold px-6 sm:px-8 md:px-10 py-5 sm:py-6 smooth-transition btn-shine group text-sm sm:text-base"
            >
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Full Menu
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-2 sm:mt-3 text-xs sm:text-sm">180+ dishes across 19 categories</p>
        </div>

        {/* Order CTA */}
        <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-border/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
              Call us directly or order online through Zomato for quick delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => window.open(`tel:${PHONE_NUMBER}`)}
                className="bg-primary text-primary-foreground hover:bg-saffron-dark font-bold px-6 sm:px-8 py-5 sm:py-6 smooth-transition btn-shine text-sm sm:text-base w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call to Order
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(ZOMATO_URL, "_blank")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-6 sm:px-8 py-5 sm:py-6 smooth-transition text-sm sm:text-base w-full sm:w-auto"
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuTeaser;
