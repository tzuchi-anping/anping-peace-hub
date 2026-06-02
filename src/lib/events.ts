import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  MapPin,
  Gift,
  ArrowRight,
  AlertCircle,
  Leaf,
  ExternalLink,
  Music2,
  Sparkles,
  Users,
  Ticket,
} from "lucide-react";
import posterTrain from "@/assets/tzuchi-train-2026.png";
import posterAfforestation from "@/assets/afforestation.jpg";
import posterChineseMusicConcert from "@/assets/2026ChineseMusicConcert.jpg";
import posterYouthCamp from "@/assets/youth-potential-camp-2026.png";
import {
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_IS_FULL,
  AFFORESTATION_REGISTRATION_URL,
  PLANTOPIA_REGISTRATION_URL,
  CHINESE_MUSIC_CONCERT_REGISTRATION_URL,
  YOUTH_POTENTIAL_CAMP_REGISTRATION_URL,
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
  /**
   * "cover"（預設）會裁切以填滿欄位；"contain" 完整保留海報內容（適合橫式海報）。
   * 搭配 "contain" 時，元件會自動加上柔和的 sage 漸層背景填補 letterbox 區域。
   */
  imageFit?: "cover" | "contain";
  badge: { icon?: LucideIcon; text: string; color: BadgeColor };
  title: string;
  subtitle?: string;
  description: string;
  meta: Array<{ icon: LucideIcon; text: string }>;
  /** 提醒區塊清單（場次表 + 亮點等）；無提醒時傳空陣列 */
  notices: EventNotice[];
  actions: EventAction[];
};

const ARROW_HOVER_CLASS = "group-hover:translate-x-0.5 transition-transform";

// ─── Data ────────────────────────────────────────────────────────────────────
// 新增活動：在這裡加一筆 UpcomingEvent 物件即可，不需碰 UI 元件。

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  /* ── 青少心聚點 潛能探索營 ── */
  {
    id: "youth-potential-camp",
    image: posterYouthCamp,
    imageAlt: "青少心聚點・潛能探索營海報",
    imageFit: "contain",
    badge: { icon: Sparkles, text: "青少年潛能探索・三梯次", color: "warm-amber" },
    title: "青少心聚點・潛能探索營",
    subtitle: "找到屬於你的閃光點，成就更好的自己！",
    description:
      "暑假即將到來，邀請孩子在專業講師引導下，學習非洲鼓、體驗木工職人精神，甚至掌握最夯的 AI 應用！以「培力 × 服務」為核心，不僅培養個人興趣與技能，更透過服務行動連結社區，成就更好的自己。歡迎邀請關懷家庭青少年一起參與！",
    meta: [
      { icon: Users, text: "國一至高二學生（含小六畢業生）" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
      { icon: Gift, text: "全程免費，並提供素食午餐" },
      { icon: Clock, text: "即日起至 6/15 報名截止（每梯次限 20 名）" },
    ],
    notices: [
      {
        type: "list",
        titleIcon: Calendar,
        title: "三梯次精彩課程",
        items: [
          "「鼓」動青春・非洲鼓：7/7（二）– 7/10（五）",
          "職人修煉大賽・木工：7/13（一）– 7/15（三）",
          "智造新視界・AI 生活應用：7/22（三）– 7/24（五）",
          "圓緣成果展暨志工關懷行動：7/28（二）",
        ],
      },
      {
        type: "banner",
        icon: Ticket,
        text: "報名方式：紙本報名或線上報名。聯絡窗口：徐社工 06-2792999 分機 320",
        color: "warm-amber",
      },
    ],
    actions: [
      {
        label: "線上報名",
        href: YOUTH_POTENTIAL_CAMP_REGISTRATION_URL,
        variant: "warm",
        leadingIcon: ExternalLink,
      },
    ],
  },

  /* ── 玩市集 種森林 ── */
  {
    id: "afforestation-market",
    image: posterAfforestation,
    imageAlt: "玩市集 種森林・植托邦市集海報",
    imageFit: "contain",
    badge: { icon: Leaf, text: "植托邦市集・一野森林合辦", color: "sage" },
    title: "玩市集 種森林",
    subtitle: "尋覓城市森林，就在植托邦市集！",
    description:
      "一場關於「宮脇森林」的探索旅程即將展開。完成 6 道森林大地遊戲關卡，蒐集線索、拼湊森林樣貌，最終親手種下專屬樹苗，一起種出屬於我們的森林！邀請你一起用行動「玩」出森林，見證綠意在你我日常中延續。",
    meta: [
      { icon: Calendar, text: "2026/06/06（六）16:00–19:00（市集至 20:00）" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notices: [
      {
        type: "list",
        titleIcon: Leaf,
        title: "何謂宮脇森林",
        items: [
          "由日本植物學家宮脇昭博士所開創，是聯合國公認有效的自然解方（NbS）",
          "將原生樹種密集種植，讓樹木形成能互相幫助、強韌共生的「超級有機體」",
          "以十年長成百年森林的速度，讓城市土地快速轉化為具備生命力的綠色場域",
        ],
      },
    ],
    actions: [
      {
        label: "活動報名",
        href: AFFORESTATION_REGISTRATION_URL,
        variant: "warm",
        leadingIcon: ExternalLink,
      },
      {
        label: "攤商報名",
        href: PLANTOPIA_REGISTRATION_URL,
        variant: "outline",
        trailingIcon: ArrowRight,
        trailingIconClass: ARROW_HOVER_CLASS,
      },
    ],
  },

  /* ── 六月國樂音樂會 ── */
  {
    id: "chinese-music-concert",
    image: posterChineseMusicConcert,
    imageAlt: "弦心弦意在人間・六月音樂會海報",
    imageFit: "contain",
    badge: { icon: Music2, text: "慈濟安平聯區・國樂團", color: "sage" },
    title: "弦心弦意在人間・六月音樂會",
    subtitle: "用音樂走一段愛的人間路",
    description:
      "慈濟安平聯絡處國樂團，攜手王雪真師姊手語團隊，於六月初夏夜晚獻上一場充滿愛與溫度的音樂饗宴。免費入場，誠摯邀請您蒞臨聆聽。",
    meta: [
      { icon: Calendar, text: "2026/06/06（六）19:30–21:00" },
      { icon: MapPin, text: "慈濟安平聯絡處" },
    ],
    notices: [
      {
        type: "list",
        titleIcon: Music2,
        title: "演奏曲目",
        items: [
          "愛和關懷",
          "因緣",
          "把愛找回來",
          "愛灑人間",
          "誠心祈三願",
          "心願＋手語",
          "人間有愛＋手語",
          "千手世界＋手語",
          "立願文",
          "問心",
          "悲欣交集在心蓮",
          "祈禱",
        ],
      },
      {
        type: "banner",
        icon: Gift,
        text: "透過官方 LINE 完成報名，限量贈送精油防蚊磚 100 份（音樂會當日現場領取，每人限領乙份，送完為止）",
        color: "sage",
      },
    ],
    actions: [
      {
        label: "LINE 立即報名",
        href: CHINESE_MUSIC_CONCERT_REGISTRATION_URL,
        variant: "warm",
        leadingIcon: ExternalLink,
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
    notices: [],
    actions: [
      {
        label: "了解更多",
        href: "/tzuchi-train",
        variant: "outline",
        trailingIcon: ArrowRight,
        trailingIconClass: ARROW_HOVER_CLASS,
        isInternal: true,
      },
    ],
  },
];
