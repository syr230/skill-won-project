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
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skillwon
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="default" asChild>
              <a
                href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" size="default" className="w-full" asChild>
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
