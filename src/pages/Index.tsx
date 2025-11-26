import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Programs from "@/components/Programs";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventCard />
      <Programs />
      <SocialFeed />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
