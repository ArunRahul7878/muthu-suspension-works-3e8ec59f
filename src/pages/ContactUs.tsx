import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Navigation, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import MobileContactBar from "@/components/MobileContactBar";
import Hours from "@/components/Hours";
import { contact } from "@/config/contact";

const CANONICAL = "https://muthususpensionworks.com/contact-us";
const ADDRESS =
  "APJ Abdul Kalam Cross St, Angalamman Nagar, Nagalkeni, Chromepet, Chennai, Tamil Nadu 600042";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muthu Suspension Works",
  image:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/kdoWJbKjd4Ms7DyKUA1CgXVaHuh1/social-images/social-1763591116986-MSW.png",
  url: CANONICAL,
  telephone: "+919884326229",
  email: "muthususpensionworks@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "APJ Abdul Kalam Cross St, Angalamman Nagar, Nagalkeni",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600042",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", "latitude": "12.962718", "longitude": "80.131050" },
  areaServed: { "@type": "City", name: "Chennai" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:30", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
  ],
};

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "Your message is ready to send." });
    setTimeout(() => setSending(false), 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact Muthu Suspension Works | Chennai</title>
        <meta
          name="description"
          content="Get in touch with Muthu Suspension Works in Chennai for expert automotive suspension diagnostics, repairs, and service."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Contact Muthu Suspension Works | Chennai" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:description"
          content="Get in touch with Muthu Suspension Works in Chennai for expert automotive suspension diagnostics, repairs, and service."
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen pb-24 md:pb-0 bg-background">
        <section className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-12 md:py-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Contact Muthu Suspension Works
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted suspension &amp; shock absorber specialists in Chromepet, Chennai — call, message,
              or drop by the workshop.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-10">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full"><Phone className="w-6 h-6 text-primary" /></div>
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href={contact.phoneHref} className="text-muted-foreground hover:text-primary">{contact.phone}</a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full"><Mail className="w-6 h-6 text-primary" /></div>
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary break-words">{contact.email}</a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full"><MapPin className="w-6 h-6 text-primary" /></div>
                </div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">{ADDRESS}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Visit the workshop</h2>
                <p className="text-muted-foreground mb-4">{ADDRESS}</p>
                <div className="rounded-lg overflow-hidden border border-border shadow-sm h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps?q=Muthu+Suspension+Works,APJ+Abdul+Kalam+Cross+St,Angalamman+Nagar,Nagalkeni,Chromepet,Chennai,Tamil+Nadu+600042&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muthu Suspension Works Location"
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={contact.directionsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <Navigation className="w-4 h-4" /> Get Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp us
                    </a>
                  </Button>
                </div>
              </div>

              <Hours />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your vehicle and what you're experiencing — we'll get back to you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Car make/model and what you're noticing…" />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full inline-flex items-center gap-2">
                    <Send className="w-4 h-4" /> {sending ? "Sending…" : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <MobileContactBar />
    </>
  );
};

export default ContactUs;