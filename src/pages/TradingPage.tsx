import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Download, 
  Play, 
  Star, 
  BarChart3,
  DollarSign,
  Target,
  Shield,
  Zap,
  Users,
  BookOpen,
  ArrowRight,
  TrendingDown,
  Activity
} from 'lucide-react';

const TradingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      id: 1,
      title: "Complete Day Trading Mastery",
      instructor: "Mark Johnson",
      duration: "20 hours",
      students: 5200,
      rating: 4.9,
      price: "$199.99",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Forex Trading Strategies",
      instructor: "Sarah Williams",
      duration: "15 hours",
      students: 3800,
      rating: 4.8,
      price: "$149.99",
      image: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Crypto Trading Fundamentals",
      instructor: "Alex Chen",
      duration: "12 hours",
      students: 2900,
      rating: 4.7,
      price: "$99.99",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400",
      level: "Beginner"
    }
  ];

  const software = [
    {
      name: "TradeBot Pro",
      description: "Advanced algorithmic trading bot with machine learning capabilities",
      price: "Free",
      downloads: "50K+",
      features: ["Auto-trading", "Risk Management", "Backtesting", "Multi-exchange"]
    },
    {
      name: "Market Scanner Elite",
      description: "Real-time market scanning and alert system",
      price: "$79.99",
      downloads: "30K+",
      features: ["Real-time scanning", "Custom alerts", "Pattern recognition", "Portfolio tracking"]
    },
    {
      name: "Risk Calculator Suite",
      description: "Professional risk management and position sizing tools",
      price: "Free",
      downloads: "25K+",
      features: ["Position sizing", "Risk/reward", "Portfolio analysis", "Money management"]
    }
  ];

  const indicators = [
    {
      name: "Smart Trend Indicator",
      description: "AI-powered trend identification with 95% accuracy",
      price: "$49.99",
      rating: 4.9,
      downloads: "15K+"
    },
    {
      name: "Volume Profile Pro",
      description: "Advanced volume analysis for precise entry/exit points",
      price: "$39.99",
      rating: 4.8,
      downloads: "12K+"
    },
    {
      name: "Support & Resistance Zones",
      description: "Automated S&R level identification and alerts",
      price: "$29.99",
      rating: 4.7,
      downloads: "18K+"
    }
  ];

  const stats = [
    { value: "95%", label: "Success Rate" },
    { value: "$2.5M+", label: "Student Profits" },
    { value: "10K+", label: "Active Traders" },
    { value: "50+", label: "Trading Tools" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Master Trading & Investing
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
              Professional trading education, premium software, and cutting-edge tools for financial success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Learning
              </Link>
              <Link
                to="/tools"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
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

      {/* Navigation Tabs */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'software', label: 'Software', icon: <Download className="w-5 h-5" /> },
              { id: 'indicators', label: 'Indicators', icon: <BarChart3 className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trading Courses
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from professional traders with proven track records
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </div>
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-emerald-600">
                        {course.price}
                      </span>
                    </div>
                    <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Software Tab */}
      {activeTab === 'software' && (
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trading Software
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Professional tools to enhance your trading performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {software.map((item, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-emerald-600">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.downloads} downloads
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Indicators Tab */}
      {activeTab === 'indicators' && (
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trading Indicators & Algos
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced technical indicators and algorithmic trading solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {indicators.map((indicator, index) => (
                <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {indicator.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {indicator.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{indicator.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {indicator.downloads} downloads
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">
                      {indicator.price}
                    </span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                      Get Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Trading Platform?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Professional-grade tools and education for serious traders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Risk Management",
                description: "Advanced risk control tools and position sizing calculators"
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Real-Time Analysis",
                description: "Live market data and instant trade execution capabilities"
              },
              {
                icon: <Target className="w-8 h-8 text-purple-600" />,
                title: "Precision Trading",
                description: "Accurate entry and exit signals with high success rates"
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Community Support",
                description: "Access to exclusive trader communities and mentorship"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of successful traders using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Learning Now
            </Link>
            <Link
              to="/tools"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Try Free Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingPage;