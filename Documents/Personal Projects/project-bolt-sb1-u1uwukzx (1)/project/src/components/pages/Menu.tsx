'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const menuItems = [
  // Burgers
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables",
    price: 12.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Melted cheddar cheese on beef patty",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
  },
  {
    id: 3,
    name: "Bacon Burger",
    description: "Crispy bacon with BBQ sauce",
    price: 14.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
  },
  {
    id: 4,
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms and Swiss cheese",
    price: 14.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
  },
  {
    id: 5,
    name: "Double Burger",
    description: "Two beef patties with special sauce",
    price: 16.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398"
  },
  {
    id: 6,
    name: "Veggie Burger",
    description: "Plant-based patty with avocado",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2"
  },
  {
    id: 7,
    name: "Spicy Burger",
    description: "Jalapeños and pepper jack cheese",
    price: 14.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9"
  },
  {
    id: 8,
    name: "BBQ Burger",
    description: "Onion rings and BBQ sauce",
    price: 15.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
  },
  {
    id: 9,
    name: "Hawaiian Burger",
    description: "Grilled pineapple and teriyaki sauce",
    price: 15.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b"
  },
  {
    id: 10,
    name: "Turkey Burger",
    description: "Lean turkey patty with cranberry sauce",
    price: 13.99,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55"
  },

  // Pizza
  {
    id: 11,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil",
    price: 14.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
  },
  {
    id: 12,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella",
    price: 15.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e"
  },
  {
    id: 13,
    name: "Supreme Pizza",
    description: "Loaded with vegetables and meats",
    price: 18.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 14,
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken with BBQ sauce",
    price: 17.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    id: 15,
    name: "Vegetarian Pizza",
    description: "Assorted fresh vegetables",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47"
  },
  {
    id: 16,
    name: "Hawaiian Pizza",
    description: "Ham and pineapple",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
  },
  {
    id: 17,
    name: "Buffalo Pizza",
    description: "Spicy buffalo chicken",
    price: 17.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
  },
  {
    id: 18,
    name: "Four Cheese Pizza",
    description: "Blend of premium cheeses",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 19,
    name: "Meat Lovers Pizza",
    description: "Loaded with various meats",
    price: 18.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e"
  },
  {
    id: 20,
    name: "Pesto Pizza",
    description: "Basil pesto with cherry tomatoes",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47"
  },

  // Salads
  {
    id: 21,
    name: "Caesar Salad",
    description: "Crispy romaine with classic caesar dressing",
    price: 9.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    id: 22,
    name: "Greek Salad",
    description: "Mixed greens with feta and olives",
    price: 10.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    id: 23,
    name: "Cobb Salad",
    description: "Bacon, egg, and blue cheese",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 24,
    name: "Spinach Salad",
    description: "Baby spinach with strawberries",
    price: 10.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    id: 25,
    name: "Asian Chicken Salad",
    description: "Grilled chicken with sesame dressing",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    id: 26,
    name: "Quinoa Salad",
    description: "Mixed quinoa with roasted vegetables",
    price: 11.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 27,
    name: "Mediterranean Salad",
    description: "Mixed greens with hummus",
    price: 11.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    id: 28,
    name: "Kale Salad",
    description: "Fresh kale with tahini dressing",
    price: 10.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    id: 29,
    name: "Caprese Salad",
    description: "Tomatoes, mozzarella, and basil",
    price: 11.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 30,
    name: "Taco Salad",
    description: "Seasoned ground beef with tortilla strips",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  }
];

