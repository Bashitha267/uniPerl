import React, { useState } from 'react';
import { X, Upload, Plus, Trash2, Star } from 'lucide-react';
import { categories, sriLankanLocations } from '../data/categories';
import { Ad } from '../types';
import { useAuth } from '../hooks/useAuth';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (ad: Omit<Ad, 'id' | 'userId' | 'userName' | 'datePosted' | 'views'>) => void;
}

const PostAdModal: React.FC<PostAdModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subcategory: '',
    price: 0,
    condition: 'used' as const,
    description: '',
    images: [] as string[],
    location: '',
    district: '',
    contactPhone: user?.phone || '',
    contactEmail: user?.email || '',
    isPromoted: false,
  });
  const [imageUrls, setImageUrls] = useState<string[]>(['']);

  const selectedCategory = categories.find(cat => cat.id === formData.category);
  const selectedDistrict = sriLankanLocations.find(loc => loc.district === formData.district);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUrlChange = (index: number, url: string) => {
    const newUrls = [...imageUrls];
    newUrls[index] = url;
    setImageUrls(newUrls);
    setFormData(prev => ({ ...prev, images: newUrls.filter(url => url.trim() !== '') }));
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrl = (index: number) => {
    const newUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newUrls);
    setFormData(prev => ({ ...prev, images: newUrls.filter(url => url.trim() !== '') }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adData: Omit<Ad, 'id' | 'userId' | 'userName' | 'datePosted' | 'views'> = {
      ...formData,
      contactPhone: formData.contactPhone || user?.phone || '',
      contactEmail: formData.contactEmail || user?.email || '',
      status: 'active' as const,
    };
    onSubmit(adData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      title: '',
      category: '',
      subcategory: '',
      price: 0,
      condition: 'used',
      description: '',
      images: [],
      location: '',
      district: '',
      contactPhone: user?.phone || '',
      contactEmail: user?.email || '',
      isPromoted: false,
    });
    setImageUrls(['']);
  };

  const canProceedToStep2 = formData.title && formData.category && formData.price > 0;
  const canProceedToStep3 = canProceedToStep2 && formData.description && formData.district && formData.location;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Post Your Ad</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step === 1 && 'Basic Info'}
                  {step === 2 && 'Details'}
                  {step === 3 && 'Contact & Publish'}
                </span>
                {step < 3 && <div className="w-8 h-px bg-gray-200 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter a descriptive title for your ad"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      handleInputChange('category', e.target.value);
                      handleInputChange('subcategory', '');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCategory && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subcategory
                    </label>
                    <select
                      value={formData.subcategory}
                      onChange={(e) => handleInputChange('subcategory', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subcategory</option>
                      {selectedCategory.subcategories.map((subcategory) => (
                        <option key={subcategory} value={subcategory}>
                          {subcategory}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (LKR) *
                  </label>
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                    placeholder="Enter price in LKR"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    value={formData.condition}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="used">Used</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details & Images */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  placeholder="Describe your item in detail..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images (URLs)
                </label>
                <div className="space-y-2">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => handleImageUrlChange(index, e.target.value)}
                        placeholder={`Image URL ${index + 1} (e.g., https://example.com/image.jpg)`}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {imageUrls.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeImageUrl(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  {imageUrls.length < 5 && (
                    <button
                      type="button"
                      onClick={addImageUrl}
                      className="flex items-center space-x-2 px-3 py-2 text-blue-600 border border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Another Image</span>
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Add up to 5 images. Use direct image URLs (jpg, png, etc.)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => {
                      handleInputChange('district', e.target.value);
                      handleInputChange('location', '');
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select district</option>
                    {sriLankanLocations.map((location) => (
                      <option key={location.district} value={location.district}>
                        {location.district}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDistrict && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select city</option>
                      {selectedDistrict.cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Contact & Publish */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    placeholder="Enter contact phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    placeholder="Enter contact email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-yellow-800 mb-2">Promote Your Ad</h3>
                    <p className="text-sm text-yellow-700 mb-3">
                      Get more views and responses by promoting your ad for just LKR 500/week
                    </p>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.isPromoted}
                        onChange={(e) => handleInputChange('isPromoted', e.target.checked)}
                        className="rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="text-sm font-medium text-yellow-800">
                        Promote this ad for LKR 500/week
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Ad Preview</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Title:</strong> {formData.title}</p>
                  <p><strong>Category:</strong> {formData.category} {formData.subcategory && `> ${formData.subcategory}`}</p>
                  <p><strong>Price:</strong> LKR {formData.price.toLocaleString()}</p>
                  <p><strong>Location:</strong> {formData.location}, {formData.district}</p>
                  <p><strong>Condition:</strong> {formData.condition.replace('-', ' ').toUpperCase()}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex space-x-3">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Previous
                </button>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={
                    (currentStep === 1 && !canProceedToStep2) ||
                    (currentStep === 2 && !canProceedToStep3)
                  }
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Publish Ad
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAdModal;