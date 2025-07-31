import React, { useState } from 'react';
import { LayoutDashboard, PlusCircle, Package, Users, LogOut } from 'lucide-react'; 
import AddProductPage from './components/AddProductPage';
import ShowAllProductsPage from './components/ShowAllProductsPage';
import ShowAllUsersPage from './components/ShowAllUsersPage';

const AdminDashboard = () => { 
  const [activeTab, setActiveTab] = useState('dashboard'); 

  // --- Dashboard Home Sub-Component ---
  const DashboardHome = () => (
    <div className="p-8 bg-white rounded-xl shadow-md text-center">
      <LayoutDashboard size={60} className="text-purple-600 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Admin Dashboard</h2>
      <p className="text-gray-600 text-lg">Select an option from the sidebar to manage your store.</p>
    </div>
  );

  // --- Render Content Based on Active Tab ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'addProduct':
        return <AddProductPage />;
      case 'showProducts':
        return <ShowAllProductsPage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-indigo-800 to-purple-900 text-white p-6 flex flex-col shadow-xl">
        <div className="text-3xl font-extrabold text-white mb-10 text-center">
          Admin Panel
        </div>
        <nav className="flex-grow space-y-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
              activeTab === 'dashboard' ? 'bg-purple-600 shadow-lg' : 'hover:bg-indigo-700'
            }`}
          >
            <LayoutDashboard size={20} className="mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('addProduct')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
              activeTab === 'addProduct' ? 'bg-purple-600 shadow-lg' : 'hover:bg-indigo-700'
            }`}
          >
            <PlusCircle size={20} className="mr-3" /> Add Product
          </button>
          <button
            onClick={() => setActiveTab('showProducts')}
            className={`w-full flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
              activeTab === 'showProducts' ? 'bg-purple-600 shadow-lg' : 'hover:bg-indigo-700'
            }`}
          >
            <Package size={20} className="mr-3" /> All Products
          </button>
        </nav>
        <div className="mt-auto pt-6 border-t border-indigo-700">
          <button className="w-full flex items-center px-4 py-3 rounded-lg text-lg font-medium text-red-300 hover:bg-indigo-700 transition-all duration-200">
            <LogOut size={20} className="mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
