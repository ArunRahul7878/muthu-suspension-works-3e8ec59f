import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Our skilled team brings years of experience in suspension repair and maintenance"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "We use premium parts and follow industry best practices for every job"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction and safety are our top priorities in every service we provide"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Muthu Suspension Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With years of dedicated experience in automotive suspension systems, we provide reliable and professional services to keep your vehicle running smoothly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;