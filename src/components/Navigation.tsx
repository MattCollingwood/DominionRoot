import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Merch", path: "/merch" },
  { name: "About", path: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center glow-cyan transition-all duration-300 group-hover:bg-primary/30">
              <span className="font-display font-bold text-primary text-lg">DR</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
              DOMINION<span className="text-primary">ROOT</span>
            </span>
          </Link>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Navigation - full width on mobile, 25% on desktop */}
      <div
        className={cn(
          "absolute top-16 glass-card border-t border-border/50 transition-all duration-300 overflow-hidden",
          "left-0 right-0 md:left-auto md:right-4 md:w-64 lg:right-10",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="py-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "w-full px-6 py-3 font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300",
                location.pathname === link.path
                  ? "text-primary bg-primary/10 border-l-4 border-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-4 border-transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}