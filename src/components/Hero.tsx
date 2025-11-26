import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-market.jpg";
import { Heart, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.95), hsl(var(--background) / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-sage-light/20 backdrop-blur-sm px-4 py-2 rounded-full border border-sage-light">
            <Heart className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-foreground">慈濟基金會</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            慈濟安平
            <span className="block text-sage">聯絡處</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            在這個溫暖的社區空間<br />
            我們以慈悲為懷，以愛心關懷每一個人<br />
            共同打造一個和諧共融的美好家園
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" variant="warm" className="group" asChild>
              <a href="#upcoming-event">
                了解歲末祝福
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="sage" asChild>
              <a href="#programs">探索活動課程</a>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 pt-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-sage" />
              <span>台南市安平區國平路211號</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-sage" />
              <a href="tel:06-2989111" className="hover:text-sage transition-colors">06-2989111</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
