import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventCard />
      <Programs />
      <Footer />
    </div>
  );
};

export default Index;
