import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  TrendingUp, 
  Users, 
  Star, 
  Download, 
  ArrowRight,
  Shield,
  Globe,
  Zap,
  BookOpen,
  DollarSign,
  Award
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8 text-blue-600" />,
      title: "3D Asset Marketplace",
      description: "Premium 3D models, textures, and materials for architectural visualization"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Trading Education",
      description: "Comprehensive courses and tools for mastering financial markets"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Video Courses",
      description: "Step-by-step tutorials with progress tracking and certificates"
    },
    {
      icon: <Download className="w-8 h-8 text-red-600" />,
      title: "Premium Software",
      description: "Free downloads of trading software and visualization tools"
    }
  ];

  const stats = [
    { value: "50K+", label: "Students Enrolled" },
    { value: "1000+", label: "3D Assets" },
    { value: "200+", label: "Courses Available" },
    { value: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "3D Artist",
      content: "The ArchViz courses transformed my career. Now I'm earning $80k+ annually!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mike Chen",
      role: "Day Trader",
      content: "The trading strategies here are gold. Made my first $10k profit in 3 months.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emma Davis",
      role: "Architect",
      content: "Perfect combination of creativity and finance. Building my dream portfolio!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 dark:from-blue-900/30 dark:to-emerald-900/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl animate-pulse">
                <Box className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-2xl animate-pulse delay-300">
                <TrendingUp className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Master
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> 3D Visualization</span>
              <br />
              & <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Trading</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your premier destination for Architecture Visualization and Trading education. 
              Build stunning 3D renders and profitable trading strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Learning Today
              </Link>
              <Link
                to="/marketplace"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools and resources for both architecture visualization and trading
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Value Proposition */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Architecture Visualization */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Box className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Architecture Visualization
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Learn professional 3D rendering techniques, access premium assets, and build stunning architectural visualizations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Premium 3D Models & Textures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Professional Rendering Courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Software & Plugin Downloads</span>
                </div>
              </div>
              <Link
                to="/archviz"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <span>Explore ArchViz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trading */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Trading Education
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Master financial markets with our comprehensive trading courses, tools, and premium software downloads.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Professional Trading Courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Free Premium Software</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Indicators & Algo Trading</span>
                </div>
              </div>
              <Link
                to="/trading"
                className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                <span>Start Trading</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of successful professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals. Start your journey today with our comprehensive courses and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Now
            </Link>
            <Link
              to="/marketplace"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;