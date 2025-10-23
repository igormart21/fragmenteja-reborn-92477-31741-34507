import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import MediaGallery from "@/components/MediaGallery";
import ImageCarousel from "@/components/ImageCarousel";
import EnvironmentalCertifications from "@/components/EnvironmentalCertifications";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Gallery />
        <MediaGallery />
        <ImageCarousel />
        <EnvironmentalCertifications />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
