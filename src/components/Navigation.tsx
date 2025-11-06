import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50 shadow-sm animate-slide-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="font-bold text-2xl gradient-text group-hover:scale-105 transition-transform">
              Skillwon
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary relative group animate-fade-in",
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full",
                  isActive(link.path) && "w-full"
                )}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="cta" size="default" className="hover-lift shadow-lg group" asChild>
              <a
                href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50 animate-slide-up">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 px-4 text-sm font-medium transition-all hover:bg-muted rounded-lg animate-slide-in",
                  isActive(link.path) ? "text-primary bg-primary/5" : "text-muted-foreground"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" size="default" className="w-full hover-lift shadow-lg" asChild>
              <a
                href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
