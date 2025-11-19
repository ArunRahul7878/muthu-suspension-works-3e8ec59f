import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wrench, Search, Cog, Gauge, Layers } from "lucide-react";

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
      icon: Layers,
      title: "Suspension Part Replacement",
      description: "Tie rods, link rods, and balance rods — replaced only when necessary."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suspension solutions delivered with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-service-card hover:bg-service-hover"
              >
                <CardHeader>
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
