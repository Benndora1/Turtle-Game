'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Menu as MenuIcon, User, LogOut, X } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Navbar: React.FC = () => {
  const { state } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center"
              aria-label="FoodieExpress Home"
            >
              <MenuIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-gray-800">FoodieExpress</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Auth Button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-indigo-600 flex items-center transition-colors"
                aria-label="Log out"
              >
                <LogOut className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : (
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="Log in"
              >
                <User className="h-6 w-6" aria-hidden="true" />
              </Link>
            )}

            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart 
                className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" 
                aria-hidden="true"
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          {navigationLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 px-3 py-2">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-indigo-600 flex items-center"
                aria-label="Log out"
              >
                <LogOut className="h-6 w-6" aria-hidden="true" />
                <span className="ml-2">Logout</span>
              </button>
            ) : (
              <Link 
                href="/login"
                className="text-gray-700 hover:text-indigo-600 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Log in"
              >
                <User className="h-6 w-6" aria-hidden="true" />
                <span className="ml-2">Login</span>
              </Link>
            )}
            
            <Link 
              href="/cart"
              className="relative flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" aria-hidden="true" />
              <span className="ml-2">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;