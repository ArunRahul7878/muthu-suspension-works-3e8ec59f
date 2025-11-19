import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Led by Mr. Elangovan, a specialist in suspension repairs and shock absorber reconditioning"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Fast turnaround with accurate diagnosis and honest recommendations for most vehicles"
    },
    {
      icon: Shield,
      title: "6-Month Warranty",
      description: "Full restoration with replacement of worn components and gas charging included"
    },
    {
      icon: Wrench,
      title: "No Unnecessary Changes",
      description: "We fix only what's needed — honest work focused on what actually requires attention"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About Muthu Suspension Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Muthu Suspension Works is led by <strong>Mr. Elangovan</strong>, a specialist with over 25 years of hands-on experience in suspension repairs and shock absorber reconditioning.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            We focus on accurate diagnosis, honest recommendations, and same-day service for most vehicles. 
            Every reconditioned shock absorber undergoes replacement of worn components, gas charging, and full restoration of performance — backed by a 6-month warranty.
          </p>
          <p className="text-xl font-semibold text-foreground max-w-2xl mx-auto mt-6">
            We fix only what's needed. No unnecessary part changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">
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