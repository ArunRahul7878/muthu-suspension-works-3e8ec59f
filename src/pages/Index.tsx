import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MobileContactBar from "@/components/MobileContactBar";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 md:pb-0">
        <Hero />
        <About />
        <Services />
        <Videos />
        <Testimonials />
        <MapSection />
        <Contact />
      </main>
      <MobileContactBar />
    </>
  );
};

export default Index;
