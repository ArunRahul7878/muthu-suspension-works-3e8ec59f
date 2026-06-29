import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "They reconditioned my shocks and replaced the bushes within hours. No unnecessary part changes. The ride feels brand new.",
      author: "Gokul R",
      location: "Salem"
    },
    {
      text: "Very honest and skilled work. My car's handling improved immediately. I recommend MSW to anyone having suspension issues.",
      author: "Suresh K",
      location: "Chennai"
    }
  ];

  return (
    <section id="reviews" className="py-12 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
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
                      <div className="text-right">
                        <p className="font-semibold text-foreground">
                          — {testimonial.author}
                        </p>
                        <p className="text-muted-foreground">
                          {testimonial.location}
                        </p>
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
      </div>
    </section>
  );
};

export default Testimonials;
