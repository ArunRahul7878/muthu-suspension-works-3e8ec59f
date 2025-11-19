import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--hero-gradient-from) / 0.95), hsl(var(--hero-gradient-to) / 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold text-primary-foreground md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Muthu Suspension Works
        </h1>
        <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Expert Suspension Solutions for Your Vehicle
        </p>
        <p className="mb-12 text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Professional suspension repair, maintenance, and installation services you can trust
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Hero;