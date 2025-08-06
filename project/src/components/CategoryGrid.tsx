import React from 'react';
import { categories } from '../data/categories';
import * as LucideIcons from 'lucide-react';

interface CategoryGridProps {
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategoryClick }) => {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="h-8 w-8" /> : <LucideIcons.Tag className="h-8 w-8" />;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          style={{ borderTop: `4px solid ${category.color}` }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div
              className="p-3 rounded-lg transition-colors duration-300"
              style={{ 
                backgroundColor: `${category.color}15`,
                color: category.color
              }}
            >
              {getIcon(category.icon)}
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.subcategories.length} subcategories
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;