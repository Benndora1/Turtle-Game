'use client';

import React from 'react';
import { BarChart, LineChart, PieChart, Users, DollarSign, ShoppingBag, TrendingUp, Calendar, Settings, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Sample data for the dashboard
const analyticsData = {
  totalSales: 25849.99,
  totalOrders: 384,
  totalCustomers: 1205,
  conversionRate: 3.45,
};

const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5100 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6300 },
  { month: 'May', revenue: 7400 },
  { month: 'Jun', revenue: 8200 },
];

export function Admin() {
  const pathname = usePathname();
  
  // Helper function to determine if a tab is active
  const isActiveTab = (path: string) => {
    if (path === '/admin' && pathname === '/admin') {
      return true;
    }
    if (path !== '/admin' && pathname?.startsWith(path)) {
      return true;
    }
    return false;
  };

  // Status color map
  const statusColors: { [key: string]: { bg: string; text: string } } = {
    Completed: { bg: 'bg-green-100', text: 'text-green-800' },
    Processing: { bg: 'bg-blue-100', text: 'text-blue-800' },
    Shipped: { bg: 'bg-purple-100', text: 'text-purple-800' },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    Cancelled: { bg: 'bg-red-100', text: 'text-red-800' },
  };

  // Sample orders
  const recentOrders = [
    { id: 1001, customer: 'John Smith', items: 3, total: 45.99, status: 'Completed' },
    { id: 1002, customer: 'Sarah Johnson', items: 5, total: 89.95, status: 'Processing' },
    { id: 1003, customer: 'Michael Brown', items: 2, total: 34.50, status: 'Shipped' },
    { id: 1004, customer: 'Emily Davis', items: 1, total: 19.99, status: 'Pending' },
    { id: 1005, customer: 'Robert Wilson', items: 4, total: 67.80, status: 'Cancelled' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-2xl font-bold text-indigo-600">
                ShopAdmin
              </Link>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <Bell size={20} />
              </button>
              <button className="ml-4 p-2 rounded-full text-gray-400 hover:text-gray-500">
                <Settings size={20} />
              </button>
              <div className="ml-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  A
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab navigation */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: <LineChart size={16} />, path: '/admin' },
              { id: 'orders', name: 'Orders', icon: <ShoppingBag size={16} />, path: '/admin/orders' },
              { id: 'customers', name: 'Customers', icon: <Users size={16} />, path: '/admin/customers' },
              { id: 'products', name: 'Products', icon: <BarChart size={16} />, path: '/admin/products' },
              { id: 'analytics', name: 'Analytics', icon: <PieChart size={16} />, path: '/admin/analytics' },
            ].map((tab) => (
              <Link
                key={tab.id}
                href={tab.path}
                className={`${
                  isActiveTab(tab.path)
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Dashboard summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Sales</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">${analyticsData.totalSales.toLocaleString()}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">12.5%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Orders</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">{analyticsData.totalOrders}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">8.2%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Customers</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">{analyticsData.totalCustomers}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">5.3%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Conversion Rate</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">{analyticsData.conversionRate}%</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">2.1%</span>
                <span className="text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart - takes up 2/3 of the grid on large screens */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
              <div className="flex items-center space-x-2">
                <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Last 30 days</option>
                  <option>Last 60 days</option>
                  <option>Last quarter</option>
                  <option>This year</option>
                </select>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              {/* Placeholder for the chart */}
              <div className="text-gray-400 flex flex-col items-center">
                <BarChart size={48} />
                <span className="mt-2 text-sm">Revenue chart visualization</span>
              </div>
            </div>
          </div>

          {/* Sales by Category - takes up 1/3 of the grid on large screens */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              {/* Placeholder for the pie chart */}
              <div className="text-gray-400 flex flex-col items-center">
                <PieChart size={48} />
                <span className="mt-2 text-sm">Sales distribution chart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <Link 
              href="/admin/orders"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items} items</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status].bg} ${statusColors[order.status].text}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link 
                        href={`/admin/orders/${order.id}`}
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
            Showing 5 of 384 orders
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-6">
              {[
                { time: '2 hours ago', event: 'New order #1005 from Robert Wilson', icon: <ShoppingBag size={16} className="text-indigo-600" /> },
                { time: '4 hours ago', event: 'Emily Davis updated her shipping address', icon: <Users size={16} className="text-blue-600" /> },
                { time: '6 hours ago', event: 'Inventory alert: "Wireless Headphones" low stock (3 remaining)', icon: <Bell size={16} className="text-yellow-600" /> },
                { time: '1 day ago', event: 'Monthly sales report generated', icon: <BarChart size={16} className="text-green-600" /> },
                { time: '2 days ago', event: 'New product "Smart Watch X1" added to inventory', icon: <PieChart size={16} className="text-purple-600" /> },
              ].map((activity, index) => (
                <li key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 rounded-full bg-gray-100 p-1">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-medium">{activity.event}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;