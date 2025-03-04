'use client';

import React, { useState } from 'react';
import { Calendar, ChevronDown, Download, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis 
} from 'recharts';

export function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30days');
  const [isTimeRangeOpen, setIsTimeRangeOpen] = useState(false);

  // Sample data for charts
  const salesData = [
    { name: 'Jan', value: 4200 },
    { name: 'Feb', value: 5100 },
    { name: 'Mar', value: 4800 },
    { name: 'Apr', value: 6300 },
    { name: 'May', value: 7400 },
    { name: 'Jun', value: 8200 },
    { name: 'Jul', value: 7800 },
    { name: 'Aug', value: 8600 },
    { name: 'Sep', value: 9200 },
    { name: 'Oct', value: 8700 },
    { name: 'Nov', value: 9400 },
    { name: 'Dec', value: 11200 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 35 },
    { name: 'Clothing', value: 25 },
    { name: 'Home Goods', value: 20 },
    { name: 'Accessories', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const trafficSourceData = [
    { name: 'Direct', value: 30 },
    { name: 'Organic Search', value: 25 },
    { name: 'Social Media', value: 20 },
    { name: 'Email', value: 15 },
    { name: 'Referral', value: 10 },
  ];

  const conversionData = [
    { name: 'Mon', visits: 800, orders: 40 },
    { name: 'Tue', visits: 950, orders: 65 },
    { name: 'Wed', visits: 1100, orders: 80 },
    { name: 'Thu', visits: 1200, orders: 90 },
    { name: 'Fri', visits: 1300, orders: 100 },
    { name: 'Sat', visits: 1400, orders: 110 },
    { name: 'Sun', visits: 1000, orders: 75 },
  ];

  const customerSegmentData = [
    { subject: 'New', A: 80, B: 90 },
    { subject: 'Returning', A: 98, B: 70 },
    { subject: 'Frequent', A: 86, B: 130 },
    { subject: 'High Value', A: 99, B: 100 },
    { subject: 'At Risk', A: 85, B: 90 },
  ];

  const productPerformanceData = [
    { name: 'Wireless Headphones', revenue: 12500, growth: 15 },
    { name: 'Smartphone Case', revenue: 8700, growth: 5 },
    { name: 'Bluetooth Speaker', revenue: 7400, growth: 10 },
    { name: 'Digital Watch', revenue: 6900, growth: -3 },
    { name: 'Ceramic Mug', revenue: 5200, growth: 8 },
  ];

  const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#F43F5E', '#F59E0B', '#10B981'];

  const CustomTooltip = ({ active, payload, label }: { active?: boolean, payload?: any[], label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded border border-gray-200">
          <p className="text-sm font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Analytics summary data
  const analyticsSummary = [
    { title: 'Total Revenue', value: '$82,500', change: 12.5, increasing: true },
    { title: 'Conversion Rate', value: '3.8%', change: 0.5, increasing: true },
    { title: 'Average Order Value', value: '$65.25', change: 5.2, increasing: true },
    { title: 'Total Orders', value: '1,265', change: 8.3, increasing: true },
    { title: 'Returning Customers', value: '42%', change: 3.1, increasing: true },
    { title: 'Cart Abandonment', value: '28%', change: 2.4, increasing: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-2xl font-bold text-indigo-600">
                ShopAdmin
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Analytics Dashboard
            </h2>
          </div>
          <div className="mt-4 flex items-center md:mt-0 md:ml-4 space-x-3">
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsTimeRangeOpen(!isTimeRangeOpen)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {timeRange === '7days' && 'Last 7 days'}
                {timeRange === '30days' && 'Last 30 days'}
                {timeRange === 'quarter' && 'Last quarter'}
                {timeRange === 'year' && 'This year'}
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              {isTimeRangeOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => { setTimeRange('7days'); setIsTimeRangeOpen(false); }}
                    >
                      Last 7 days
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => { setTimeRange('30days'); setIsTimeRangeOpen(false); }}
                    >
                      Last 30 days
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => { setTimeRange('quarter'); setIsTimeRangeOpen(false); }}
                    >
                      Last quarter
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => { setTimeRange('year'); setIsTimeRangeOpen(false); }}
                    >
                      This year
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button 
              type="button" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button 
              type="button" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {/* Analytics Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {analyticsSummary.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                  <div className={`flex items-center text-sm ${item.increasing ? 'text-green-500' : 'text-red-500'}`}>
                    {item.increasing ? '+' : '-'}{Math.abs(item.change)}%
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="h-2 w-full overflow-hidden">
                  <div 
                    className={`h-full ${item.increasing ? 'bg-green-500' : 'bg-red-500'}`} 
                    style={{ width: `${Math.min(100, Math.abs(item.change) * 5)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue and Category Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Monthly Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue</h3>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EEE" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    name="Revenue" 
                    stroke="#6366F1" 
                    fill="#EEF2FF" 
                    activeDot={{ r: 8 }} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Traffic Source and Conversion Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Rates */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversions</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={conversionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="visits" name="Visits" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="orders" name="Orders" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Customer Segments and Product Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Segments */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Segments</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={customerSegmentData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Last Month" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Current Month" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Product Performance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={productPerformanceData}
                  margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" scale="band" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Growth Rate</h4>
              <div className="space-y-2">
                {productPerformanceData.map((product, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-32 text-sm truncate">{product.name}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${product.growth >= 0 ? 'bg-green-500' : 'bg-red-500'}`} 
                        style={{ width: `${Math.abs(product.growth) * 5}%` }}
                      ></div>
                    </div>
                    <span className={`ml-2 text-sm ${product.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sales Trends */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" name="Sales" stroke="#6366F1" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Admin as default } from '@/components/admin/Admin';
