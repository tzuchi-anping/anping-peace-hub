import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  MapPin,
  Leaf,
  Footprints,
  ArrowRight,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import posterTrain from "@/assets/tzuchi-train-2026.png";
import posterPilgrimage from "@/assets/pilgrimage-2026.png";
import plantopiaImage from "@/assets/plantopia-20260411.png";
import {
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_REGISTRATION_DEADLINE,
  PLANTOPIA_REGISTRATION_URL,
  KID_MARKET_REGISTRATION_URL,
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
  /* ── 朝山經行 ── */
  {
    id: "pilgrimage",
    image: posterPilgrimage,
    imageAlt: "2026 朝山經行海報",
    badge: { icon: Footprints, text: "慈濟60周年", color: "sage" },
    title: "朝山經行",
    subtitle: "六十行願，一念初心",
    description:
      "在這特別的時刻，邀請您用雙腳走一段路，在步步經行中，與心對話、與法相應。",
    meta: [
      { icon: Calendar, text: "2026/04/12（日）" },
      { icon: Clock, text: "15:00 ~ 17:30" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notice: {
      type: "list",
      titleIcon: Leaf,
      title: "活動提醒",
      items: [
        "戶外經行，不脫鞋，請穿著舒適包鞋",
        "建議穿著：長袖藍衣藍褲或灰衣藍褲",
        "攜帶物品：輕便背包、水杯、個人藥品",
        "雨天備案：移至佛堂禮拜《三十七助道品》（請攜帶襪套）",
      ],
    },
    actions: [],
  },

  /* ── 植托邦蔬食市集 × 小老闆市集 ── */
  {
    id: "plantopia",
    image: plantopiaImage,
    imageAlt: "植托邦蔬食市集海報",
    badge: { icon: Leaf, text: "蔬食護生・環保永續", color: "sage" },
    title: "植托邦蔬食市集 × 小老闆市集",
    description:
      "以「蔬食護生、環保永續」為核心，打造蔬食者盡情徜徉的饗食天堂。攜手小老闆市集，讓孩子透過擺攤延續物命、學習規劃與珍惜。",
    meta: [
      { icon: Calendar, text: "2026/04/11（六）" },
      { icon: Clock, text: "14:00 – 19:00" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notice: {
      type: "banner",
      icon: UtensilsCrossed,
      text: "響應無痕生活，請自備環保餐具、碗筷及杯子",
      color: "warm-amber",
    },
    actions: [
      {
        label: "植托邦擺攤報名",
        href: PLANTOPIA_REGISTRATION_URL,
        variant: "warm",
        leadingIcon: Store,
      },
      {
        label: "小老闆擺攤報名",
        href: KID_MARKET_REGISTRATION_URL,
        variant: "outline",
        leadingIcon: Store,
      },
    ],
  },

  /* ── 慈濟列車 ── */
  {
    id: "tzuchi-train",
    image: posterTrain,
    imageAlt: "2026 安平聯區慈濟列車海報",
    imageLink: "/tzuchi-train",
    badge: { text: "已額滿", color: "warm-amber" },
    title: "2026 安平聯區慈濟列車",
    subtitle: "花蓮「心」履行 — 兩天一夜心靈之旅",
    description:
      "遠離塵世的喧囂，放慢匆忙的腳步。邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮。",
    meta: [
      { icon: Calendar, text: TZUCHI_TRAIN_EVENT_DATE },
      { icon: Clock, text: TZUCHI_TRAIN_REGISTRATION_DEADLINE },
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
