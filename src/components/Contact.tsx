import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98843 26229"],
      link: "tel:+919884326229"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@muthususpensionworks.com"],
      link: "mailto:info@muthususpensionworks.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["1, 113, Medavakkam Main Rd, Vanuvampet, Ullagaram", "Chennai, Tamil Nadu 600091"],
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch for all your suspension service needs. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const ContentWrapper = info.link ? 'a' : 'div';
            const wrapperProps = info.link ? { href: info.link } : {};
            
            return (
              <Card key={index} className="bg-primary-foreground border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8 text-center">
                  <ContentWrapper {...wrapperProps} className={info.link ? "block" : ""}>
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </ContentWrapper>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Muthu Suspension Works. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
