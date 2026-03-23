import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  Train,
  Sunrise,
  Moon,
  Utensils,
  Users,
  TreePine,
  Home,
  BookOpen,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import posterImage from "@/assets/tzuchi-train-2026.png";
import {
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
      { time: "10:59", title: "抵達花蓮・入住全球慈濟人寮房", icon: Home, highlight: true },
      { time: "12:00", title: "午齋・養息", icon: Utensils, duration: "90 分鐘" },
      {
        time: "13:30",
        title: "走讀四大志業・感受大愛足跡",
        description:
          "慈濟四大志業「慈善、醫療、教育、人文」是 上人以愛為基石，一磚一瓦砌起的精神工程。走入這片園區，親眼見證慈悲如何化為具體行動：從守護生命、陪伴苦難的慈善醫療，到作育英才、淨化人心的教育人文。每一處足跡，都承載著一個讓人動容的故事，也映照出您心中本有的善與愛。",
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
        title: "走進靜思精舍・體驗靜思家風",
        description:
          "靜思精舍是全球慈濟人的心靈故鄉，靜思法脈的源頭，師父們秉持「一日不作，一日不食」的農禪精神，以雙手勞作自給自足，從不仰賴外援。走入精舍，感受喧囂世界中難得的靜謐，體會那份在晨曦與暮色之間，以正念勞動詮釋出的樸實修行智慧。",
        icon: Sunrise,
        duration: "210 分鐘",
        highlight: true,
      },
      { time: "12:00", title: "午齋・養息", icon: Utensils },
      { time: "13:00", title: "自由活動・參訪書軒本店", icon: TreePine },
      { time: "16:01", title: "搭自強324車次法喜賦歸，20:31 抵達台南", icon: Train, highlight: true },
    ],
  },
];

const infoItems = [
  { icon: Calendar, label: "活動日期", value: TZUCHI_TRAIN_EVENT_DATE },
  { icon: Clock, label: "報名截止", value: TZUCHI_TRAIN_REGISTRATION_DEADLINE },
  { icon: MapPin, label: "集合地點", value: "台南火車站前站" },
  { icon: Train, label: "費用", value: "全票 2,800 / 半票 1,800 元" },
];

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
    <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-border/50">
      <span
        className="text-4xl font-black text-sage/20 leading-none select-none"
        style={{ fontFamily: "'Noto Serif TC', serif" }}
      >
        {day.split(" ")[1]}
      </span>
      <div>
        <div className="text-xs font-bold tracking-widest text-sage uppercase">{day}</div>
        <div className="text-base font-semibold text-foreground">{date}</div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-sage-light/40" />
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-start gap-4 group relative mb-1">
            <div
              className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                item.highlight
                  ? "bg-warm-amber text-white shadow-sm"
                  : "bg-background border border-sage-light/60 text-sage group-hover:border-sage/60"
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 pb-5 pt-1.5">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="font-mono text-sm font-bold text-sage tracking-wider">{item.time}</span>
                {item.duration && (
                  <span className="text-xs bg-sage/8 border border-sage-light/40 text-sage-dark px-1.5 py-0.5 rounded">
                    {item.duration}
                  </span>
                )}
              </div>
              <p className={`text-base leading-snug ${item.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                {item.title}
              </p>
              {item.description && (
                <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed pl-3 border-l border-sage-light/60 italic">
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

      {/* ── Hero: editorial split layout ── */}
      <section className="relative overflow-hidden bg-background">
        {/* Subtle background aura */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-br from-sage/5 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-gradient-to-tl from-warm-amber/4 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="min-h-[80vh] flex items-center">
            <div className="w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-24">

              {/* Left: Text */}
              <div className="space-y-8">
                <div className="animate-fade-in">
                  <span className="section-eyebrow">2026 安平聯區 · 兩天一夜</span>
                </div>

                <div className="animate-fade-in-delay-1 space-y-3">
                  <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight"
                  >
                    慈濟列車
                  </h1>
                  <p className="text-2xl md:text-3xl font-bold text-warm-amber tracking-wide">
                    花蓮「心」履行
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-md animate-fade-in-delay-2">
                  遠離塵世的喧囂，放慢匆忙的腳步。邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮，感受最純粹的平靜與感動。
                </p>

                <div className="flex flex-wrap gap-3 animate-fade-in-delay-3">
                  <Button size="lg" variant="outline" asChild>
                    <a href="#schedule">
                      <Clock className="w-4 h-4" />
                      查看行程
                    </a>
                  </Button>
                </div>

                {/* Quick info strip */}
                <div className="grid grid-cols-2 gap-3 pt-2 animate-fade-in-delay-3">
                  {infoItems.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-2.5">
                      <Icon className="w-4 h-4 text-sage flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-xs text-muted-foreground/70 uppercase tracking-wide">{label}</div>
                        <div className="text-base font-medium text-foreground">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Poster */}
              <div className="animate-fade-in-delay-2">
                <div className="relative max-w-sm mx-auto md:mx-0 md:ml-auto">
                  {/* Decorative shadow/glow behind poster */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-sage/10 to-warm-amber/10 rounded-3xl blur-2xl" />
                  <Card className="relative overflow-hidden border-sage-light/30 shadow-2xl rounded-2xl">
                    <img
                      src={posterImage}
                      alt="2026 安平聯區慈濟列車海報"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CountdownTimer />

      {/* ── Highlights ── */}
      <section className="py-14 border-y border-border/40 bg-sage/3">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border/40">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 px-6 py-8 group hover:bg-sage/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-sage-light/50 flex items-center justify-center group-hover:border-sage/60 group-hover:bg-sage/8 transition-all">
                    <Icon className="w-5 h-5 text-sage" />
                  </div>
                  <span className="text-base font-semibold text-foreground text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section id="schedule" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Section header */}
            <div className="text-center space-y-3">
              <span className="section-eyebrow">行程表</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">兩天一夜心靈之旅</h2>
              <p className="text-muted-foreground">從台南出發，搭乘自強號前往花蓮，展開一段充滿感動的旅程</p>
            </div>

            {/* Train info bar */}
            <div className="flex flex-wrap justify-center gap-6 text-sm py-4 px-6 bg-sage/5 border border-sage-light/30 rounded-xl">
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-sage" />
                <span className="font-semibold">去程 自強301</span>
                <span className="text-muted-foreground">06:30 台南 → 10:59 花蓮</span>
              </div>
              <div className="w-px bg-border/50 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-warm-amber" />
                <span className="font-semibold">回程 自強324</span>
                <span className="text-muted-foreground">16:01 花蓮 → 20:31 台南</span>
              </div>
            </div>

            {/* Day cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {schedules.map((schedule) => (
                <Card key={schedule.day} className="p-6 md:p-8 border-sage-light/20 shadow-sm hover:shadow-md transition-shadow">
                  <ScheduleTimeline items={schedule.items} day={schedule.day} date={schedule.date} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-b from-sage-light/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              「心」的旅程，從這裡開始
            </h2>
            <p className="text-muted-foreground">感謝您的熱情報名，本次列車名額已額滿，報名已截止。</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default TzuChiTrain;
