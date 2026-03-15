import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-market.jpg";
import { Heart, MapPin, Phone, Facebook } from "lucide-react";

const Hero = () => {
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background image — more visible now */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Refined overlay: strong left, fades right so image shows */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(105deg, hsl(var(--background) / 0.96) 0%, hsl(var(--background) / 0.85) 45%, hsl(var(--background) / 0.45) 75%, hsl(var(--background) / 0.2) 100%)",
        }}
      />
      {/* Soft sage tint at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-7">
          {/* Eyebrow */}
          <div className="animate-fade-in">
            <span className="section-eyebrow">慈濟基金會 · 台南安平</span>
          </div>

          {/* Heading */}
          <div className="animate-fade-in-delay-1">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              慈濟安平
              <span className="block text-sage mt-1">聯絡處</span>
            </h1>
          </div>

          {/* Sub-heading */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-2">
            在這個溫暖的社區空間<br />
            我們以慈悲為懷，以愛心關懷每一個人<br />
            共同打造一個和諧共融的美好家園
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-delay-3">
            <Button size="lg" variant="warm" className="group" asChild>
              <a href="#upcoming-event">
                了解近期活動
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="sage" asChild>
              <a href="#programs">探索活動課程</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group bg-background/60 backdrop-blur-sm"
              onClick={handleFacebookShare}
            >
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              分享
            </Button>
          </div>

          {/* Info strip */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-muted-foreground animate-fade-in-delay-3 border-t border-border/40 pt-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
              <span>台南市安平區國平路211號</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sage flex-shrink-0" />
              <a href="tel:06-2989111" className="hover:text-sage transition-colors">
                06-2989111
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
