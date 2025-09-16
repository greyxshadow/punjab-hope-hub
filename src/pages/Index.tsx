import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import StoriesSection from "@/components/StoriesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <ServicesSection />
      <ImpactSection />
      <StoriesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
