import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul M.",
    rating: 5,
    text: "Best vegetarian food in Vadodara! The paneer dishes are absolutely delicious and the portions are generous. Highly recommend for families.",
    tags: ["Food Quality", "Hygiene"],
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "As a student, I appreciate the affordable prices without compromising on taste. The owner is very friendly and makes you feel at home.",
    tags: ["Price", "Service"],
  },
  {
    name: "Amit P.",
    rating: 4,
    text: "Authentic Punjabi flavors! The thali is value for money and the restaurant maintains excellent hygiene standards.",
    tags: ["Punjabi", "Value"],
  },
  {
    name: "Sneha K.",
    rating: 5,
    text: "We visit regularly as a family. Consistent quality, clean environment, and the staff is always welcoming. A trusted place!",
    tags: ["Family-friendly", "Consistent"],
  },
];

const reviewTags = [
  { label: "Hygiene", count: 45 },
  { label: "Food Quality", count: 62 },
  { label: "Price", count: 38 },
  { label: "Service", count: 41 },
  { label: "Punjabi", count: 29 },
  { label: "Family-friendly", count: 33 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="container-restaurant px-4">
        {/* Header with Rating */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            What Our Customers Say
          </h2>
          
          {/* Rating Display */}
          <div className="inline-flex flex-col items-center bg-card rounded-3xl px-10 py-8 shadow-card border border-border/50">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-serif text-6xl font-bold text-foreground">4.5</span>
              <Star className="w-12 h-12 fill-gold text-gold" />
            </div>
            <div className="flex gap-1.5 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-lg">Based on <strong className="text-foreground">180+</strong> reviews</p>
          </div>
        </div>

        {/* Review Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {reviewTags.map((tag, index) => (
            <span
              key={index}
              className="bg-card border border-border/50 rounded-full px-5 py-2.5 shadow-soft smooth-transition hover:shadow-card hover:border-primary/30"
            >
              <span className="text-foreground font-semibold">{tag.label}</span>
              <span className="text-muted-foreground ml-2">({tag.count})</span>
            </span>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-hover border border-border/50 relative gpu-accelerated"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15 group-hover:text-primary/25 transition-colors duration-300" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-saffron-light/10 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-gold text-gold"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                "{review.text}"
              </p>
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
