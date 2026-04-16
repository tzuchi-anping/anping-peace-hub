import * as React from "react";
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
import { type UpcomingEvent, type EventNotice, UPCOMING_EVENTS } from "@/lib/events";
import { cn } from "@/lib/utils";

// ─── Constants ───────────────────────────────────────────────────────────────

const SLIDE_CARD_CLASS =
  "overflow-hidden border-sage/20 shadow-xl bg-gradient-to-r from-sage/5 via-sage-light/10 to-warm-amber/5 min-h-[480px] flex flex-col justify-center";

// 靜態 class 對應表，讓 Tailwind JIT 能掃描到完整 class 名稱
const BADGE_STYLES = {
  sage: { bg: "bg-sage/10", text: "text-sage" },
  "warm-amber": { bg: "bg-warm-amber/10", text: "text-warm-amber" },
} as const;

const NOTICE_BANNER_STYLES = {
  "warm-amber": "bg-warm-amber/15 text-warm-amber",
  sage: "bg-sage/5 text-sage",
} as const;

// ─── Main Component ──────────────────────────────────────────────────────────

const UpcomingEvents = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  React.useEffect(() => {
    if (!api || isPaused) return;
    const timer = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [api, isPaused]);

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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent>
              {UPCOMING_EVENTS.map((event) => (
                <CarouselItem key={event.id}>
                  <EventSlide {...event} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {UPCOMING_EVENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-sage w-6"
                    : "bg-sage/30 hover:bg-sage/50"
                }`}
                aria-label={`前往第 ${i + 1} 張`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── EventSlide ──────────────────────────────────────────────────────────────

const EventSlide = ({
  image, imageAlt, imageLink, imageFit = "cover",
  badge, title, subtitle, description,
  meta, notices, actions,
}: UpcomingEvent) => {
  const badgeStyle = BADGE_STYLES[badge.color];
  const BadgeIcon = badge.icon;
  const isContain = imageFit === "contain";
  // contain 模式給海報一個柔和背景，避免 letterbox 留白看起來空蕩
  const imageEl = (
    <img
      src={image}
      alt={imageAlt}
      loading="lazy"
      className={cn(
        "w-full h-full",
        isContain ? "object-contain" : "object-cover",
        imageLink && "hover:scale-105 transition-transform duration-500",
      )}
    />
  );

  return (
    <Card className={SLIDE_CARD_CLASS}>
      <div className="flex flex-col md:flex-row flex-1">
        {/* 左側圖片 */}
        <div
          className={cn(
            "md:w-2/5 lg:w-1/3 flex-shrink-0 overflow-hidden",
            isContain && "bg-gradient-to-b from-sage-light/20 to-sage/5 flex items-center justify-center",
          )}
        >
          {imageLink ? (
            <Link to={imageLink} className="block w-full h-full">
              {imageEl}
            </Link>
          ) : (
            imageEl
          )}
        </div>

        {/* 右側文字 */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
          {/* 標籤 */}
          <div className={`inline-flex items-center gap-2 ${badgeStyle.bg} px-3 py-1 rounded-full w-fit`}>
            {BadgeIcon && <BadgeIcon className={`w-3.5 h-3.5 ${badgeStyle.text}`} />}
            <span className={`text-xs font-medium ${badgeStyle.text}`}>{badge.text}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-lg text-sage font-semibold">{subtitle}</p>
          )}
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          {/* 日期 / 時間 / 地點 */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {meta.map(({ icon: Icon, text }, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-sage" />
                {text}
              </span>
            ))}
          </div>

          {/* 活動提醒 */}
          {notices.map((notice, i) => <NoticeBlock key={i} notice={notice} />)}

          {/* 按鈕 */}
          {actions.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {actions.map(({ label, href, variant, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, trailingIconClass, isInternal }, i) => (
                <Button key={i} variant={variant} size="lg" className="group" asChild>
                  {isInternal ? (
                    <Link to={href}>
                      {LeadingIcon && <LeadingIcon className="w-4 h-4" />}
                      {label}
                      {TrailingIcon && <TrailingIcon className={`w-4 h-4 ${trailingIconClass ?? ""}`} />}
                    </Link>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {LeadingIcon && <LeadingIcon className="w-4 h-4" />}
                      {label}
                      {TrailingIcon && <TrailingIcon className={`w-4 h-4 ${trailingIconClass ?? ""}`} />}
                    </a>
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// ─── NoticeBlock ─────────────────────────────────────────────────────────────

const NoticeBlock = ({ notice }: { notice: EventNotice }) => {
  if (notice.type === "list") {
    const TitleIcon = notice.titleIcon;
    return (
      <div className="space-y-2 text-sm text-muted-foreground bg-sage/5 rounded-lg p-4">
        <p className="font-semibold text-foreground flex items-center gap-1.5">
          <TitleIcon className="w-4 h-4 text-sage" />
          {notice.title}
        </p>
        <ul className="space-y-1 ml-5 list-disc">
          {notice.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }

  const NoticeIcon = notice.icon;
  return (
    <div className={`flex items-center gap-2 p-2.5 rounded-lg font-semibold text-sm ${NOTICE_BANNER_STYLES[notice.color]}`}>
      <NoticeIcon className="w-4 h-4 flex-shrink-0" />
      <span>{notice.text}</span>
    </div>
  );
};

export default UpcomingEvents;
