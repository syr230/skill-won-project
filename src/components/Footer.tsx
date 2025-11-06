import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-card border-t border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-bold text-xl gradient-text">
              Skillwon
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering future talent with practical skills in AI, Data Analytics, Web Development, and Prompt Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold text-foreground">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/ai" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/programs/data-analytics" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/programs/web-development" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/programs/prompt-engineering" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Prompt Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@skillwon.com" className="hover:text-primary transition-colors">
                  info@skillwon.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground group">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Skillwon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5">
              Privacy
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-primary transition-all hover:-translate-y-0.5">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
