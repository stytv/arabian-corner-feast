import { useParams, Link } from "react-router-dom";
import { Menu, ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react";
import { menuData } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  onMenuOpen: () => void;
}

const ProductDetail = ({ onMenuOpen }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const dish = menuData.find(d => d.id === id);
  
  if (!dish) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-amiri font-bold mb-4">Dish Not Found</h1>
          <Link to="/" className="text-primary hover:text-primary-glow">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${quantity}x ${dish.name} added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-dark/90 backdrop-blur-sm sticky top-0 z-40 border-b border-primary/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to={`/category/${dish.category}`}
            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-primary" />
          </Link>
          
          <button
            onClick={onMenuOpen}
            className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Dish Details */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-2xl glow-gold bg-card shadow-2xl">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in"
            />
          </div>
          
          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-amiri font-bold text-foreground mb-2">
                {dish.name}
              </h1>
              <p className="text-3xl font-bold text-primary mb-4">${dish.price}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center space-x-3">
              {dish.isVegetarian && (
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  🌿 Vegetarian
                </span>
              )}
              {dish.isSpicy && (
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                  🌶️ Spicy
                </span>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-amiri font-semibold mb-3 text-foreground">Ingredients</h3>
              <div className="grid grid-cols-2 gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="bg-cream/30 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium">Quantity</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4 text-primary" />
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(dish.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;