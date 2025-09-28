import { useParams, Link } from "react-router-dom";
import { Menu, ArrowLeft } from "lucide-react";
import { menuData } from "@/data/menuData";

interface CategoryMenuProps {
  onMenuOpen: () => void;
}

const CategoryMenu = ({ onMenuOpen }: CategoryMenuProps) => {
  const { category } = useParams<{ category: string }>();
  
  const dishes = menuData.filter(dish => dish.category === category);
  const categoryName = category?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  return (
    <div className="min-h-screen bg-background pattern-islamic relative">
      {/* Header */}
      <header className="bg-dark/90 backdrop-blur-sm sticky top-0 z-40 border-b border-primary/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              to="/"
              className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </Link>
            <h1 className="text-2xl font-amiri font-bold text-primary">{categoryName} Cuisine</h1>
          </div>
          
          <button
            onClick={onMenuOpen}
            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Menu Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6">
          {dishes.map((dish) => (
            <Link
              key={dish.id}
              to={`/dish/${dish.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover-lift glow-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 bg-gradient-to-b from-card to-cream/50">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-amiri font-bold text-foreground group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">${dish.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {dish.description}
                </p>
                
                <div className="flex items-center space-x-2">
                  {dish.isVegetarian && (
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                      Vegetarian
                    </span>
                  )}
                  {dish.isSpicy && (
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                      Spicy
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryMenu;