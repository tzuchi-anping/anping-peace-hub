import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      <Button 
        variant="warm"
        size="lg"
        className="shadow-2xl hover:shadow-warm group"
        asChild
      >
        <a 
          href="https://tcit3.tzuchi.net/OCCD/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          立即捐款
        </a>
      </Button>
      
      <Button 
        variant="sage"
        size="lg"
        className="shadow-2xl hover:shadow-sage group"
        asChild
      >
        <a 
          href="https://ap13.ragic.com/epa/forms77/13?webview&webaction=form&ver=new&version=2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
          加入志工
        </a>
      </Button>
    </div>
  );
};

export default FloatingActions;
