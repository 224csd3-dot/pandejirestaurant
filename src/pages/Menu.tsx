import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FullMenuSection from "@/components/FullMenuSection";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b border-border">
        <div className="container-restaurant px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
                  PANDEYJI
                </span>
                <span className="text-xs text-primary font-medium tracking-widest">
                  RESTAURANT
                </span>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Full Menu */}
      <FullMenuSection />

      {/* Footer */}
      <footer className="bg-warm-brown py-6">
        <div className="container-restaurant px-4 text-center">
          <p className="text-cream/80">
            © {new Date().getFullYear()} Pandeyji Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
