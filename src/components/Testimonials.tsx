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
      quote: "They reconditioned my shocks and replaced the bushes within hours. No unnecessary part changes. The ride feels brand new.",
      author: "Gokul R",
      location: "Salem"
    },
    {
      quote: "Very honest and skilled work. My car's handling improved immediately. I recommend MSW to anyone having suspension issues.",
      author: "Suresh K",
      location: "Chennai"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg bg-card">
                    <CardContent className="pt-12 pb-12 px-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Quote className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-lg text-card-foreground text-center mb-8 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-center">
                        <p className="font-semibold text-foreground text-lg">
                          {testimonial.author}
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
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
