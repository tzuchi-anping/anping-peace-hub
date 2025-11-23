import { Sprout } from "lucide-react";
import { Card } from "@/components/ui/card";

const SocialFeed = () => {
  return (
    <section id="social-feed" className="py-20 bg-sage-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-sage-light/20 px-4 py-2 rounded-full border border-sage-light">
            <Sprout className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-sage">最新動態</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">社群分享</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            最新活動花絮與精彩瞬間
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 植托邦市集 Facebook 相簿 */}
          <Card className="overflow-hidden border-sage-light/20 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">植托邦市集相簿</h3>
              <div className="aspect-square overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmedia%2Fset%2F%3Fset%3Da.122141603198804526&show_text=false&width=500"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </Card>

          {/* 植托邦市集 Instagram Reel */}
          <Card className="overflow-hidden border-sage-light/20 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">植托邦市集 Reel</h3>
              <div className="aspect-square overflow-hidden rounded-lg flex items-center justify-center bg-muted">
                <iframe 
                  src="https://www.instagram.com/reel/DLe-xM8hOC1/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </Card>

          {/* 記憶保養學苑 Facebook 貼文 */}
          <Card className="overflow-hidden border-sage-light/20 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">記憶保養學苑</h3>
              <div className="aspect-square overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1BpDNp3yiQ%2F&show_text=true&width=500"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
