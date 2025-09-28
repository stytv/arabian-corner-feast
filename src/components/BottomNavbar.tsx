import { Link, useLocation } from "react-router-dom";
import { Crown, Utensils, Coffee } from "lucide-react";

const BottomNavbar = () => {
  const location = useLocation();
  
  const categories = [
    {
      id: 'afghani',
      name: 'Afghani',
      icon: Crown,
      path: '/category/afghani'
    },
    {
      id: 'north-indian',
      name: 'North Indian', 
      icon: Utensils,
      path: '/category/north-indian'
    },
    {
      id: 'arabian',
      name: 'Arabian',
      icon: Coffee,
      path: '/category/arabian'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-sm border-t border-primary/30 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = isActive(category.path);
            
            return (
              <Link
                key={category.id}
                to={category.path}
                className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-200 ${
                  active 
                    ? 'bg-primary/20 text-primary glow-gold' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                <Icon className={`w-6 h-6 ${active ? 'scale-110' : ''} transition-transform duration-200`} />
                <span className="text-xs font-medium">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;