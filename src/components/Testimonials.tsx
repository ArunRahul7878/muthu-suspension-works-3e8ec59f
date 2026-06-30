import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import { contact } from "@/config/contact";

// Update occasionally to match your Google profile.
const GOOGLE_RATING = "4.5";
const GOOGLE_REVIEW_COUNT = "96";

// IMPORTANT: replace these with REAL reviews from your Google profile
// (real reviewer name + their actual words). Add as many as you like.
const testimonials = [
  {
    text: "They reconditioned my shocks and replaced the bushes within hours. No unnecessary part changes. The ride feels brand new.",
    author: "Gokul R",
    location: "Salem",
  },
  {
    text: "Very honest and skilled work. My car's handling improved immediately. I recommend MSW to anyone having suspension issues.",
    author: "Suresh K",
    location: "Chennai",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          
            href={contact.googleListingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-bold text-foreground">{GOOGLE_RATING}</span>
            <span className="flex items-center" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              {GOOGLE_REVIEW_COUNT} Google reviews
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto px-8 md:px-0">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-6 md:p-12">
                      <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/20 mb-4 md:mb-6" />
                      <p className="text-base sm:text-lg md:text-2xl text-foreground mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex items-center gap-1" aria-hidden="true">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">— {testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location} · via Google
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button asChild variant="outline">
            <a href={contact.googleListingHref} target="_blank" rel="noopener noreferrer">
              Read all reviews on Google
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
