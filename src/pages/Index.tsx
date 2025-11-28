import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Lore } from "@/components/Lore";
import { EventDetails } from "@/components/EventDetails";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Mission />
      <Lore />
      <Team />
      <EventDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
