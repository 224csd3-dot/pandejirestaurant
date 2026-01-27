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
    <section id="gallery" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-restaurant px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            A Glimpse of Pandeyji
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a visual tour of our restaurant, from our mouth-watering dishes 
            to our warm and welcoming dining space.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-soft gpu-accelerated ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover image-hover ${
                  index === 0 ? "h-[320px] md:h-[450px]" : "h-52 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/70 via-warm-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-5 left-5">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-full shadow-lg">
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
