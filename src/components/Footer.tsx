import { MapPin, Phone, Facebook, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sage text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Heart className="w-6 h-6" />
              慈濟安平聯絡處
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              以慈悲為懷，以愛心關懷每一個人，共同打造一個和諧共融的美好家園。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">聯絡資訊</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>台南市安平區國平路211號</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:06-2989111" className="hover:text-primary-foreground transition-colors">
                  06-2989111
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">關注我們</h4>
            <div className="flex flex-col gap-3">
              <Button 
                variant="warm"
                size="lg"
                asChild
              >
                <a 
                  href="https://tcit3.tzuchi.net/OCCD/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  立即捐款
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/40 text-primary-foreground"
                asChild
              >
                <a 
                  href="https://www.facebook.com/share/g/1CfxEx7vXM/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook 粉絲專頁
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} 慈濟基金會安平聯絡處 · 用心關懷，用愛守護</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
