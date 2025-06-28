import React from 'react';
import { Train, Menu, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Indian Railways</h1>
              <p className="text-xs text-gray-600">Innovation Hub</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Solutions</a>
            <a href="#analytics" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Analytics</a>
            <a href="#sustainability" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sustainability</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <Menu className="h-5 w-5 text-gray-600 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;