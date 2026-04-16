import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CalendarPlus,
  Clock,
  MapPin,
  Flower2,
  Gift,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import posterTrain from "@/assets/tzuchi-train-2026.png";
import posterBathingBuddha from "@/assets/buddha-2026.jpg";
import {
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_IS_FULL,
} from "./constants";

// ─── Types ───────────────────────────────────────────────────────────────────

export type BadgeColor = "sage" | "warm-amber";
export type NoticeColor = "sage" | "warm-amber";

/** 活動提醒區塊：條列式 or 橫幅 */
export type EventNotice =
  | { type: "list"; titleIcon: LucideIcon; title: string; items: string[] }
  | { type: "banner"; icon: LucideIcon; text: string; color: NoticeColor };

export type EventAction = {
  label: string;
  href: string;
  variant: "warm" | "outline";
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  /** Extra className 給 trailingIcon（例如 hover 動畫） */
  trailingIconClass?: string;
  /** true = 用 <Link to>，false/undefined = 用 <a href> 新分頁開啟 */
  isInternal?: boolean;
};

export type UpcomingEvent = {
  id: string;
  image: string;
  imageAlt: string;
  /** 有值時圖片可點擊，連到站內頁面 */
  imageLink?: string;
  /** "cover"（預設）會裁切以填滿欄位；"contain" 完整保留海報內容（適合橫式海報） */
  imageFit?: "cover" | "contain";
  badge: { icon?: LucideIcon; text: string; color: BadgeColor };
  title: string;
  subtitle?: string;
  description: string;
  meta: Array<{ icon: LucideIcon; text: string }>;
  /** 可放多個提醒區塊（場次表 + 亮點等） */
  notices?: EventNotice[];
  actions: EventAction[];
};

// ─── Data ────────────────────────────────────────────────────────────────────
// 新增活動：在這裡加一筆 UpcomingEvent 物件即可，不需碰 UI 元件。

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  /* ── 2026 浴佛大典 ── */
  {
    id: "bathing-buddha",
    image: posterBathingBuddha,
    imageAlt: "2026 浴佛大典海報",
    imageFit: "contain",
    badge: { icon: Flower2, text: "浴佛大典・60 周年", color: "sage" },
    title: "2026 浴佛大典",
    subtitle: "與佛相遇 — 慈濟 60 周年",
    description:
      "誠摯邀約大家來到安平聯絡處，洗滌心垢、祈求平安。今年更有慈濟 60 周年特別展出與豐富互動活動。",
    meta: [
      { icon: Calendar, text: "2026/05/10（日）" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notices: [
      {
        type: "list",
        titleIcon: Clock,
        title: "活動場次",
        items: [
          "07:00 浴佛大典・慈誠委員連線場次（06:30 入場・1F 佛堂）",
          "09:00 六十周年慶大會（1F 佛堂）",
          "10:30・11:30・14:00 浴佛大典・社區場次（請提早 15 分鐘入場）",
          "10:30 後・平安麵於環保教育站結緣",
        ],
      },
      {
        type: "list",
        titleIcon: Gift,
        title: "活動亮點",
        items: [
          "限量祝福：60 周年結緣品與壽桃",
          "溫暖服務：淨手奉茶、平安麵結緣",
          "互動體驗：花道手作、靜思語解籤",
        ],
      },
    ],
    actions: [
      {
        label: "加入行事曆",
        href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=2026%20%E6%B5%B4%E4%BD%9B%E5%A4%A7%E5%85%B8%EF%BC%88%E7%A4%BE%E5%8D%80%E5%A0%B4%E6%AC%A1%EF%BC%89&dates=20260510T023000Z%2F20260510T043000Z&details=%E8%88%87%E4%BD%9B%E7%9B%B8%E9%81%87%E2%80%94%E6%85%88%E6%BF%9F%2060%20%E5%91%A8%E5%B9%B4%E6%B5%B4%E4%BD%9B%E5%A4%A7%E5%85%B8%E3%80%82%E7%A4%BE%E5%8D%80%E5%A0%B4%E6%AC%A1%EF%BC%9A10%3A30%E3%80%8111%3A30%E3%80%8114%3A00%EF%BC%88%E8%AB%8B%E6%8F%90%E6%97%A9%2015%20%E5%88%86%E9%90%98%E5%85%A5%E5%A0%B4%EF%BC%89&location=%E6%85%88%E6%BF%9F%E5%AE%89%E5%B9%B3%E8%81%AF%E7%B5%A1%E8%99%95%EF%BC%88%E8%87%BA%E5%8D%97%E5%B8%82%E5%AE%89%E5%B9%B3%E5%8D%80%E5%9C%8B%E5%B9%B3%E8%B7%AF%20211%20%E8%99%9F%EF%BC%89",
        variant: "warm",
        leadingIcon: CalendarPlus,
      },
    ],
  },

  /* ── 慈濟列車 ── */
  {
    id: "tzuchi-train",
    image: posterTrain,
    imageAlt: "2026 安平聯區慈濟列車海報",
    imageLink: "/tzuchi-train",
    badge: {
      icon: TZUCHI_TRAIN_IS_FULL ? AlertCircle : undefined,
      text: TZUCHI_TRAIN_IS_FULL ? "名額已額滿・報名截止" : "兩天一夜",
      color: "warm-amber",
    },
    title: "2026 安平聯區慈濟列車",
    subtitle: "花蓮「心」履行 — 兩天一夜心靈之旅",
    description:
      "遠離塵世的喧囂，放慢匆忙的腳步。邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮。",
    meta: [
      { icon: Calendar, text: TZUCHI_TRAIN_EVENT_DATE },
      { icon: Clock, text: TZUCHI_TRAIN_IS_FULL ? "報名已截止" : "5/10 或額滿截止" },
    ],
    actions: [
      {
        label: "了解更多",
        href: "/tzuchi-train",
        variant: "outline",
        trailingIcon: ArrowRight,
        trailingIconClass: "group-hover:translate-x-0.5 transition-transform",
        isInternal: true,
      },
    ],
  },
];
