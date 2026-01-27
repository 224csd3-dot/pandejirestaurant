import { useState } from "react";
import { Phone, Flame, Star, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { menuCategories, type MenuCategory, type MenuItem } from "@/data/menuData";
import { cn } from "@/lib/utils";
import OrderDialog from "@/components/OrderDialog";

const PHONE_NUMBER = "+919998006840";

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-primary/5 smooth-transition group">
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span className="text-foreground group-hover:text-primary smooth-transition font-medium truncate">
        {item.name}
      </span>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {item.isSpicy && (
          <span className="inline-flex items-center gap-1 text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
            <Flame className="w-3 h-3" />
            Spicy
          </span>
        )}
        {item.isBestseller && (
          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Best
          </span>
        )}
      </div>
    </div>
    <span className="text-primary font-bold ml-4 flex-shrink-0">₹{item.price}</span>
  </div>
);

const CategorySection = ({ category }: { category: MenuCategory }) => (
  <div className="bg-card rounded-2xl border border-border/50 overflow-hidden card-hover gpu-accelerated">
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border/50">
      <h3 className="font-serif text-xl font-bold text-foreground">{category.name}</h3>
      <p className="text-muted-foreground text-sm mt-1">{category.items.length} items</p>
    </div>
    <div className="divide-y divide-border/30">
      {category.items.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}
    </div>
  </div>
);

const FullMenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredCategories = menuCategories
    .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const totalItems = menuCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  // For mobile, show limited categories initially
  const visibleCategories = showAllCategories 
    ? menuCategories 
    : menuCategories.slice(0, 6);

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-restaurant px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our Complete Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-2">
            {totalItems}+ authentic vegetarian dishes prepared with love and tradition
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-full border-2 border-border/50 focus:border-primary bg-card text-base"
            />
          </div>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden lg:block mb-10">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-4 justify-center flex-wrap">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium text-sm smooth-transition whitespace-nowrap",
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                All Items
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full font-medium text-sm smooth-transition whitespace-nowrap",
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Category Tabs - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full font-medium text-sm smooth-transition",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border/50 text-muted-foreground"
              )}
            >
              All
            </button>
            {visibleCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-sm smooth-transition",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border/50 text-muted-foreground"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
          {!showAllCategories && menuCategories.length > 6 && (
            <button
              onClick={() => setShowAllCategories(true)}
              className="flex items-center gap-1 mx-auto mt-3 text-primary text-sm font-medium hover:underline"
            >
              Show more categories
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {filteredCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No dishes found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-card to-secondary rounded-3xl p-10 md:p-12 border border-border/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto">
              Call us directly or order online through Zomato for quick delivery
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
              <OrderDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 smooth-transition"
                >
                  Order Online
                </Button>
              </OrderDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMenuSection;
