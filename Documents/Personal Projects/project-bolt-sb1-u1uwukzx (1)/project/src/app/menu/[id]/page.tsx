'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/types';

// This would typically come from an API/database
const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables and our special sauce. Served with crispy lettuce, ripe tomatoes, and melted cheese on a toasted brioche bun.",
    price: 12.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Special sauce", "Brioche bun"],
    nutritionalInfo: {
      calories: 650,
      protein: "35g",
      carbs: "45g",
      fat: "38g"
    }
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with fresh tomatoes, mozzarella, and basil. Made with our homemade pizza dough and baked in a wood-fired oven.",
    price: 14.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80",
    ingredients: ["Tomato sauce", "Fresh mozzarella", "Basil", "Olive oil", "Pizza dough"],
    nutritionalInfo: {
      calories: 850,
      protein: "28g",
      carbs: "98g",
      fat: "26g"
    }
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crispy romaine lettuce with classic caesar dressing, topped with croutons and parmesan cheese. A healthy and delicious choice.",
    price: 9.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80",
    ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
    nutritionalInfo: {
      calories: 350,
      protein: "12g",
      carbs: "18g",
      fat: "28g"
    }
  }
];

export default function ProductDetail() {
  const params = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const product = menuItems.find(item => item.id === Number(params.id));
    if (product) {
      setItem(product);
    }
  }, [params.id]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-2xl text-indigo-600 font-semibold mb-6">${item.price}</p>
          <p className="text-gray-600 mb-8">{item.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {item.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Nutritional Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Calories</p>
                <p className="text-xl font-semibold">{item.nutritionalInfo?.calories}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Protein</p>
                <p className="text-xl font-semibold">{item.nutritionalInfo?.protein}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Carbs</p>
                <p className="text-xl font-semibold">{item.nutritionalInfo?.carbs}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Fat</p>
                <p className="text-xl font-semibold">{item.nutritionalInfo?.fat}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              addToCart(item);
              alert(`${item.name} added to cart!`);
            }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}