import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Download, 
  Play, 
  Star, 
  Search, 
  Filter,
  Grid,
  List,
  Eye,
  ShoppingCart,
  BookOpen,
  Settings,
  Palette,
  Layers,
  Monitor
} from 'lucide-react';

const ArchVizPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <Grid className="w-5 h-5" /> },
    { id: 'assets', name: '3D Assets', icon: <Box className="w-5 h-5" /> },
    { id: 'courses', name: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'software', name: 'Software', icon: <Settings className="w-5 h-5" /> },
    { id: 'textures', name: 'Textures', icon: <Palette className="w-5 h-5" /> },
  ];

  const assets = [
    {
      id: 1,
      title: "Modern Living Room Set",
      price: "$49.99",
      rating: 4.9,
      downloads: 1250,
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "3D Asset",
      author: "ArchViz Studio"
    },
    {
      id: 2,
      title: "Exterior Visualization Course",
      price: "$99.99",
      rating: 4.8,
      downloads: 850,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "Course",
      author: "Pro Render"
    },
    {
      id: 3,
      title: "Kitchen Appliances Pack",
      price: "$29.99",
      rating: 4.7,
      downloads: 920,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "3D Asset",
      author: "Modern Design"
    },
    {
      id: 4,
      title: "V-Ray Rendering Mastery",
      price: "$149.99",
      rating: 4.9,
      downloads: 650,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "Course",
      author: "Render Pro"
    },
    {
      id: 5,
      title: "Fabric Texture Library",
      price: "$19.99",
      rating: 4.6,
      downloads: 1100,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "Texture",
      author: "Texture World"
    },
    {
      id: 6,
      title: "3ds Max Plugin Suite",
      price: "Free",
      rating: 4.8,
      downloads: 2200,
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "Software",
      author: "Dev Tools"
    }
  ];

  const featuredCourses = [
    {
      title: "Complete ArchViz Workflow",
      instructor: "John Smith",
      duration: "12 hours",
      students: 2500,
      rating: 4.9,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Interior Design Mastery",
      instructor: "Sarah Johnson",
      duration: "8 hours",
      students: 1800,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Lighting & Atmosphere",
      instructor: "Mike Chen",
      duration: "6 hours",
      students: 1200,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Box className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Architecture Visualization
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Premium 3D assets, professional courses, and cutting-edge tools for architectural visualization
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn from industry professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    by {course.instructor}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <Link
                      to="/courses"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-0">
              Marketplace
            </h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Assets Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {assets.map((asset) => (
              <div
                key={asset.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className={`object-cover ${viewMode === 'list' ? 'w-full h-32' : 'w-full h-48'}`}
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {asset.type}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {asset.title}
                    </h3>
                    <span className="text-lg font-bold text-blue-600">
                      {asset.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    by {asset.author}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{asset.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{asset.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Software & Plugins
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Professional tools for architectural visualization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ArchViz Renderer Pro",
                description: "Advanced rendering engine for photorealistic visualization",
                price: "Free",
                downloads: "25K+",
                compatibility: "3ds Max, Maya, Blender"
              },
              {
                name: "Material Library Suite",
                description: "Comprehensive material and texture management",
                price: "$49.99",
                downloads: "15K+",
                compatibility: "V-Ray, Corona"
              },
              {
                name: "Lighting Setup Tools",
                description: "Professional lighting presets and controls",
                price: "Free",
                downloads: "18K+",
                compatibility: "All major renderers"
              }
            ].map((software, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {software.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {software.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">
                    {software.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {software.downloads} downloads
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Compatible with: {software.compatibility}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Stunning Visualizations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals using our platform
          </p>
          <Link
            to="/courses"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArchVizPage;