import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Acasă", id: "acasa" },
    { label: "Despre Noi", id: "despre" },
    { label: "Cursuri", id: "cursuri" },
    { label: "Tarife", id: "tarife" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">X</span>
              </div>
              <span className="font-bold text-xl text-foreground">X-Drive</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Școala ta de încredere pentru obținerea permisului de conducere în Chiajna, București.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Str. Exemplu nr. 123, Chiajna, Ilfov</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+40722123456" className="text-muted-foreground hover:text-primary transition-colors">
                  +40 722 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@x-drive.ro" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@x-drive.ro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Urmărește-ne</h3>
            <div className="flex gap-3">
              <button
                onClick={() => console.log("Facebook clicked")}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => console.log("Instagram clicked")}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} X-Drive Școala de Șoferi. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => console.log("Privacy policy clicked")}
              className="hover:text-primary transition-colors"
            >
              Politica de Confidențialitate
            </button>
            <button 
              onClick={() => console.log("Terms clicked")}
              className="hover:text-primary transition-colors"
            >
              Termeni și Condiții
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
