import { NextResponse } from 'next/server';

const menuItems = [
  
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
  }];


export async function GET() {
    return NextResponse.json(menuItems);
  }