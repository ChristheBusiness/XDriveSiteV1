import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Acasă", id: "acasa" },
    { label: "Despre Noi", id: "despre" },
    { label: "Cursuri", id: "cursuri" },
    { label: "Tarife", id: "tarife" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            onClick={() => scrollToSection("acasa")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all"
            data-testid="button-logo"
          >
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">X</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? "text-foreground" : "text-white"}`}>
              X-Drive
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              variant="default"
              onClick={() => scrollToSection("contact")}
              data-testid="button-enroll-nav"
            >
              Înscrie-te Acum
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md hover-elevate active-elevate-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium text-foreground"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default"
              className="w-full"
              onClick={() => scrollToSection("contact")}
              data-testid="button-enroll-mobile"
            >
              Înscrie-te Acum
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
