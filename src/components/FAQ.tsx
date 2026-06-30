import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I know if my car needs suspension or shock absorber work?",
    a: "Watch for these signs: the car keeps bouncing up and down after going over a bump or pothole, knocking or rattling sounds on bad roads, the car leaning to one side, or your tyres wearing out unevenly. If you notice any of these, bring it in for a free check.",
  },
  {
    q: "Do you recondition shock absorbers, or only replace them?",
    a: "Reconditioning is our specialty — in many cases we can restore your existing shock absorbers to like-new performance at a fraction of the cost of new ones. If a part is truly beyond repair, we'll tell you honestly.",
  },
  {
    q: "What suspension services do you offer?",
    a: "Shock absorber reconditioning, driveshaft service, steering rack service, and replacement of struts, bushes, ball joints, link rods and more.",
  },
  {
    q: "Which cars do you service?",
    a: "We service most cars on Indian roads — from small hatchbacks to popular SUVs. We don't take premium luxury brands for servicing yet. For parts replacement, we can work on almost any car as long as the spares are available.",
  },
  {
    q: "How long will it take?",
    a: "Most shock absorber and suspension jobs are finished the same day. For bigger work, or if a part needs to be ordered, we'll tell you how long it will take before we start.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — we give a 6-month warranty on our shock absorber reconditioning work.",
  },
  {
    q: "How much will it cost?",
    a: "It depends on your car and what it needs, so we don't guess a price over the phone. We inspect the car, explain exactly what's required, and give you a clear estimate before doing any work — and we never do work that isn't needed.",
  },
  {
    q: "Do I need an appointment, or can I just come?",
    a: "Both are fine. You can walk in during business hours, or message us on WhatsApp first so we can keep your wait short.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our suspension and shock absorber services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
