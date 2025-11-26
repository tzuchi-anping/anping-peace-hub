import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sprout, Brain, ExternalLink, Facebook, Instagram, MessageCircle } from "lucide-react";
import marketImage from "@/assets/plantopia-market.jpg";
import memoryCareImage from "@/assets/memory-care.jpg";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "社區教室",
      description: "各種課程接引社區民眾共同來終身學習",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      links: [
        { type: "website", url: "https://sites.google.com/view/npclassroom-new?pli=1", icon: ExternalLink },
        { type: "line", url: "https://line.me/ti/p/Seu9bfgJZv", icon: MessageCircle }
      ]
    },
    {
      icon: Sprout,
      title: "植托邦市集",
      description: "蔬食推廣 × 永續實踐 × 擁抱多元。我們相信，每一次的選擇都是邁向友善地球的一小步。透過市集，我們期待串連起更多人與土地的連結。",
      image: marketImage,
      links: [
        { type: "facebook", url: "https://www.facebook.com/profile.php?id=61574135794492", icon: Facebook },
        { type: "instagram", url: "https://www.instagram.com/plantopia2025", icon: Instagram }
      ]
    },
    {
      icon: Brain,
      title: "安平記憶保養學苑",
      description: "利用社區公共空間，以「一對一的陪伴」為特色，提供長者關懷、餐飲、健康促進活動等服務，並由在地志工人力協助，旨在打造失智友善社區。",
      image: memoryCareImage,
      links: [
        { type: "facebook", url: "https://www.facebook.com/profile.php?id=100093361091027", icon: Facebook }
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-sage-light/20 px-4 py-2 rounded-full border border-sage-light">
            <Sprout className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-sage">相關資訊</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">社區計畫與服務</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            從終身學習到永續生活，從長者關懷到社區共融
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card 
                key={program.title} 
                className="overflow-hidden border-sage-light/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${program.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-sage" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-sage transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {program.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          className="hover:bg-sage-light/20 hover:border-sage"
                          asChild
                        >
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <LinkIcon className="w-4 h-4" />
                            {link.type === "website" && "網站"}
                            {link.type === "line" && "LINE"}
                            {link.type === "facebook" && "Facebook"}
                            {link.type === "instagram" && "Instagram"}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
