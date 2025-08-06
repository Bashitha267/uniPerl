import React, { useState } from 'react';
import { MapPin, Calendar, Eye, Heart, Share2, Phone, Mail } from 'lucide-react';
import { Ad } from '../types';

interface AdCardProps {
  ad: Ad;
  onAdClick: (ad: Ad) => void;
}

const AdCard: React.FC<AdCardProps> = ({ ad, onAdClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `LKR ${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `LKR ${(price / 1000).toFixed(0)}K`;
    }
    return `LKR ${price.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const handleImageNavigation = (e: React.MouseEvent, direction: 'prev' | 'next') => {
    e.stopPropagation();
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? ad.images.length - 1 : currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex === ad.images.length - 1 ? 0 : currentImageIndex + 1);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: ad.title,
        text: `Check out this ${ad.category.toLowerCase()} listing: ${ad.title}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div
      onClick={() => onAdClick(ad)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="relative h-48 bg-gray-200">
          {ad.images.length > 0 ? (
            <>
              <img
                src={ad.images[currentImageIndex]}
                alt={ad.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/3992633/pexels-photo-3992633.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;
                }}
              />
              {ad.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => handleImageNavigation(e, 'prev')}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => handleImageNavigation(e, 'next')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {ad.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {ad.isPromoted && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              PROMOTED
            </span>
          )}
          <span className={`text-white text-xs px-2 py-1 rounded-full font-medium ${
            ad.condition === 'new' ? 'bg-green-500' :
            ad.condition === 'like-new' ? 'bg-blue-500' : 'bg-gray-500'
          }`}>
            {ad.condition.toUpperCase().replace('-', ' ')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex space-x-1">
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isFavorited 
                ? 'bg-red-500 text-white' 
                : 'bg-black bg-opacity-25 text-white hover:bg-opacity-40'
            }`}
          >
            <Heart className="h-4 w-4" fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-black bg-opacity-25 text-white hover:bg-opacity-40 transition-colors backdrop-blur-sm"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {ad.title}
          </h3>
          <span className="text-lg font-bold text-blue-600 ml-2 whitespace-nowrap">
            {formatPrice(ad.price)}
          </span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {ad.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{ad.location}, {ad.district}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(ad.datePosted)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{ad.views}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm text-gray-600 font-medium">{ad.userName}</span>
          <div className="flex space-x-2">
            {ad.contactPhone && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`tel:${ad.contactPhone}`);
                }}
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                title="Call"
              >
                <Phone className="h-4 w-4" />
              </button>
            )}
            {ad.contactEmail && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`mailto:${ad.contactEmail}`);
                }}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;