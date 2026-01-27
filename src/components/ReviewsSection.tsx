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
    <section id="reviews" className="section-padding bg-background">
      <div className="container-restaurant px-4">
        {/* Header with Rating */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          
          {/* Rating Display */}
          <div className="inline-flex flex-col items-center bg-secondary rounded-2xl px-8 py-6 shadow-soft">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif text-5xl font-bold text-foreground">4.5</span>
              <Star className="w-10 h-10 fill-gold text-gold" />
            </div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground">Based on <strong className="text-foreground">180+</strong> reviews</p>
          </div>
        </div>

        {/* Review Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {reviewTags.map((tag, index) => (
            <span
              key={index}
              className="bg-card border border-border rounded-full px-4 py-2 text-sm shadow-soft"
            >
              <span className="text-foreground font-medium">{tag.label}</span>
              <span className="text-muted-foreground ml-2">({tag.count})</span>
            </span>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full"
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
