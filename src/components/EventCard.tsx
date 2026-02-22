import { Calendar, Clock, Drum, Leaf, Heart, Coins, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import springFestivalImage from "@/assets/spring-festival-2025.jpg";

const EventCard = () => {
  return (
    <section id="upcoming-event" className="py-20 bg-gradient-to-b from-background to-sage-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-warm-amber" />
            <span className="text-sm font-medium text-warm-amber">近期活動</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">新春元宵園遊會</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            新春走春，一起來迎福，把幸福帶回家
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-sage-light/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${springFestivalImage})` }}
              />

              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  新春迎福，歡迎闔家一起來走春，感受溫暖與歡喜的氛圍。
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-sage">
                    <Heart className="w-5 h-5" />
                    活動內容
                  </h3>

                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Drum className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">鼓動大愛</span>
                        <p className="text-sm text-muted-foreground">以鼓聲傳遞愛與力量</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Leaf className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">無痕蔬食市集</span>
                        <p className="text-sm text-muted-foreground">友善大地的美味蔬食</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-sage-light/10 hover:bg-sage-light/20 transition-colors">
                      <Coins className="w-5 h-5 text-warm-amber mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">共善竹筒歲月初心</span>
                        <p className="text-sm text-muted-foreground">日存善念，匯聚愛的力量</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-sage">
                    <Clock className="w-4 h-4" />
                    活動時間
                  </div>
                  <div className="pl-6 space-y-1">
                    <p className="font-medium text-foreground">2/28 (六)</p>
                    <p className="text-sm text-muted-foreground">• 上午 09:00 ~ 下午 13:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-lg bg-warm-amber/10 text-sm text-muted-foreground">
                  <UtensilsCrossed className="w-4 h-4 text-warm-amber mt-0.5 flex-shrink-0" />
                  <span>響應無痕生活，請自備環保餐具、碗筷及杯子</span>
                </div>

                <Button
                  variant="warm"
                  size="lg"
                  className="w-full group"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/share/p/1JyHfaL4uY/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    了解更多
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
