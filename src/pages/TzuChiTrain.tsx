import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  Train,
  ExternalLink,
  Heart,
  Sunrise,
  Moon,
  Utensils,
  Camera,
  BookOpen,
  Users,
  TreePine,
  Home,
} from "lucide-react";
import posterImage from "@/assets/tzuchi-train-2026.png";
import {
  TZUCHI_TRAIN_REGISTRATION_URL,
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_REGISTRATION_DEADLINE,
} from "@/lib/constants";

const highlights = [
  { icon: BookOpen, label: "走讀大愛足跡" },
  { icon: Moon, label: "星空交心對話" },
  { icon: Home, label: "體驗靜思家風" },
  { icon: TreePine, label: "專屬寧靜時光" },
];

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  duration?: string;
  icon: typeof Clock;
  highlight?: boolean;
}

const schedules: { day: string; date: string; items: ScheduleItem[] }[] = [
  {
    day: "DAY 1",
    date: "6月27日（六）",
    items: [
      { time: "06:00", title: "台南火車站前站集合，搭乘 06:30 自強 301 車次出發", icon: MapPin, highlight: true },
      { time: "10:59", title: "抵達花蓮・入住靜思堂", icon: Home, highlight: true },
      { time: "12:00", title: "午齋・養息", icon: Utensils, duration: "90 分鐘" },
      {
        time: "13:30",
        title: "走讀四大志業・感受大愛足跡",
        description:
          "慈濟四大志業——慈善、醫療、教育、人文——是 上人以愛為基石，一磚一瓦砌起的精神工程。走入這片土地，您將親眼見證慈悲如何化為具體行動：從守護生命、陪伴苦難的慈善醫療，到作育英才、淨化人心的教育人文。每一處足跡，都承載著一個讓人動容的故事，也映照出您心中本有的善與愛。",
        icon: Heart,
        duration: "下午",
        highlight: true,
      },
      { time: "18:00", title: "藥石", icon: Utensils },
      { time: "19:00", title: "星空夜語", icon: Users },
      { time: "20:00", title: "安單就寢", icon: Moon },
    ],
  },
  {
    day: "DAY 2",
    date: "6月28日（日）",
    items: [
      { time: "06:00", title: "晨鐘・身心淨行", icon: Sunrise },
      { time: "07:00", title: "早齋", icon: Utensils },
      {
        time: "08:30",
        title: "走進靜思精舍・體悟農禪心法",
        description:
          "靜思精舍，是慈濟的心臟，也是師父們安住修行之所。師父們秉持「一日不作，一日不食」的農禪精神，以雙手勞作維持自給自足，從不仰賴外援。踏入精舍，感受喧囂世界中難得的靜謐，看見師父們如何在晨曦與暮色之間，以正念勞動詮釋最樸實、也最深刻的修行智慧。",
        icon: Sunrise,
        duration: "210 分鐘",
        highlight: true,
      },
      { time: "12:00", title: "午齋・養息", icon: Utensils },
      { time: "13:00", title: "自由活動・參訪書軒本店", icon: TreePine },
      { time: "16:01", title: "搭自強324車次法喜賦歸", icon: Train, highlight: true },
    ],
  },
];

const infoCards = [
  { icon: Calendar, label: "活動日期", value: TZUCHI_TRAIN_EVENT_DATE, iconColor: "text-sage" },
  { icon: Clock, label: "報名截止", value: TZUCHI_TRAIN_REGISTRATION_DEADLINE, iconColor: "text-sage" },
  { icon: MapPin, label: "集合地點", value: "台南火車站前站", iconColor: "text-sage" },
  { icon: Train, label: "費用", value: "全票 2,800 元", subValue: "半票 1,800 元", iconColor: "text-warm-amber" },
];

const heroBackgroundStyle = {
  background: `linear-gradient(135deg, hsl(142 35% 45% / 0.08), hsl(28 65% 60% / 0.06)), linear-gradient(to bottom, hsl(var(--background)), hsl(142 30% 95%))`,
};

