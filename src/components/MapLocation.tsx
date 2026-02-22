import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const MapLocation = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            聯絡資訊
          </h2>
          <p className="text-lg text-muted-foreground">
            歡迎您來訪，我們期待與您相見
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1837!2d120.1705112!3d22.9892655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e760f691c8ae7%3A0x739c14b3e29f9ae!2z5L2b5pWZ5oWI5r-f5oWI5ZaE5LqL5qWt5Z-66YeR5pyDIOWuieW5s-iBr-e1oeiZlQ!5e0!3m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="慈濟安平聯絡處地圖"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">地址</h3>
                  <p className="text-muted-foreground">台南市安平區國平路211號</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">聯絡電話</h3>
                  <a 
                    href="tel:06-2989111" 
                    className="text-muted-foreground hover:text-sage transition-colors"
                  >
                    06-2989111
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">服務時間</h3>
                  <p className="text-muted-foreground">
                    每天：07:00 - 22:00
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-sage/10 border-sage/20">
              <h3 className="font-semibold text-foreground mb-3">交通方式</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  <span>公車：搭乘19路或77路至「國平路口」站下車，步行即可到達（<a href="https://2384.tainan.gov.tw" target="_blank" rel="noopener noreferrer" className="text-sage underline hover:text-sage-dark">查詢公車路線</a>）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-1">•</span>
                  <span>自行開車：備有停車空間</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
