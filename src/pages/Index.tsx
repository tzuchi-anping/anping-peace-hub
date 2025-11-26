import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Programs from "@/components/Programs";
import SocialFeed from "@/components/SocialFeed";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EventCard />
      <Programs />
      <SocialFeed />
      <MapLocation />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