const ScheduleTimeline = ({
  items,
  day,
  date,
}: {
  items: ScheduleItem[];
  day: string;
  date: string;
}) => (
  <>
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-sage text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
        {day}
      </div>
      <span className="text-lg font-semibold text-foreground">{date}</span>
    </div>
    <div className="relative">
      <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-sage-light/50" />
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-start gap-4 group relative">
            <div
              className={`relative z-10 flex-shrink-0 w-[48px] h-[48px] rounded-full flex items-center justify-center transition-all ${
                item.highlight
                  ? "bg-warm-amber text-primary-foreground shadow-md"
                  : "bg-sage-light/30 text-sage group-hover:bg-sage-light/50"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 pb-4 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm font-bold text-sage">{item.time}</span>
                {item.duration && (
                  <span className="text-xs bg-sage-light/30 text-sage-dark px-2 py-0.5 rounded-full">
                    {item.duration}
                  </span>
                )}
              </div>
              <p
                className={`text-sm mt-0.5 ${
                  item.highlight ? "font-semibold text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.title}
              </p>
              {item.description && (
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed border-l-2 border-sage-light/50 pl-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </>
);

const TzuChiTrain = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={heroBackgroundStyle} />
        <div className="absolute top-20 right-10 w-32 h-32 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-warm-amber/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sage-light/20 backdrop-blur-sm px-4 py-2 rounded-full border border-sage-light">
              <Train className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium text-foreground">
                給心放個假，踏上尋根之旅
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              2026 安平聯區
              <span className="block text-sage">慈濟列車</span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-warm-amber">
              花蓮「心」履行
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              遠離塵世的喧囂，放慢匆忙的腳步。
              <br />
              邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮，
              <br />
              感受最純粹的平靜與感動。
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="warm" className="group text-lg px-8" asChild>
                <a href={TZUCHI_TRAIN_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  立即報名
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#schedule">
                  <Clock className="w-4 h-4" />
                  查看行程
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Poster */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden border-sage-light/20 shadow-xl">
              <img
                src={posterImage}
                alt="2026 安平聯區慈濟列車海報"
                className="w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16 bg-gradient-to-b from-sage-light/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {infoCards.map(({ icon: Icon, label, value, subValue, iconColor }) => (
                <Card key={label} className="p-6 text-center border-sage-light/20 hover:shadow-lg transition-shadow">
                  <Icon className={`w-8 h-8 ${iconColor} mx-auto mb-3`} />
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-bold text-foreground mt-1">{value}</p>
                  {subValue && <p className="text-sm text-muted-foreground">{subValue}</p>}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              四大心靈亮點
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-sage-light/10 hover:bg-sage-light/20 transition-all hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                    <Icon className="w-8 h-8 text-sage" />
                  </div>
                  <span className="font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 bg-gradient-to-b from-background to-sage-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-warm-amber" />
                <span className="text-sm font-medium text-warm-amber">行程表</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                兩天一夜心靈之旅
              </h2>
              <p className="text-muted-foreground">
                從台南出發，搭乘自強號前往花蓮，展開一段充滿感動的旅程
              </p>
            </div>

            <Card className="overflow-hidden border-sage-light/20 shadow-md bg-sage/5">
              <div className="p-4 md:p-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Train className="w-5 h-5 text-sage" />
                  <span className="font-semibold">去程：自強301車次</span>
                  <span className="text-muted-foreground">06:30 台南 → 10:59 花蓮</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-5 h-5 text-warm-amber" />
                  <span className="font-semibold">回程：自強324車次</span>
                  <span className="text-muted-foreground">16:01 花蓮 → 台南</span>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {schedules.map((schedule) => (
                <Card key={schedule.day} className="p-6 md:p-8 border-sage-light/20 shadow-sm">
                  <ScheduleTimeline items={schedule.items} day={schedule.day} date={schedule.date} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-sage-light/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              「心」的旅程，從這裡開始
            </h2>
            <p className="text-lg text-muted-foreground">
              期待與您同遊！名額有限，請把握機會報名。
            </p>
            <Button size="lg" variant="warm" className="group text-lg px-10 py-6" asChild>
              <a href={TZUCHI_TRAIN_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                立即報名
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              報名截止日：2026 年 5 月 10 日，額滿提前截止
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Registration Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          variant="warm"
          size="lg"
          className="shadow-2xl hover:shadow-warm group"
          asChild
        >
          <a
            href={TZUCHI_TRAIN_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Train className="w-5 h-5 group-hover:scale-110 transition-transform" />
            立即報名
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TzuChiTrain;
