import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import posterImage from "@/assets/tzuchi-train-2026.png";
import {
  TZUCHI_TRAIN_EVENT_DATE,
  TZUCHI_TRAIN_REGISTRATION_DEADLINE,
} from "@/lib/constants";

const TzuChiTrainBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-sage-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-sage/20 shadow-xl bg-gradient-to-r from-sage/5 via-sage-light/10 to-warm-amber/5">
            <div className="flex flex-col md:flex-row">
              {/* Poster Image */}
              <div className="md:w-2/5 lg:w-1/3 flex-shrink-0">
                <Link to="/tzuchi-train" className="block overflow-hidden">
                  <img
                    src={posterImage}
                    alt="2026 安平聯區慈濟列車海報"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
                <div className="inline-flex items-center gap-2 bg-warm-amber/10 px-3 py-1 rounded-full w-fit">
                  <span className="text-xs font-medium text-warm-amber">已額滿</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  2026 安平聯區慈濟列車
                </h3>
                <p className="text-lg text-sage font-semibold">花蓮「心」履行 — 兩天一夜心靈之旅</p>
                <p className="text-muted-foreground leading-relaxed">
                  遠離塵世的喧囂，放慢匆忙的腳步。邀請您搭上這班滿載溫暖的列車，回到「心靈的故鄉」——花蓮。
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {TZUCHI_TRAIN_EVENT_DATE}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {TZUCHI_TRAIN_REGISTRATION_DEADLINE}
                  </span>
                </div>
                <Button variant="outline" size="lg" className="group mt-2" asChild>
                  <Link to="/tzuchi-train">
                    了解更多
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TzuChiTrainBanner;
