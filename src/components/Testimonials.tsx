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
    <section className="py-20 bg-muted/30">
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
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="w-12 h-12 text-primary/20 mb-6" />
                      <p className="text-xl md:text-2xl text-foreground mb-6 italic">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
