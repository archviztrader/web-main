import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Star, 
  Download, 
  Search, 
  Filter,
  Grid,
  List,
  Eye,
  Heart,
  Share2,
  Crown,
  Tag,
  DollarSign,
  TrendingUp,
  Box,
  Palette,
  Code,
  BarChart3
} from 'lucide-react';

const MarketplacePage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Items', icon: <Grid className="w-5 h-5" />, count: 1250 },
    { id: '3d-assets', name: '3D Assets', icon: <Box className="w-5 h-5" />, count: 450 },
    { id: 'textures', name: 'Textures', icon: <Palette className="w-5 h-5" />, count: 320 },
    { id: 'software', name: 'Software', icon: <Code className="w-5 h-5" />, count: 85 },
    { id: 'trading-tools', name: 'Trading Tools', icon: <BarChart3 className="w-5 h-5" />, count: 120 },
    { id: 'courses', name: 'Courses', icon: <TrendingUp className="w-5 h-5" />, count: 275 },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free' },
    { id: 'under-25', name: 'Under $25' },
    { id: '25-50', name: '$25 - $50' },
    { id: '50-100', name: '$50 - $100' },
    { id: 'over-100', name: 'Over $100' },
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
  ];

  const featuredItems = [
    {
      id: 1,
      title: "Ultimate Modern Furniture Pack",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.9,
      downloads: 2250,
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "3D Assets",
      author: "DesignStudio Pro",
      featured: true,
      bestseller: true
    },
    {
      id: 2,
      title: "Professional Trading Bot Suite",
      price: "Free",
      originalPrice: "$149.99",
      rating: 4.8,
      downloads: 5200,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading Tools",
      author: "TradeTech",
      featured: true,
      hot: true
    },
    {
      id: 3,
      title: "Photorealistic Material Library",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.7,
      downloads: 1800,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Textures",
      author: "MaterialMaster",
      featured: true,
      new: true
    }
  ];

  const items = [
    {
      id: 4,
      title: "Kitchen Appliances Collection",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.6,
      downloads: 890,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "3D Assets",
      author: "ModernDesign",
      bestseller: true
    },
    {
      id: 5,
      title: "Forex Analysis Dashboard",
      price: "$19.99",
      originalPrice: "$29.99",
      rating: 4.5,
      downloads: 650,
      image: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading Tools",
      author: "ForexPro"
    },
    {
      id: 6,
      title: "Architectural Details Pack",
      price: "$39.99",
      originalPrice: "$59.99",
      rating: 4.8,
      downloads: 1200,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "3D Assets",
      author: "ArchElements"
    },
    {
      id: 7,
      title: "Fabric Texture Bundle",
      price: "$24.99",
      originalPrice: "$34.99",
      rating: 4.4,
      downloads: 720,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Textures",
      author: "TextureWorld"
    },
    {
      id: 8,
      title: "Crypto Trading Indicators",
      price: "$34.99",
      originalPrice: "$49.99",
      rating: 4.7,
      downloads: 480,
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading Tools",
      author: "CryptoTech"
    },
    {
      id: 9,
      title: "Lighting Setup Collection",
      price: "$15.99",
      originalPrice: "$25.99",
      rating: 4.3,
      downloads: 350,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "3D Assets",
      author: "LightMaster"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 downloads per month",
        "Basic support",
        "Standard quality",
        "Community access"
      ],
      color: "gray",
      current: false
    },
    {
      name: "Bronze",
      price: "$19",
      period: "month",
      features: [
        "25 downloads per month",
        "Priority support",
        "HD quality",
        "Early access to new items",
        "No ads"
      ],
      color: "orange",
      current: false
    },
    {
      name: "Silver",
      price: "$39",
      period: "month",
      features: [
        "100 downloads per month",
        "Premium support",
        "4K quality",
        "Exclusive content",
        "Commercial license",
        "Advanced tools"
      ],
      color: "gray",
      current: true
    },
    {
      name: "Gold",
      price: "$79",
      period: "month",
      features: [
        "Unlimited downloads",
        "VIP support",
        "Ultra HD quality",
        "Custom requests",
        "Extended license",
        "Premium tools",
        "Private community"
      ],
      color: "yellow",
      current: false
    }
  ];

  const getBadgeColor = (type: string) => {
    const colors = {
      bestseller: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      new: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      hot: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      featured: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[type as keyof typeof colors] || '';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marketplace
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Discover premium 3D assets, trading tools, textures, and software for professionals
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Unlock unlimited downloads and premium features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-8 ${plan.current ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.current && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Current Plan
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900' :
                    plan.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900' :
                    plan.color === 'gray' ? 'bg-gray-100 dark:bg-gray-700' :
                    'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    <Crown className={`w-8 h-8 ${
                      plan.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      plan.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      plan.color === 'gray' ? 'text-gray-600 dark:text-gray-400' :
                      'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      /{plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.current 
                      ? 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {plan.current ? 'Current Plan' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Items
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hand-picked premium content from top creators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-slate-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.featured && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('featured')}`}>
                        Featured
                      </span>
                    )}
                    {item.bestseller && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('bestseller')}`}>
                        Bestseller
                      </span>
                    )}
                    {item.new && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('new')}`}>
                        New
                      </span>
                    )}
                    {item.hot && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('hot')}`}>
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    by {item.author}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-purple-600">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{item.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search marketplace..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {items.map((item) => (
              <div
                key={item.id}
                className={`bg-slate-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-cover ${viewMode === 'list' ? 'w-full h-32' : 'w-full h-48'}`}
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('bestseller')}`}>
                        Bestseller
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    by {item.author}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-purple-600">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{item.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of creators using our premium marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Creating
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Sell Your Content
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;