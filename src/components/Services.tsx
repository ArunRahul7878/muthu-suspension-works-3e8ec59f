import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Drill, CheckCircle, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Suspension Repair",
      description: "Complete repair services for all types of suspension systems including shocks, struts, and springs"
    },
    {
      icon: Drill,
      title: "Component Replacement",
      description: "Professional replacement of worn or damaged suspension components with quality parts"
    },
    {
      icon: CheckCircle,
      title: "Inspection & Maintenance",
      description: "Thorough inspection and preventive maintenance to ensure optimal suspension performance"
    },
    {
      icon: Package,
      title: "Custom Installations",
      description: "Expert installation of aftermarket suspension upgrades and performance enhancements"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suspension services tailored to meet your vehicle's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg bg-service-card hover:bg-service-hover"
              >
                <CardHeader>
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
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