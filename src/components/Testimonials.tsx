import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { contact } from "@/config/contact";

const Testimonials = () => {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Our Customers Say
        </h2>

        <div className="flex justify-center gap-1 mb-3">
          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Rated highly by car owners across Chennai on Google. Read real
          reviews from our customers, or share your own experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline">
            <a href={contact.googleListingHref} target="_blank" rel="noopener noreferrer">
              Read our Google reviews
            </a>
          </Button>
          <Button asChild>
            <a href={contact.leaveReviewHref} target="_blank" rel="noopener noreferrer">
              Leave a Google review
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
