
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Media Gallery", path: "/gallery" },
    { label: "Celebrity Intros", path: "/celebrities" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {theme === "dark" ? (
            <img 
              src="/logo/white.png" 
              alt="VIT Anchoring Club" 
              className="h-20 w-auto" 
            />
          ) : (
            <img 
              src="/logo/black.png" 
              alt="VIT Anchoring Club" 
              className="h-20 w-auto" 
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-inter text-sm font-medium dark:text-gray-300 text-gray-700 hover:text-anchoring-blue transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button className="anchoring-button-blue bg-anchoring-blue hover:bg-anchoring-dark-blue text-white anchoring-button-dark-blue">
            <Link to="/contact" className="w-full">Join Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="p-2 dark:text-gray-300 text-gray-700 hover:text-anchoring-blue"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-inter text-sm font-medium dark:text-gray-300 text-gray-700 hover:text-anchoring-blue transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="anchoring-button-blue bg-anchoring-blue hover:bg-anchoring-dark-blue text-white mt-2 w-full anchoring-button-dark-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/contact" className="w-full">Join Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
