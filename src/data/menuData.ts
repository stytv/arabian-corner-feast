export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'afghani' | 'north-indian' | 'arabian';
  ingredients: string[];
  isSpicy: boolean;
  isVegetarian: boolean;
}

export const menuData: Dish[] = [
  // Afghani Dishes
  {
    id: 'afghani-1',
    name: 'Kabuli Pulao',
    description: 'Traditional Afghan rice dish with tender lamb, raisins, and aromatic spices',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    category: 'afghani',
    ingredients: ['Basmati Rice', 'Lamb', 'Raisins', 'Carrots', 'Onions', 'Afghan Spices'],
    isSpicy: false,
    isVegetarian: false
  },
  {
    id: 'afghani-2', 
    name: 'Chapli Kebab',
    description: 'Spiced ground beef patties from Peshawar, served with naan and chutney',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    category: 'afghani',
    ingredients: ['Ground Beef', 'Onions', 'Tomatoes', 'Coriander', 'Afghan Spices'],
    isSpicy: true,
    isVegetarian: false
  },
  {
    id: 'afghani-3',
    name: 'Mantu',
    description: 'Steamed dumplings filled with seasoned ground lamb, topped with yogurt and meat sauce',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
    category: 'afghani',
    ingredients: ['Dumpling Wrappers', 'Ground Lamb', 'Onions', 'Yogurt', 'Tomato Sauce'],
    isSpicy: false,
    isVegetarian: false
  },

  // North Indian Dishes  
  {
    id: 'north-indian-1',
    name: 'Butter Chicken',
    description: 'Creamy tomato curry with tender chicken pieces, served with basmati rice',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    category: 'north-indian',
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Butter', 'Garam Masala', 'Fenugreek'],
    isSpicy: false,
    isVegetarian: false
  },
  {
    id: 'north-indian-2',
    name: 'Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken and cooked in traditional dum style',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop',
    category: 'north-indian', 
    ingredients: ['Basmati Rice', 'Chicken', 'Yogurt', 'Saffron', 'Mint', 'Biryani Spices'],
    isSpicy: true,
    isVegetarian: false
  },
  {
    id: 'north-indian-3',
    name: 'Paneer Makhani',
    description: 'Rich and creamy cottage cheese curry in buttery tomato sauce',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    category: 'north-indian',
    ingredients: ['Paneer', 'Tomatoes', 'Cream', 'Cashews', 'Butter', 'Indian Spices'],
    isSpicy: false,
    isVegetarian: true
  },

  // Arabian Dishes
  {
    id: 'arabian-1',
    name: 'Lamb Mandi',
    description: 'Slow-cooked lamb with fragrant rice, traditional Yemeni style preparation',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    category: 'arabian',
    ingredients: ['Lamb', 'Basmati Rice', 'Mandi Spices', 'Saffron', 'Rose Water'],
    isSpicy: false,
    isVegetarian: false
  },
  {
    id: 'arabian-2',
    name: 'Mixed Shawarma Platter',
    description: 'Combination of chicken and lamb shawarma with hummus, tabbouleh, and pita bread',
    price: 20.99,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop',
    category: 'arabian',
    ingredients: ['Chicken', 'Lamb', 'Pita Bread', 'Hummus', 'Tabbouleh', 'Garlic Sauce'],
    isSpicy: true,
    isVegetarian: false
  },
  {
    id: 'arabian-3',
    name: 'Mezze Platter',
    description: 'Traditional Middle Eastern appetizer selection with hummus, baba ghanoush, and olives',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1540713434306-58505970b745?w=400&h=300&fit=crop',
    category: 'arabian',
    ingredients: ['Hummus', 'Baba Ghanoush', 'Olives', 'Pita Bread', 'Tahini', 'Olive Oil'],
    isSpicy: false,
    isVegetarian: true
  }
];

export const getCuisineCategories = () => [
  {
    id: 'afghani',
    name: 'Afghani Cuisine',
    description: 'Traditional flavors from Afghanistan with aromatic spices and tender meats',
    image: '/src/assets/afghani-hero.jpg'
  },
  {
    id: 'north-indian', 
    name: 'North Indian Cuisine',
    description: 'Rich curries and biryanis from the heart of Northern India',
    image: '/src/assets/north-indian-hero.jpg'
  },
  {
    id: 'arabian',
    name: 'Arabian Cuisine', 
    description: 'Authentic Middle Eastern dishes with traditional preparations',
    image: '/src/assets/arabian-hero.jpg'
  }
];