// Add tags/attributes to menu items
const enhancedMenuItems = menuItems.map(item => {
  let tags: string[] = [];
  
  // Assign tags based on item properties or names
  if (item.category === "Burgers") {
    tags.push("beef");
    if (item.name.toLowerCase().includes("cheese")) tags.push("cheese");
    if (item.name.toLowerCase().includes("bacon")) tags.push("bacon");
    if (item.name.toLowerCase().includes("spicy")) tags.push("spicy");
    if (item.name.toLowerCase().includes("veggie")) {
      tags.push("vegetarian");
      tags = tags.filter(tag => tag !== "beef");
    }
  }
  
  if (item.category === "Pizza") {
    if (item.name.toLowerCase().includes("vegetarian")) tags.push("vegetarian");
    if (item.name.toLowerCase().includes("cheese")) tags.push("cheese");
    if (item.name.toLowerCase().includes("buffalo") || item.name.toLowerCase().includes("spicy")) tags.push("spicy");
    if (item.name.toLowerCase().includes("meat")) tags.push("meat");
    if (item.name.toLowerCase().includes("chicken")) tags.push("chicken");
    if (item.name.toLowerCase().includes("pepperoni")) tags.push("pepperoni");
    if (item.name.toLowerCase().includes("pineapple") || item.name.toLowerCase().includes("hawaiian")) tags.push("pineapple");
  }
  
  if (item.category === "Salads") {
    tags.push("healthy");
    if (item.name.toLowerCase().includes("chicken")) tags.push("chicken");
    if (!item.name.toLowerCase().includes("chicken") && !item.name.toLowerCase().includes("beef") && 
        !item.name.toLowerCase().includes("taco")) {
      tags.push("vegetarian");
    }
    if (item.name.toLowerCase().includes("bacon")) tags.push("bacon");
    if (item.name.toLowerCase().includes("egg")) tags.push("egg");
    if (item.name.toLowerCase().includes("feta") || item.name.toLowerCase().includes("cheese") || 
        item.name.toLowerCase().includes("mozzarella")) tags.push("cheese");
  }
  
  // Price-based tags
  if (item.price < 12) tags.push("budget-friendly");
  else if (item.price >= 18) tags.push("premium");
  
  return { ...item, tags };
});

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20 });
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredItems, setFilteredItems] = useState(enhancedMenuItems);
  const { addToCart } = useCart();

  const categories = ['All', ...Array.from(new Set(enhancedMenuItems.map(item => item.category)))];
  
  // Get all unique tags
  const allTags = Array.from(new Set(enhancedMenuItems.flatMap(item => item.tags))).sort();

  // Find min and max prices
  const minPrice = Math.floor(Math.min(...enhancedMenuItems.map(item => item.price)));
  const maxPrice = Math.ceil(Math.max(...enhancedMenuItems.map(item => item.price)));

  useEffect(() => {
    // Initialize price range based on actual min/max prices
    setPriceRange({ min: minPrice, max: maxPrice });
  }, []);

  useEffect(() => {
    // Filter items based on all selected criteria
    let result = enhancedMenuItems;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter(item => 
        selectedTags.every(tag => item.tags.includes(tag))
      );
    }
    
    // Filter by price range
    result = result.filter(item => 
      item.price >= priceRange.min && item.price <= priceRange.max
    );
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    // Sort results
    switch (sortOption) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (by id)
        break;
    }
    
    setFilteredItems(result);
  }, [selectedCategory, selectedTags, priceRange, sortOption, searchQuery]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedTags([]);
    setPriceRange({ min: minPrice, max: maxPrice });
    setSortOption('default');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSearchQuery('')}
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          
          {/* Sort and Filter Buttons */}
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${showFilters ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'bg-white border-gray-300 text-gray-700'}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {(selectedCategory !== 'All' || selectedTags.length > 0 || searchQuery || sortOption !== 'default') && (
                <span className="ml-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {selectedTags.length + (selectedCategory !== 'All' ? 1 : 0) + (searchQuery ? 1 : 0) + (sortOption !== 'default' ? 1 : 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Advanced Filter Panel */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Filters</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Clear all filters
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex items-center gap-4">
                  <span>${priceRange.min.toFixed(2)}</span>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step="1"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  />
                  <span>${priceRange.max.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Tags/Attributes */}
              <div>
                <h4 className="font-medium mb-2">Dietary & Ingredient Options</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        selectedTags.includes(tag)
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Results summary */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
        </p>
        
        {/* Show active filters */}
        {(selectedCategory !== 'All' || selectedTags.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {selectedTags.map(tag => (
              <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                {tag}
                <button onClick={() => handleTagToggle(tag)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Menu Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/menu/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </Link>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/menu/${item.id}`}>
                    <h3 className="text-xl font-semibold hover:text-indigo-600 transition">{item.name}</h3>
                  </Link>
                  <span className="text-lg font-bold text-indigo-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                
                {/* Tags display */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.name} added to cart!`);
                  }}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-600 mb-4">Try changing your search or filter criteria</p>
          <button 
            onClick={clearFilters}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}