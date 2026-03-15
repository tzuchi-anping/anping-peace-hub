import { Calendar, Clock, Leaf, ExternalLink, Store, UtensilsCrossed, Train, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  TZUCHI_TRAIN_REGISTRATION_URL,
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_REGISTRATION_DEADLINE,
} from "@/lib/constants";
import plantopiaImage from "@/assets/plantopia-20260411.png";
import kidMarketImage from "@/assets/kid-20260411.jpg";

const EventCard = () => {
  return (
    <section id="upcoming-event" className="py-20 bg-gradient-to-b from-background to-sage-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-warm-amber" />
            <span className="text-sm font-medium text-warm-amber">近期活動</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            植托邦蔬食市集 × 小老闆市集
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            以「蔬食護生、環保永續」為核心，打造蔬食者盡情徜徉的饗食天堂。攜手小老闆市集，讓孩子透過擺攤延續物命、學習規劃與珍惜，大手牽小手一起愛地球。
          </p>
        </div>

        {/* Tzu Chi Train Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden border-sage/20 shadow-xl bg-gradient-to-r from-sage/5 via-sage-light/10 to-warm-amber/5">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center">
                  <Train className="w-10 h-10 text-sage" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-warm-amber">熱烈報名中</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  2026 安平聯區慈濟列車
                </h3>
                <p className="text-lg text-sage font-semibold">花蓮「心」履行 — 兩天一夜心靈之旅</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {TZUCHI_TRAIN_EVENT_DATE}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {TZUCHI_TRAIN_REGISTRATION_DEADLINE}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="warm" size="lg" className="group" asChild>
                  <a
                    href={TZUCHI_TRAIN_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="w-4 h-4" />
                    立即報名
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link to="/tzuchi-train">
                    了解更多
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="overflow-hidden border-sage-light/20 shadow-lg bg-sage/5">
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-sage" />
                  <span className="font-bold text-lg">2026 / 04 / 11（六）</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sage" />
                  <span className="font-bold text-lg">14:00 – 19:00</span>
                  <span className="text-sm text-muted-foreground">（小老闆市集至 17:00）</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-warm-amber/15 text-warm-amber font-semibold">
                <UtensilsCrossed className="w-5 h-5 flex-shrink-0" />
                <span>響應無痕生活，請自備環保餐具、碗筷及杯子</span>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-sage-light/20 shadow-lg flex flex-col">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={plantopiaImage}
                  alt="植托邦蔬食市集海報"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-sage" />
                  植托邦蔬食市集
                </h3>
                <div className="flex flex-col gap-3 mt-auto">
                  <Button variant="warm" size="lg" className="w-full group" asChild>
                    <a
                      href="https://tally.so/r/1AXodW"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Store className="w-4 h-4" />
                      我要擺攤
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full group" asChild>
                    <a
                      href="https://www.instagram.com/plantopia2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      了解更多
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-sage-light/20 shadow-lg flex flex-col">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={kidMarketImage}
                  alt="小老闆市集海報"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Store className="w-5 h-5 text-warm-amber" />
                  小老闆市集
                </h3>
                <div className="flex flex-col gap-3 mt-auto">
                  <Button variant="warm" size="lg" className="w-full group" asChild>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfw-P_T6gp_9yTjd8iN4AvakCGA4SzFbDaLkAaKYh1M_CiJaA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Store className="w-4 h-4" />
                      我要擺攤
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full group" asChild>
                    <a
                      href="https://www.facebook.com/share/1DDd8VZjqh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      了解更多
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
