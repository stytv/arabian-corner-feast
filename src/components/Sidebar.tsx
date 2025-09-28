import { X, Home, Grid3X3, ShoppingCart, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Sidebar Panel - 70% width */}
      <div className="w-[70%] bg-dark text-dark-foreground shadow-2xl transform transition-transform duration-300 ease-in-out pattern-geometric relative">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/30">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Arabian Corner" className="w-12 h-12 rounded-lg object-cover" />
              <h2 className="text-2xl font-amiri font-bold text-primary">Arabian Corner</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <nav className="space-y-4">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Home className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                <span className="text-lg font-medium group-hover:text-primary-glow">Home</span>
              </Link>
              
              <Link
                to="/category/afghani"
                onClick={onClose}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Grid3X3 className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                <span className="text-lg font-medium group-hover:text-primary-glow">Afghani Cuisine</span>
              </Link>
              
              <Link
                to="/category/north-indian"
                onClick={onClose}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Grid3X3 className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                <span className="text-lg font-medium group-hover:text-primary-glow">North Indian Cuisine</span>
              </Link>
              
              <Link
                to="/category/arabian"
                onClick={onClose}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Grid3X3 className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                <span className="text-lg font-medium group-hover:text-primary-glow">Arabian Cuisine</span>
              </Link>

              <div className="border-t border-primary/30 pt-4 mt-6">
                <button className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group w-full">
                  <ShoppingCart className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                  <span className="text-lg font-medium group-hover:text-primary-glow">Cart (0)</span>
                </button>
                
                <button className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors group w-full">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-glow" />
                  <span className="text-lg font-medium group-hover:text-primary-glow">Contact Us</span>
                </button>
              </div>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="p-6 border-t border-primary/30">
            <h3 className="text-lg font-amiri font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors group">
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-glow" />
              </button>
              <button className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors group">
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-glow" />
              </button>
              <button className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors group">
                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-glow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clickable overlay - remaining 30% */}
      <div 
        className="flex-1 blur-overlay cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};