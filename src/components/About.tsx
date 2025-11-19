import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Led by Mr. Elangovan, specialist in suspension repairs"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most vehicles serviced within hours"
    },
    {
      icon: Shield,
      title: "6-Month Warranty",
      description: "All reconditioned shocks backed by warranty"
    },
    {
      icon: CheckCircle,
      title: "No Unnecessary Changes",
      description: "We fix only what's needed"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About Muthu Suspension Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>
              Muthu Suspension Works is led by <strong>Mr. Elangovan</strong>, a specialist with over 25 years of hands-on experience in suspension repairs and shock absorber reconditioning.
            </p>
            <p>
              We focus on accurate diagnosis, honest recommendations, and same-day service for most vehicles. Every reconditioned shock absorber undergoes replacement of worn components, gas charging, and full restoration of performance — backed by a 6-month warranty.
            </p>
            <p className="font-semibold text-foreground">
              We fix only what's needed. No unnecessary part changes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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