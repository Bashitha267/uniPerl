import React, { useState } from 'react';
import { Search, Menu, X, Plus, User, LogOut, Heart, MessageCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onSearch: (query: string) => void;
  onPostAd: () => void;
  onOpenAuth: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onPostAd, onOpenAuth }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ClassiMarket</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onPostAd}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Post Ad</span>
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                    <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <User className="h-4 w-4" />
                      <span>My Profile</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>Favorites</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>Messages</span>
                    </a>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <button
              onClick={() => {
                onPostAd();
                setShowMobileMenu(false);
              }}
              className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Post Ad</span>
            </button>

            {user ? (
              <>
                <div className="px-4 py-2 text-sm font-medium text-gray-700">
                  Welcome, {user.name}
                </div>
                <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="h-5 w-5" />
                  <span>My Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors w-full text-left text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth();
                  setShowMobileMenu(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors w-full text-left"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;