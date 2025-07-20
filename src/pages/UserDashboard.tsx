import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Settings, 
  BookOpen, 
  Download, 
  BarChart3, 
  Trophy, 
  Crown,
  Calendar,
  TrendingUp,
  Eye,
  Upload,
  FileText,
  DollarSign,
  Target,
  Activity
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to access your dashboard
          </h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>
      </div>
    );
  }

  const getPlanColor = (plan: string) => {
    const colors = {
      free: 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300',
      bronze: 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300',
      silver: 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
      gold: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300'
    };
    return colors[plan as keyof typeof colors] || colors.free;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'courses', label: 'My Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'downloads', label: 'Downloads', icon: <Download className="w-5 h-5" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Eye className="w-5 h-5" /> },
    { id: 'trading', label: 'Trading Journal', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const courses = [
    {
      title: "Complete Day Trading Mastery",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      lastAccessed: "2024-01-15",
      instructor: "Mark Johnson"
    },
    {
      title: "Exterior Visualization Course",
      progress: 60,
      totalLessons: 16,
      completedLessons: 10,
      lastAccessed: "2024-01-14",
      instructor: "Sarah Wilson"
    },
    {
      title: "Interior Design Mastery",
      progress: 30,
      totalLessons: 20,
      completedLessons: 6,
      lastAccessed: "2024-01-12",
      instructor: "David Kim"
    }
  ];

  const downloads = [
    {
      name: "Modern Living Room Set",
      type: "3D Asset",
      size: "125 MB",
      downloadDate: "2024-01-15",
      category: "ArchViz"
    },
    {
      name: "TradeBot Pro",
      type: "Software",
      size: "45 MB",
      downloadDate: "2024-01-14",
      category: "Trading"
    },
    {
      name: "Fabric Texture Library",
      type: "Texture Pack",
      size: "890 MB",
      downloadDate: "2024-01-13",
      category: "ArchViz"
    }
  ];

  const portfolioItems = [
    {
      title: "Modern Villa Exterior",
      views: 1250,
      likes: 89,
      uploadDate: "2024-01-10",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Minimalist Kitchen",
      views: 890,
      likes: 67,
      uploadDate: "2024-01-08",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Office Interior",
      views: 650,
      likes: 45,
      uploadDate: "2024-01-05",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const tradingData = [
    {
      date: "2024-01-15",
      symbol: "EURUSD",
      type: "Buy",
      entry: 1.0950,
      exit: 1.0980,
      quantity: 10000,
      pnl: 300,
      status: "Closed"
    },
    {
      date: "2024-01-14",
      symbol: "GBPUSD",
      type: "Sell",
      entry: 1.2650,
      exit: 1.2620,
      quantity: 5000,
      pnl: 150,
      status: "Closed"
    },
    {
      date: "2024-01-13",
      symbol: "USDJPY",
      type: "Buy",
      entry: 148.50,
      exit: 0,
      quantity: 8000,
      pnl: 0,
      status: "Open"
    }
  ];

  const totalPnL = tradingData.reduce((sum, trade) => sum + trade.pnl, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${getPlanColor(user.plan)}`}>
                <Crown className="w-4 h-4 inline mr-2" />
                {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-8">
          <div className="flex flex-wrap gap-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Course Progress
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Active Courses</span>
                    <span className="font-medium">{courses.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Completed Lessons</span>
                    <span className="font-medium">{courses.reduce((sum, course) => sum + course.completedLessons, 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Average Progress</span>
                    <span className="font-medium">{Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Download className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Downloads
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Total Downloads</span>
                    <span className="font-medium">{downloads.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">ArchViz Assets</span>
                    <span className="font-medium">{downloads.filter(d => d.category === 'ArchViz').length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Trading Tools</span>
                    <span className="font-medium">{downloads.filter(d => d.category === 'Trading').length}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Trading P&L
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Total P&L</span>
                    <span className={`font-medium ${totalPnL >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      ${totalPnL.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Total Trades</span>
                    <span className="font-medium">{tradingData.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Win Rate</span>
                    <span className="font-medium">
                      {Math.round((tradingData.filter(t => t.pnl > 0).length / tradingData.filter(t => t.status === 'Closed').length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  My Courses
                </h3>
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {course.progress}% Complete
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>by {course.instructor}</span>
                        <span>{course.completedLessons} / {course.totalLessons} lessons</span>
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Download History
              </h3>
              <div className="space-y-4">
                {downloads.map((download, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {download.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {download.type} • {download.size}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {download.downloadDate}
                      </div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {download.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    My Portfolio
                  </h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Upload Work</span>
                  </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{item.views}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Trophy className="w-4 h-4" />
                              <span>{item.likes}</span>
                            </span>
                          </div>
                          <span>{item.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Trading Journal Tab */}
          {activeTab === 'trading' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Trading Journal
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Date</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Symbol</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Type</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Entry</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Exit</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Quantity</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">P&L</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradingData.map((trade, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="p-3 text-gray-900 dark:text-white">{trade.date}</td>
                        <td className="p-3 text-gray-900 dark:text-white">{trade.symbol}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            trade.type === 'Buy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' : 
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {trade.type}
                          </span>
                        </td>
                        <td className="p-3 text-gray-900 dark:text-white">{trade.entry}</td>
                        <td className="p-3 text-gray-900 dark:text-white">{trade.exit || '-'}</td>
                        <td className="p-3 text-gray-900 dark:text-white">{trade.quantity.toLocaleString()}</td>
                        <td className={`p-3 font-medium ${trade.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          ${trade.pnl.toFixed(2)}
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            trade.status === 'Closed' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' : 
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {trade.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Account Settings
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Notification Preferences
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Email notifications for new courses</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Trading alerts and market updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Portfolio performance reports</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Save Changes
                    </button>
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      <a href="https://www.metatrader4.com/" target="_blank" rel="noopener noreferrer">
                        Connect MetaTrader
                      </a>
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors ml-2">
                      <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
                        Connect TradingView
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;