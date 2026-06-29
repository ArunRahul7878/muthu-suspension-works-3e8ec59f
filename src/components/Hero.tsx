import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import mswLogo from "@/assets/msw-logo.png";
import { contact } from "@/config/contact";

const Hero = () => {
  const whatsappUrl = contact.whatsappHref;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--hero-gradient-from) / 0.95), hsl(var(--hero-gradient-to) / 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <img 
          src={mswLogo} 
          alt="Muthu Suspension Works" 
          className="mx-auto mb-6 md:mb-8 h-20 md:h-32 w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000"
        />
        <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Fixing Suspension Problems the Right Way — For Over 25 Years.
        </h1>
        <p className="mb-8 md:mb-12 text-base sm:text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Specialized suspension repair and shock absorber reconditioning — honest work, reliable results.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg w-full sm:w-auto px-6 py-5 sm:px-8 sm:py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Book Free Suspension Check
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;