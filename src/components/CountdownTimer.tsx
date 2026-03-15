import { useState, useEffect, useRef } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

// ISO 8601 with +08:00 guarantees correct UTC+8 regardless of browser timezone
const REGISTRATION_DEADLINE = new Date("2026-05-10T23:59:59+08:00");
const DEPARTURE_DATE = new Date("2026-06-27T06:00:00+08:00");

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    expired: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Single digit unit — flips with a fade when value changes
function Digit({ value, label }: { value: number; label: string }) {
  const prev = useRef(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prev.current !== value) {
      setFlipping(true);
      const t = setTimeout(() => setFlipping(false), 200);
      prev.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="tabular-nums font-black leading-none transition-opacity duration-200"
        style={{
          fontFamily: "'Noto Serif TC', serif",
          opacity: flipping ? 0.4 : 1,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        {pad(value)}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase font-medium opacity-50">{label}</span>
    </div>
  );
}

function CountdownBlock({
  target,
  title,
  subtitle,
  accent,
  precision,
}: {
  target: Date;
  title: string;
  subtitle: string;
  accent: "sage" | "amber";
  precision: "days" | "minutes";
}) {
  const [time, setTime] = useState<TimeLeft>(() => calcTimeLeft(target));

  useEffect(() => {
    const interval = precision === "minutes" ? 1000 : 60_000;
    const id = setInterval(() => setTime(calcTimeLeft(target)), interval);
    return () => clearInterval(id);
  }, [target, precision]);

  const accentColor =
    accent === "amber"
      ? "text-warm-amber border-warm-amber/30 bg-warm-amber/5"
      : "text-sage border-sage/30 bg-sage/5";
  const dotColor = accent === "amber" ? "text-warm-amber/60" : "text-sage/60";

  return (
    <div className={`flex-1 rounded-2xl border p-6 md:p-8 ${accentColor} flex flex-col items-center gap-5 text-center`}>
      {/* Header */}
      <div>
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-1"
          style={{ color: accent === "amber" ? "hsl(var(--warm-amber))" : "hsl(var(--sage))" }}
        >
          {title}
        </p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      {/* Digits */}
      {time.expired ? (
        <p className="text-sm font-semibold text-muted-foreground py-4">已結束</p>
      ) : precision === "days" ? (
        <div className="flex items-end gap-2 md:gap-3">
          <Digit value={time.days} label="天" />
        </div>
      ) : (
        <div className="flex items-end gap-2 md:gap-3">
          <Digit value={time.days} label="天" />
          <span className={`text-2xl font-bold pb-5 ${dotColor}`}>:</span>
          <Digit value={time.hours} label="時" />
          <span className={`text-2xl font-bold pb-5 ${dotColor}`}>:</span>
          <Digit value={time.minutes} label="分" />
        </div>
      )}
    </div>
  );
}

const CountdownTimer = () => (
  <section className="py-10 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border/50" />
          <span className="section-eyebrow">倒數計時</span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <CountdownBlock
            target={REGISTRATION_DEADLINE}
            title="報名截止"
            subtitle="2026 年 5 月 10 日 23:59（台北時間）"
            accent="amber"
            precision="minutes"
          />
          <CountdownBlock
            target={DEPARTURE_DATE}
            title="出發在即"
            subtitle="2026 年 6 月 27 日 06:00（台北時間）"
            accent="sage"
            precision="days"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CountdownTimer;
