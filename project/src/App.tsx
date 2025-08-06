import React, { useState, useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import SearchFilters from './components/SearchFilters';
import AdCard from './components/AdCard';
import PostAdModal from './components/PostAdModal';
import AuthModal from './components/AuthModal';
import { SearchFilters as SearchFiltersType, Ad } from './types';
import { sampleAds, getFilteredAds } from './data/sampleAds';
import { TrendingUp, Star, Zap } from 'lucide-react';

function App() {
  const [ads, setAds] = useState<Ad[]>(sampleAds);
  const [filteredAds, setFilteredAds] = useState<Ad[]>(sampleAds);
  const [showPostAdModal, setShowPostAdModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: '',
    category: '',
    subcategory: '',
    minPrice: 0,
    maxPrice: 0,
    condition: '',
    location: '',
    district: '',
  });

  useEffect(() => {
    const filtered = getFilteredAds(ads, filters);
    // Sort promoted ads first
    const sorted = filtered.sort((a, b) => {
      if (a.isPromoted && !b.isPromoted) return -1;
      if (!a.isPromoted && b.isPromoted) return 1;
      return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
    });
    setFilteredAds(sorted);
  }, [ads, filters]);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, query }));
    setShowFilters(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setFilters(prev => ({ 
      ...prev, 
      category: categoryId,
      subcategory: ''
    }));
    setShowFilters(true);
  };

  const handlePostAd = (adData: Omit<Ad, 'id' | 'userId' | 'userName' | 'datePosted' | 'views'>) => {
    const newAd: Ad = {
      ...adData,
      id: Date.now().toString(),
      userId: '1',
      userName: 'Current User',
      datePosted: new Date().toISOString(),
      views: 0,
    };
    
    setAds(prev => [newAd, ...prev]);
  };

  const handleAdClick = (ad: Ad) => {
    // In a real app, this would navigate to ad details page
    console.log('Ad clicked:', ad);
    
    // Update views count
    setAds(prev => prev.map(a => 
      a.id === ad.id ? { ...a, views: a.views + 1 } : a
    ));
  };

  const promotedAds = filteredAds.filter(ad => ad.isPromoted);
  const regularAds = filteredAds.filter(ad => !ad.isPromoted);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onSearch={handleSearch}
          onPostAd={() => setShowPostAdModal(true)}
          onOpenAuth={() => setShowAuthModal(true)}
        />

        <SearchFilters
          filters={filters}
          onFiltersChange={setFilters}
          isOpen={showFilters}
          onToggle={() => setShowFilters(!showFilters)}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section - Only show when no filters are active */}
          {!filters.query && !filters.category && (
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Buy & Sell Anything in 
                <span className="text-blue-600"> Sri Lanka</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your trusted marketplace for vehicles, electronics, property, jobs & more
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Quick & Easy</h3>
                    <p className="text-sm text-gray-600">Post ads in minutes</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Trusted Sellers</h3>
                    <p className="text-sm text-gray-600">Verified listings</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Best Prices</h3>
                    <p className="text-sm text-gray-600">Great deals daily</p>
                  </div>
                </div>
              </div>
              
              <CategoryGrid onCategoryClick={handleCategoryClick} />
            </div>
          )}

          {/* Active Filters Display */}
          {(filters.query || filters.category || filters.location || filters.condition) && (
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filters.query ? `Search Results for "${filters.query}"` : 
                   filters.category ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Listings` :
                   'All Listings'}
                </h2>
                <span className="text-gray-600">
                  {filteredAds.length} {filteredAds.length === 1 ? 'result' : 'results'} found
                </span>
              </div>
              
              {/* Active filter tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {filters.category && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
                  </span>
                )}
                {filters.subcategory && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {filters.subcategory}
                  </span>
                )}
                {filters.location && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {filters.location}, {filters.district}
                  </span>
                )}
                {filters.condition && (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {filters.condition.charAt(0).toUpperCase() + filters.condition.slice(1).replace('-', ' ')}
                  </span>
                )}
                {(filters.minPrice > 0 || filters.maxPrice > 0) && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    LKR {filters.minPrice > 0 ? filters.minPrice.toLocaleString() : '0'} - {filters.maxPrice > 0 ? filters.maxPrice.toLocaleString() : '∞'}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Promoted Ads Section */}
          {promotedAds.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Ads</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {promotedAds.map((ad) => (
                  <AdCard
                    key={ad.id}
                    ad={ad}
                    onAdClick={handleAdClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Regular Ads Section */}
          {regularAds.length > 0 && (
            <div>
              {promotedAds.length > 0 && (
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Listings</h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularAds.map((ad) => (
                  <AdCard
                    key={ad.id}
                    ad={ad}
                    onAdClick={handleAdClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredAds.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4">
                <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6M4 8h16M4 16h16" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No listings found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search filters or browse different categories.</p>
              <button
                onClick={() => setFilters({
                  query: '',
                  category: '',
                  subcategory: '',
                  minPrice: 0,
                  maxPrice: 0,
                  condition: '',
                  location: '',
                  district: '',
                })}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>

        {/* Modals */}
        <PostAdModal
          isOpen={showPostAdModal}
          onClose={() => setShowPostAdModal(false)}
          onSubmit={handlePostAd}
        />

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ClassiMarket</h3>
                <p className="text-gray-400">
                  Sri Lanka's leading classifieds platform for buying and selling everything you need.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Popular Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Vehicles</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Property</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Report Ad</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 ClassiMarket. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;