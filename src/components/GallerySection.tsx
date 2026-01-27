import heroFood from "@/assets/hero-food.jpg";
import paneerDish from "@/assets/paneer-dish.jpg";
import paneerAngara from "@/assets/paneer-angara.jpg";
import paratha from "@/assets/paratha.jpg";
import thali from "@/assets/thali.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const galleryImages = [
  { src: heroFood, alt: "Indian vegetarian thali spread", category: "Food" },
  { src: paneerDish, alt: "Paneer curry dish", category: "Dishes" },
  { src: restaurantInterior, alt: "Restaurant dining area", category: "Ambience" },
  { src: paneerAngara, alt: "Paneer Angara", category: "Dishes" },
  { src: paratha, alt: "Stuffed paratha with butter", category: "Food" },
  { src: thali, alt: "Special vegetarian thali", category: "Thali" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-restaurant px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse of Pandeyji
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a visual tour of our restaurant, from our mouth-watering dishes 
            to our warm and welcoming dining space.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl shadow-soft ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 ? "h-[300px] md:h-[400px]" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
