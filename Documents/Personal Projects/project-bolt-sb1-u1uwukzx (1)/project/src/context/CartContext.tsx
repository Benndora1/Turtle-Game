'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { CartItem, MenuItem } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.item.price
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
        total: state.total + action.item.price
      };
    }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.itemId);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0)
      };
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.itemId);
      if (!item) return state;
      const quantityDiff = action.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.itemId
            ? { ...item, quantity: action.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff)
      };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', itemId });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', itemId, quantity });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};