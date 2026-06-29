import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import { contact } from "@/config/contact";

const MapSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Us Here
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Visit our workshop in Chennai
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[300px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps?q=Muthu+Suspension+Works,APJ+Abdul+Kalam+Cross+St,Angalamman+Nagar,Nagalkeni,Chromepet,Chennai,Tamil+Nadu+600042&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, height: "100%", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muthu Suspension Works Location"
            ></iframe>
          </div>
          <div className="mt-4 md:mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
            >
              <a
                href={contact.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
