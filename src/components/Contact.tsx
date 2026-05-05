import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98843 26229",
      link: "tel:+919884326229"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@muthususpensionworks.com",
      link: "mailto:info@muthususpensionworks.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "APJ Abdul Kalam Cross St, Angalamman Nagar, Nagalkeni, Chromepet, Chennai, Tamil Nadu 600042",
      link: "https://maps.google.com/?q=APJ+Abdul+Kalam+Cross+St,Angalamman+Nagar,Nagalkeni,Chromepet,Chennai,Tamil+Nadu+600042"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to us for your suspension repair needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8 md:mb-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919884326229?partnertoken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Nzc5Njg4MjEsInVybCI6Imh0dHBzOi8vd2EubWUvOTE5ODg0MzI2MjI5IiwiaXNzIjoiR29vZ2xlIiwiZXhwIjoxNzc3OTY5MTIxfQ.ez03K9s4-u5EDPkDc1eMXftn3uo9KkDBqqRlQUoCAc3R_V5FFXHbk84hx9V5-urVn88-SsABTurRiV7qAcmphA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors break-words text-sm md:text-base"
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.details}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muthu Suspension Works. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;