import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Videos />
      <Testimonials />
      <MapSection />
      <Contact />
    </main>
  );
};

export default Index;
