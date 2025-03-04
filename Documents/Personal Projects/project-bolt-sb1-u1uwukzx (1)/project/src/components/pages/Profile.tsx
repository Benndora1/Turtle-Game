import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { User, Package, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex gap-8">
        <ProfileSidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<ProfileInfo />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const links = [
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Package, label: 'Orders', path: '/profile/orders' },
    { icon: Settings, label: 'Settings', path: '/profile/settings' },
  ];

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-6">
      <nav className="space-y-2">
        {links.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <link.icon className="w-5 h-5" />
            <span>{link.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const ProfileInfo = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" className="w-full px-4 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" className="w-full px-4 py-2 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input type="tel" className="w-full px-4 py-2 border rounded-lg" />
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
        Save Changes
      </button>
    </form>
  </div>
);

const OrderHistory = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Order History</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="border rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Order #{order}</span>
            <span className="text-gray-600">2024-02-{order}</span>
          </div>
          <div className="text-sm text-gray-600">
            <p>Status: Delivered</p>
            <p>Total: $45.99</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProfileSettings = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Settings</h2>
    <div className="space-y-4">
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <span>Email notifications for orders</span>
        </label>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <span>SMS notifications for delivery</span>
        </label>
      </div>
    </div>
  </div>
);

export default Profile;