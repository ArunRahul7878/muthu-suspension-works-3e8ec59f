import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, Search, Gauge, Cog, Replace } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Shock Absorber Reconditioning",
      description: "Replacement of worn components, gas charging, and full restoration of performance. 6-month warranty included."
    },
    {
      icon: Wrench,
      title: "Suspension Repairs",
      description: "Fixes clunks, instability, vibrations, and uneven handling."
    },
    {
      icon: Search,
      title: "Suspension Inspections",
      description: "Accurate diagnosis of noise, imbalance, wear, and safety issues."
    },
    {
      icon: Cog,
      title: "Lower Arm Bush Replacement",
      description: "Hydraulic press-fit installation for stable, long-lasting performance."
    },
    {
      icon: Gauge,
      title: "Steering Rack & Driveshaft Repairs",
      description: "Smoother steering with reduced stiffness, jerks, and noise."
    },
    {
      icon: Replace,
      title: "Suspension Part Replacement",
      description: "Tie rods, link rods, and balance rods — replaced only when necessary."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suspension services tailored to meet your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card hover:bg-muted/50"
              >
                <CardHeader className="p-5 md:p-6">
                  <div className="mb-2 md:mb-3 flex justify-center">
                    <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl text-center text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-muted-foreground text-center text-sm">
                    {service.description}
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

export default Services;
