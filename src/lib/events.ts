import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  MapPin,
  Flower2,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import posterTrain from "@/assets/tzuchi-train-2026.png";
import posterBathingBuddha from "@/assets/bathing-buddha-2026.png";
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
  badge: { icon?: LucideIcon; text: string; color: BadgeColor };
  title: string;
  subtitle?: string;
  description: string;
  meta: Array<{ icon: LucideIcon; text: string }>;
  notice?: EventNotice;
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
    badge: { icon: Flower2, text: "慈濟60周年", color: "sage" },
    title: "與佛相遇",
    subtitle: "2026 浴佛大典",
    description:
      "誠摯邀約大家來到安平聯絡處，洗滌心垢、祈求平安。今年更有慈濟 60 周年特別展出與豐富互動活動，邀您與家人一同前來祈福圓滿。",
    meta: [
      { icon: Calendar, text: "2026/05/10（日）" },
      { icon: Clock, text: "社區浴佛場次 10:30・11:30・14:00（請提早 15 分鐘入場）" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notice: {
      type: "list",
      titleIcon: Sparkles,
      title: "活動亮點",
      items: [
        "互動體驗：花道手作、靜思語解籤",
        "溫暖服務：淨手奉茶、平安麵結緣",
        "限量祝福：60 周年結緣品與壽桃",
      ],
    },
    actions: [],
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
