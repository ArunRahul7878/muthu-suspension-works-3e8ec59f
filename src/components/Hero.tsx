import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import mswLogo from "@/assets/msw-logo.png";

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
        <img 
          src={mswLogo} 
          alt="Muthu Suspension Works" 
          className="mx-auto mb-8 h-32 w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000"
        />
        <h1 className="mb-6 text-5xl font-bold text-primary-foreground md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Fixing Suspension Problems the Right Way — For Over 25 Years.
        </h1>
        <p className="mb-12 text-xl text-primary-foreground/90 md:text-2xl max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Specialized suspension repair and shock absorber reconditioning — honest work, reliable results.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          Book Free Suspension Check
        </Button>
      </div>
    </section>
  );
};

export default Hero;