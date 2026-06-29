import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle, Navigation } from "lucide-react";
import mswLogo from "@/assets/msw-logo.png";
import { contact } from "@/config/contact";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Featured", href: "#featured" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow",
        scrolled ? "shadow-md border-b border-border" : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <a
          href="#top"
          onClick={scrollTop}
          className="flex items-center gap-2 shrink-0"
          aria-label="Muthu Suspension Works — back to top"
        >
          <img src={mswLogo} alt="" className="h-9 w-auto" />
          <span className="font-bold text-sm sm:text-base text-foreground leading-tight hidden xs:inline sm:inline">
            Muthu Suspension Works
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={contact.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call
            </a>
          </Button>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={contact.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted inline-flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </a>
                </SheetClose>
                <div className="h-px bg-border my-2" />
                <Button asChild variant="outline" className="justify-start">
                  <a href={contact.phoneHref} className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call {contact.phone}
                  </a>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 justify-start">
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;