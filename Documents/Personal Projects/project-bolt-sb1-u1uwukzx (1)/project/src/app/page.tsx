'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  ThumbsUp, 
  Truck, 
  ArrowRight, 
  Star, 
  ChevronRight, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const popularItems = [
  {
    id: 1,
    name: "Classic Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: 12.99,
    rating: 4.8,
    category: "Burgers"
  },
  {
    id: 11,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    price: 14.99,
    rating: 4.7,
    category: "Pizza"
  },
  {
    id: 21,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    price: 9.99,
    rating: 4.5,
    category: "Salads"
  },
  {
    id: 4,
    name: "Mushroom Swiss",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    price: 14.99,
    rating: 4.6,
    category: "Burgers"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Regular Customer",
    quote: "I use this service almost every week. The food is always delicious and arrives right on time. Absolutely love it!"
  },
  {
    id: 2,
    name: "Michael Thompson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "Business Professional",
    quote: "Perfect for ordering lunch at the office. Being able to pre-order saves me so much time during busy workdays."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Food Enthusiast",
    quote: "The quality of food is exceptional. I'm impressed by the variety of options and how well they maintain temperature during delivery."
  }
];

const categories = [
  { name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { name: "Pizza", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143" },
  { name: "Salads", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1" },
  { name: "Desserts", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" }
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // For testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // For animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with animated text and multiple CTAs */}
      <div
        className="h-[80vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Delicious Food<br />
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-md">
                Pre-order your favorite meals and skip the wait. Fresh, fast, and always on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center group"
                >
                  Order Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/menu"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-900 transition"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>

          {/* Floating order stats */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 hidden md:block border border-white/20">
            <div className="flex gap-4 text-white">
              <div className="text-center">
                <p className="text-3xl font-bold">2k+</p>
                <p className="text-sm opacity-80">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm opacity-80">Menu Items</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">30min</p>
                <p className="text-sm opacity-80">Avg. Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - NEW */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Explore Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our carefully crafted selection of dishes, organized by category for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link
                href={`/menu?category=${category.name}`}
                key={index}
                className="group relative rounded-xl overflow-hidden h-48 transition-all hover:shadow-xl"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm flex items-center group-hover:underline">
                      View selection <ChevronRight className="w-4 h-4 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Items Section - NEW */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Dishes</h2>
              <p className="text-gray-600">Most loved items by our customers</p>
            </div>
            <Link
              href="/menu"
              className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition"
            >
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-indigo-600">${item.price}</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced with better visuals */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We strive to provide the best food delivery experience possible
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advance Ordering</h3>
              <p className="text-gray-600">
                Plan ahead and have your meal ready exactly when you want it. 
                No more waiting in line or for preparation.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Food</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients prepared by expert chefs.
                Quality and taste are never compromised.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Our efficient delivery network ensures your food arrives
                promptly and in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - NEW */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our ordering process is simple and convenient
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/4 text-center mb-8 md:mb-0">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Browse Menu</h3>
              <p className="text-gray-600">Select from our wide variety of dishes</p>
            </div>
            
            <div className="hidden md:block w-16">
              <hr className="border-dashed border-gray-300 border-t-2" />
            </div>
            
            <div className="md:w-1/4 text-center mb-8 md:mb-0">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Place Your Order</h3>
              <p className="text-gray-600">Choose your items and select delivery time</p>
            </div>
            
            <div className="hidden md:block w-16">
              <hr className="border-dashed border-gray-300 border-t-2" />
            </div>
            
            <div className="md:w-1/4 text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Enjoy Your Food</h3>
              <p className="text-gray-600">Receive your order right on time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - NEW */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Don't just take our word for it
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    index === currentTestimonial 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center">
                    <div className="relative mb-6">
                      <div className="absolute -top-1 -left-1 text-indigo-600 text-6xl opacity-20">"</div>
                      <p className="text-gray-700 text-lg relative z-10">{testimonial.quote}</p>
                      <div className="absolute -bottom-1 -right-1 text-indigo-600 text-6xl opacity-20">"</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mb-3"
                      />
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`mx-1 w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section - NEW */}
      <div className="py-16 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
              <p className="text-indigo-100 mb-6">
                Get exclusive deals and faster ordering with our mobile app. 
                Available now on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center transition">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6,13.8l1.2-2.1c0.2-0.3,0.2-0.6,0-0.9l-1.2-2.1C17.4,8.1,17,8,16.6,8l-2.4,0c-0.4,0-0.7,0.2-0.9,0.5l-1.2,2.1c-0.2,0.3-0.2,0.6,0,0.9l1.2,2.1c0.2,0.3,0.5,0.5,0.9,0.5l2.4,0C17,14,17.4,13.9,17.6,13.8z M8.4,13.8l1.2-2.1c0.2-0.3,0.2-0.6,0-0.9L8.4,8.7C8.2,8.4,7.8,8.2,7.4,8.2L5,8.2c-0.4,0-0.7,0.2-0.9,0.5L2.9,10.8c-0.2,0.3-0.2,0.6,0,0.9l1.2,2.1c0.2,0.3,0.5,0.5,0.9,0.5l2.4,0C7.8,14.2,8.2,14.1,8.4,13.8z M13,5.2l-1.2,2.1c-0.2,0.3-0.2,0.6,0,0.9l1.2,2.1c0.2,0.3,0.5,0.5,0.9,0.5h2.4c0.4,0,0.7-0.2,0.9-0.5l1.2-2.1c0.2-0.3,0.2-0.6,0-0.9l-1.2-2.1C17,4.9,16.6,4.8,16.2,4.8h-2.4C13.5,4.8,13.2,4.9,13,5.2z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center transition">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.52.293-.707zM14.5 12.707l2.302 2.302-7.537 4.474L14.5 12.707zm.99-1.414l-8.066-8.066 7.604 4.506L15.49 11.293zM7.304 3.501l-3.59 6.077 2.625 2.627 8.03-4.759-7.065-3.945zm.637 16.998L4.316 14.37 7.94 20.5z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://i.imgur.com/Dn0qoCG.png" 
                alt="Mobile App" 
                className="max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - NEW */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Satisfy your cravings with just a few clicks. Browse our menu and place your order now!
          </p>
          <Link
            href="/menu"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition inline-flex items-center"
          >
            Order Now <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Newsletter - NEW */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600">
                  Stay updated with our latest offers, promotions, and new menu items
                </p>
              </div>
              <div className="md:w-1/2">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-indigo-700 transition"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - NEW
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FoodDelivery</h3>
              <p className="text-gray-400 mb-4">
                Delicious food delivered right to your doorstep
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div> */}
            
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link href="/menu" className="text-gray-400 hover:text-white transition">Menu</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Our Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              </ul>
            </div> */}
            
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  support@fooddelivery.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
          </div>
        </div>
    //   </footer> */}
    // </div>
  );
};

export default Home;