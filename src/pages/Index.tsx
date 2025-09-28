import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { getCuisineCategories } from "@/data/menuData";
import afghaniHero from "@/assets/afghani-hero.jpg";
import northIndianHero from "@/assets/north-indian-hero.jpg";
import arabianHero from "@/assets/arabian-hero.jpg";

interface IndexProps {
  onMenuOpen: () => void;
}

const Index = ({ onMenuOpen }: IndexProps) => {
  const categories = [
    {
      id: 'afghani',
      name: 'Afghani Cuisine',
      description: 'Traditional flavors from Afghanistan with aromatic spices and tender meats',
      image: afghaniHero
    },
    {
      id: 'north-indian',
      name: 'North Indian Cuisine', 
      description: 'Rich curries and biryanis from the heart of Northern India',
      image: northIndianHero
    },
    {
      id: 'arabian',
      name: 'Arabian Cuisine',
      description: 'Authentic Middle Eastern dishes with traditional preparations', 
      image: arabianHero
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-dark/90 backdrop-blur-sm sticky top-0 z-40 border-b border-primary/30">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-amiri font-bold text-primary">Arabian Corner</h1>
            <p className="text-sm text-muted-foreground">Authentic Middle Eastern & South Asian Cuisine</p>
          </div>
          
          <button
            onClick={onMenuOpen}
            className="p-3 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 pattern-geometric">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-amiri font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Arabian Corner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the rich culinary traditions of Afghanistan, Northern India, and the Arabian Peninsula. 
            Each dish tells a story of heritage, spice, and authentic flavors passed down through generations.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-12">
            Explore Our <span className="text-primary">Cuisines</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-2xl hover-lift glow-gold bg-card shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-amiri font-bold mb-2 group-hover:text-primary-glow transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-dark-foreground pattern-islamic relative">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h4 className="text-2xl font-amiri font-bold text-primary mb-4">Arabian Corner</h4>
            <p className="text-muted-foreground mb-6">
              Bringing authentic Middle Eastern and South Asian flavors to your table
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>📞 (555) 123-4567</span>
              <span>📧 info@arabiancorner.com</span>
              <span>📍 123 Spice Street, Flavor City</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
