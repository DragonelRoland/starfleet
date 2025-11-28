import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { EventDetails } from "@/components/EventDetails";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Mission />
      <EventDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
