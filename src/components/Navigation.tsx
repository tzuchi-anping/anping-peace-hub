import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { title: "首頁", href: "/" },
  { title: "近期活動", href: "#upcoming-event" },
  { title: "活動課程", href: "#programs" },
  { title: "社群動態", href: "#social" },
  { title: "聯絡我們", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-[0_1px_0_0_hsl(var(--border)/0.5)]">
      {/* Sage accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-sage via-sage/70 to-warm-amber/60" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
              <span className="text-sage text-xs font-bold" style={{ fontFamily: "'Noto Serif TC', serif" }}>慈</span>
            </div>
            <span
              className="text-base font-semibold text-foreground tracking-wide"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              慈濟安平聯絡處
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-sage hover:bg-sage/5 rounded-md transition-all"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-9 h-9"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-3 pt-1 space-y-0.5 animate-fade-in border-t border-border/30 mt-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-sage hover:bg-sage/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
