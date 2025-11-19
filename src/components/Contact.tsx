import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
      details: "1, 113, Medavakkam Main Rd, Vanuvampet, Ullagaram, Chennai, Tamil Nadu 600091",
      link: "https://maps.google.com/?q=1,113,Medavakkam+Main+Rd,Vanuvampet,Ullagaram,Chennai,Tamil+Nadu+600091"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to us for your suspension repair needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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
                      className="text-muted-foreground hover:text-primary transition-colors"
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