import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
