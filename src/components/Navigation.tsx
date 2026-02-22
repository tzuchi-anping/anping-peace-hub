import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "首頁", href: "/" },
    { title: "近期活動", href: "#upcoming-event" },
    { title: "活動課程", href: "#programs" },
    { title: "社群動態", href: "#social" },
    { title: "聯絡我們", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-sage" />
            <span className="text-lg font-bold text-foreground">慈濟安平聯絡處</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-sage transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-sage hover:bg-muted/50 rounded-md transition-colors"
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
