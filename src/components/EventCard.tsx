import { Calendar, Clock, Gift, Heart, Lightbulb, Soup, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import blessingImage from "@/assets/year-end-blessing-2025.png";

const EventCard = () => {
  const timeSlots = [
    { day: "12/20 (六)", times: ["上午10:30~11:30", "下午1:30~2:30", "下午3:30~4:30"] },
    { day: "12/21 (日)", times: ["下午1:30~2:30", "下午3:30~4:30"] }
  ];

  return (
    <section id="upcoming-event" className="py-20 bg-gradient-to-b from-background to-sage-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-warm-amber" />
            <span className="text-sm font-medium text-warm-amber">近期活動</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">歲末祝福</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在今年的尾聲，想邀你一起，放慢一下步伐
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-sage-light/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${blessingImage})` }}
              />
              
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  有時候，不必特別做什麼，只要走進一個安靜而溫暖的地方，心就能慢慢回到原來的位置。
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-sage">
                    <Gift className="w-5 h-5" />
                    在慈濟，我們準備了
                  </h3>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Heart className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">一份祝福</span>
                        <p className="text-sm text-muted-foreground">由師父親切遞上</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Soup className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">一碗熱湯</span>
                        <p className="text-sm text-muted-foreground">替你擋住冬日的寒風</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Lightbulb className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">一盞小燈</span>
                        <p className="text-sm text-muted-foreground">為心留下一道柔亮的光</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <ShoppingBag className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">植托邦市集</span>
                        <p className="text-sm text-muted-foreground">散步途中遇見的驚喜</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-sage">
                    <Clock className="w-4 h-4" />
                    活動時間
                  </div>
                  {timeSlots.map((slot) => (
                    <div key={slot.day} className="pl-6 space-y-1">
                      <p className="font-medium text-foreground">{slot.day}</p>
                      {slot.times.map((time) => (
                        <p key={time} className="text-sm text-muted-foreground">• {time}</p>
                      ))}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="warm" 
                  size="lg" 
                  className="w-full group"
                  asChild
                >
                  <a 
                    href="https://forms.gle/9YZBUFn9ZBs1zxYM7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    立即報名參加
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
