import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
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
      <UpcomingEvents />
      <Programs />
      <SocialFeed />
      <MapLocation />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
