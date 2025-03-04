'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Define the type for the orders object
type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: string;
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
};

const orders: Record<string, Order> = {
  '1001': {
    id: '1001',
    customer: 'John Doe',
    email: 'john@example.com',
    date: '2024-02-20',
    status: 'Completed',
    total: 45.99,
    items: [
  {
    id: 1,
    name: 'Classic Burger',
    price: 12.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80'
  },
      {
        id: 2,
        name: 'Margherita Pizza',
        price: 14.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80'
      }
    ]
  }
};

export default function OrderDetail() {
  const params = useParams();
  const order = orders[params.id as string];

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Order not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/admin"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">Order #{order.id}</h1>
              <p className="text-gray-600">Placed on {order.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold
              ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-gray-100 text-gray-800'}`}
            >
              {order.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
              <div className="space-y-2 text-gray-600">
                <p>Name: {order.customer}</p>
                <p>Email: {order.email}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 text-gray-600">
                <p>Total Items: {order.items.reduce((acc, item) => acc + item.quantity, 0)}</p>
                <p>Total Amount: ${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center border rounded-lg p-4">
                <Link href={`/menu/${item.id}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>
                <div className="ml-6 flex-grow">
                  <Link href={`/menu/${item.id}`}>
                    <h3 className="text-lg font-semibold hover:text-indigo-600 transition">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}