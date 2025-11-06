import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skillwon
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering future talent with practical skills in AI, Data Analytics, Web Development, and Prompt Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/programs/data-analytics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/programs/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/programs/prompt-engineering" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prompt Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@skillwon.com" className="hover:text-primary transition-colors">
                  info@skillwon.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Skillwon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
