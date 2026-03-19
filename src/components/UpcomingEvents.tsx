import * as React from "react";
import {
  Calendar,
  Clock,
  Heart,
  ArrowRight,
  Leaf,
  Store,
  ExternalLink,
  UtensilsCrossed,
  MapPin,
  Footprints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import posterTrain from "@/assets/tzuchi-train-2026.png";
import posterPilgrimage from "@/assets/pilgrimage-2026.png";
import plantopiaImage from "@/assets/plantopia-20260411.png";
import kidMarketImage from "@/assets/kid-20260411.jpg";
import {
  TZUCHI_TRAIN_REGISTRATION_URL,
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_REGISTRATION_DEADLINE,
} from "@/lib/constants";

const SLIDE_COUNT = 3;

const SLIDE_CARD_CLASS =
  "overflow-hidden border-sage/20 shadow-xl bg-gradient-to-r from-sage/5 via-sage-light/10 to-warm-amber/5";

const UpcomingEvents = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <section
      id="upcoming-event"
      className="py-20 bg-gradient-to-b from-background to-sage-light/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <span className="section-eyebrow">近期活動</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            活動預告
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {/* Slide 1: 朝山經行 */}
              <CarouselItem>
                <PilgrimageSlide />
              </CarouselItem>

              {/* Slide 2: 植托邦蔬食市集 × 小老闆市集 */}
              <CarouselItem>
                <PlantopiaSlide />
              </CarouselItem>

              {/* Slide 3: 慈濟列車 */}
              <CarouselItem>
                <TzuChiTrainSlide />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-sage w-6"
                    : "bg-sage/30 hover:bg-sage/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Slide: 朝山經行 ─── */
const PilgrimageSlide = () => (
  <Card className={SLIDE_CARD_CLASS}>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 lg:w-1/3 flex-shrink-0">
        <div className="overflow-hidden h-full">
          <img
            src={posterPilgrimage}
            alt="2026 朝山經行海報"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
        <div className="inline-flex items-center gap-2 bg-sage/10 px-3 py-1 rounded-full w-fit">
          <Footprints className="w-3.5 h-3.5 text-sage" />
          <span className="text-xs font-medium text-sage">慈濟60周年</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          朝山經行
        </h3>
        <p className="text-lg text-sage font-semibold">
          六十行願，一念初心
        </p>
        <p className="text-muted-foreground leading-relaxed">
          在這特別的時刻，邀請您用雙腳走一段路，在步步經行中，與心對話、與法相應。
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-sage" />
            2026/04/12（日）
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-sage" />
            15:00 ~ 17:30
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sage" />
            慈濟安平聯絡處
          </span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground bg-sage/5 rounded-lg p-4">
          <p className="font-semibold text-foreground flex items-center gap-1.5">
            <Leaf className="w-4 h-4 text-sage" />
            活動提醒
          </p>
          <ul className="space-y-1 ml-5 list-disc">
            <li>戶外經行，不脫鞋，請穿著舒適包鞋</li>
            <li>建議穿著：長袖藍衣藍褲或灰衣藍褲</li>
            <li>攜帶物品：輕便背包、水杯、個人藥品</li>
            <li>雨天備案：移至佛堂禮拜《三十七助道品》（請攜帶襪套）</li>
          </ul>
        </div>
      </div>
    </div>
  </Card>
);

/* ─── Market sub-card (used by PlantopiaSlide) ─── */
const MarketCard = ({ image, alt, registerUrl, infoUrl }: {
  image: string; alt: string; registerUrl: string; infoUrl: string;
}) => (
  <div className="space-y-3">
    <div className="aspect-[3/4] max-h-80 overflow-hidden rounded-lg mx-auto">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="flex gap-2">
      <Button variant="warm" size="sm" className="flex-1 group" asChild>
        <a href={registerUrl} target="_blank" rel="noopener noreferrer">
          <Store className="w-4 h-4" />
          我要擺攤
        </a>
      </Button>
      <Button variant="outline" size="sm" className="flex-1 group" asChild>
        <a href={infoUrl} target="_blank" rel="noopener noreferrer">
          了解更多
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </Button>
    </div>
  </div>
);

/* ─── Slide: 植托邦蔬食市集 × 小老闆市集 ─── */
const PlantopiaSlide = () => (
  <Card className={SLIDE_CARD_CLASS}>
    <div className="p-6 md:p-8 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          植托邦蔬食市集 × 小老闆市集
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          以「蔬食護生、環保永續」為核心，打造蔬食者盡情徜徉的饗食天堂。攜手小老闆市集，讓孩子透過擺攤延續物命、學習規劃與珍惜。
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm pt-2">
          <span className="flex items-center gap-1.5 font-semibold">
            <Calendar className="w-4 h-4 text-sage" />
            2026/04/11（六）
          </span>
          <span className="flex items-center gap-1.5 font-semibold">
            <Clock className="w-4 h-4 text-sage" />
            14:00 – 19:00
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-warm-amber/15 text-warm-amber font-semibold text-sm mt-2">
          <UtensilsCrossed className="w-4 h-4 flex-shrink-0" />
          <span>響應無痕生活，請自備環保餐具、碗筷及杯子</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <MarketCard
          image={plantopiaImage}
          alt="植托邦蔬食市集海報"
          registerUrl="https://tally.so/r/1AXodW"
          infoUrl="https://www.instagram.com/plantopia2025/"
        />
        <MarketCard
          image={kidMarketImage}
          alt="小老闆市集海報"
          registerUrl="https://docs.google.com/forms/d/e/1FAIpQLSfw-P_T6gp_9yTjd8iN4AvakCGA4SzFbDaLkAaKYh1M_CiJaA/viewform"
          infoUrl="https://www.facebook.com/share/1DDd8VZjqh/"
        />
      </div>
    </div>
  </Card>
);

/* ─── Slide: 慈濟列車 ─── */
const TzuChiTrainSlide = () => (
  <Card className={SLIDE_CARD_CLASS}>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 lg:w-1/3 flex-shrink-0">
        <Link to="/tzuchi-train" className="block overflow-hidden h-full">
          <img
            src={posterTrain}
            alt="2026 安平聯區慈濟列車海報"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
        <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-3 py-1 rounded-full w-fit">
          <span className="text-xs font-medium text-warm-amber">
            熱烈報名中
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          2026 安平聯區慈濟列車
        </h3>
        <p className="text-lg text-sage font-semibold">
          花蓮「心」履行 — 兩天一夜心靈之旅
        </p>
        <p className="text-muted-foreground leading-relaxed">
          遠離塵世的喧囂，放慢匆忙的腳步。邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮。
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-sage" />
            {TZUCHI_TRAIN_EVENT_DATE}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-sage" />
            {TZUCHI_TRAIN_REGISTRATION_DEADLINE}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
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
    </div>
  </Card>
);

export default UpcomingEvents;
