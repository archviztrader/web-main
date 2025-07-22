import React, { useState } from 'react';
import PageEditor, { SectionConfig } from '../components/PageEditor';
import { useAuth } from '../contexts/AuthContext';
import { 
  Settings, 
  Users, 
  BookOpen, 
  Download, 
  BarChart3, 
  DollarSign,
  TrendingUp,
  Edit,
  Trash2,
  Plus,
  Upload,
  AlertTriangle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {

  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Page content management state
  const defaultPageSections: Record<string, { id: string; label: string; visible: boolean; content: string }[]> = {
    Homepage: [
      { id: 'hero', label: 'Hero Section', visible: true, content: 'Welcome to the homepage!' },
      { id: 'features', label: 'Features', visible: true, content: 'Feature highlights here.' },
      { id: 'stats', label: 'Stats', visible: true, content: 'Some impressive stats.' },
      { id: 'testimonials', label: 'Testimonials', visible: true, content: 'What our users say.' },
      { id: 'cta', label: 'CTA', visible: true, content: 'Call to action.' },
    ],
    ArchViz: [
      { id: 'hero', label: 'Hero', visible: true, content: 'ArchViz hero content.' },
      { id: 'featured', label: 'Featured Courses', visible: true, content: 'Featured ArchViz courses.' },
      { id: 'marketplace', label: 'Marketplace', visible: true, content: 'ArchViz marketplace.' },
      { id: 'software', label: 'Software', visible: true, content: 'ArchViz software.' },
    ],
    Trading: [
      { id: 'hero', label: 'Hero', visible: true, content: 'Trading hero content.' },
      { id: 'courses', label: 'Courses', visible: true, content: 'Trading courses.' },
      { id: 'software', label: 'Software', visible: true, content: 'Trading software.' },
      { id: 'indicators', label: 'Indicators', visible: true, content: 'Trading indicators.' },
    ],
    Marketplace: [
      { id: 'plans', label: 'Plans', visible: true, content: 'Marketplace plans.' },
      { id: 'categories', label: 'Categories', visible: true, content: 'Marketplace categories.' },
      { id: 'featured', label: 'Featured Items', visible: true, content: 'Featured marketplace items.' },
    ],
    Courses: [
      { id: 'featured', label: 'Featured Course', visible: true, content: 'Featured course.' },
      { id: 'grid', label: 'Course Grid', visible: true, content: 'Course grid.' },
      { id: 'benefits', label: 'Benefits', visible: true, content: 'Course benefits.' },
    ],
    Blog: [
      { id: 'featured', label: 'Featured Post', visible: true, content: 'Featured blog post.' },
      { id: 'categories', label: 'Categories', visible: true, content: 'Blog categories.' },
      { id: 'newsletter', label: 'Newsletter', visible: true, content: 'Newsletter signup.' },
    ],
  };


  const [pageSections, setPageSections] = useState(defaultPageSections);
  const [editorModal, setEditorModal] = useState<{ open: boolean; page: string; sections: SectionConfig[] }>({ open: false, page: '', sections: [] });
  const [editMode, setEditMode] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [socialLinks, setSocialLinks] = useState<{ [key: string]: string }>({ facebook: '', twitter: '', instagram: '', linkedin: '' });
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  // Load all content from backend on mount
  React.useEffect(() => {
    fetch('http://localhost:4000/api/content')
      .then(res => res.json())
      .then(data => {
        setPageSections(data.pageSections || defaultPageSections);
        setContactNumber(data.contactNumber || '');
        setSocialLinks(data.socialLinks || { facebook: '', twitter: '', instagram: '', linkedin: '' });
        setPrivacyPolicy(data.privacyPolicy || '');
      });
  }, []);

  // Open editor for a page
  const handleOpenEditor = (page: string) => {
    const sections = pageSections[page].map(s => ({
      id: s.id,
      label: s.label,
      visible: s.visible,
      content: s.content,
    }));
    setEditorModal({ open: true, page, sections });
    setEditMode(false);
  };

  // Close editor modal
  const handleCloseEditor = () => {
    setEditorModal({ open: false, page: '', sections: [] });
    setEditMode(false);
  };

  // Toggle section visibility
  const handleSectionToggle = (id: string, visible: boolean) => {
    setEditorModal((prev) => ({
      ...prev,
      sections: prev.sections.map(s => s.id === id ? { ...s, visible } : s),
    }));
  };

  // Edit section content
  const handleSectionEdit = (id: string, newContent: React.ReactNode) => {
    setEditorModal((prev) => ({
      ...prev,
      sections: prev.sections.map(s => s.id === id ? { ...s, content: newContent } : s),
    }));
  };


  // Save changes to page sections and sync with backend
  const handleSaveEditor = () => {
    const updated = {
      ...pageSections,
      [editorModal.page]: editorModal.sections.map(s => ({
        id: s.id,
        label: s.label,
        visible: s.visible,
        content: typeof s.content === 'string' ? s.content : (s.content ? String(s.content) : ''),
      })),
    };
    setPageSections(updated);
    fetch('http://localhost:4000/api/pageSections', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    handleCloseEditor();
  };

  // Save contact/social/privacy to backend
  const handleSaveContact = () => {
    fetch('http://localhost:4000/api/contactNumber', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contactNumber }),
    });
  };
  const handleSaveSocial = () => {
    fetch('http://localhost:4000/api/socialLinks', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(socialLinks),
    });
  };
  const handleSavePrivacy = () => {
    fetch('http://localhost:4000/api/privacyPolicy', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ privacyPolicy }),
    });
  };

  if (!user || !user.isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'content', label: 'Content', icon: <Upload className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const stats = [
    { title: 'Total Users', value: '12,543', change: '+12%', icon: <Users className="w-6 h-6" /> },
    { title: 'Revenue', value: '$89,240', change: '+18%', icon: <DollarSign className="w-6 h-6" /> },
    { title: 'Active Courses', value: '47', change: '+3', icon: <BookOpen className="w-6 h-6" /> },
    { title: 'Downloads', value: '1,250', change: '+25%', icon: <Download className="w-6 h-6" /> },
  ];

  const recentUsers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', plan: 'Gold', joined: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', plan: 'Silver', joined: '2024-01-14' },
    { id: 3, name: 'Mike Chen', email: 'mike@example.com', plan: 'Bronze', joined: '2024-01-13' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', plan: 'Free', joined: '2024-01-12' },
  ];

  const courses = [
    { id: 1, title: 'Complete Day Trading', students: 1250, revenue: '$24,990', status: 'Active' },
    { id: 2, title: 'ArchViz Mastery', students: 890, revenue: '$17,800', status: 'Active' },
    { id: 3, title: 'Interior Design', students: 650, revenue: '$13,000', status: 'Draft' },
    { id: 4, title: 'Forex Trading', students: 1100, revenue: '$22,000', status: 'Active' },
  ];

  const contentItems = [
    { id: 1, title: 'Modern Living Room Set', type: '3D Asset', downloads: 450, revenue: '$2,250' },
    { id: 2, title: 'Trading Bot Pro', type: 'Software', downloads: 230, revenue: '$0' },
    { id: 3, title: 'Texture Pack Vol.1', type: 'Texture', downloads: 320, revenue: '$1,600' },
    { id: 4, title: 'Market Analysis Tool', type: 'Software', downloads: 180, revenue: '$0' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Manage your platform and monitor performance
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Quick Actions
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                Export Data
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
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <div className="text-blue-600 dark:text-blue-400">
                          {stat.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-emerald-600">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Recent Users
                  </h3>
                  <div className="space-y-3">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {user.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {user.email}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {user.plan}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user.joined}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
                      <Plus className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Add Course
                      </span>
                    </button>
                    <button className="p-4 bg-emerald-50 dark:bg-emerald-900 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">
                      <Upload className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Upload Asset
                      </span>
                    </button>
                    <button className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
                      <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        Site Settings
                      </span>
                    </button>
                    <button className="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors">
                      <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        Analytics
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  User Management
                </h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add User
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Name</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Email</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Plan</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Joined</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="p-4 text-gray-900 dark:text-white">{user.name}</td>
                        <td className="p-4 text-gray-900 dark:text-white">{user.email}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {user.plan}
                          </span>
                        </td>
                        <td className="p-4 text-gray-900 dark:text-white">{user.joined}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Course Management
                </h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add Course
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Title</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Students</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Revenue</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Status</th>
                      <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="p-4 text-gray-900 dark:text-white">{course.title}</td>
                        <td className="p-4 text-gray-900 dark:text-white">{course.students}</td>
                        <td className="p-4 text-gray-900 dark:text-white">{course.revenue}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.status === 'Active' 
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              {/* Upload Content Form */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Upload New Content
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Content Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter content title"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Content Type
                      </label>
                      <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
                        <option value="3d-asset">3D Asset</option>
                        <option value="texture">Texture</option>
                        <option value="software">Software</option>
                        <option value="course">Course</option>
                        <option value="trading-tool">Trading Tool</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter content description"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
                        <option value="archviz">ArchViz</option>
                        <option value="trading">Trading</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tags
                      </label>
                      <input
                        type="text"
                        placeholder="tag1, tag2, tag3"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      File Upload
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Drag and drop files here, or click to browse
                      </p>
                      <input type="file" multiple className="hidden" id="file-upload" />
                      <label
                        htmlFor="file-upload"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                      >
                        Choose Files
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preview Image URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Upload Content
                  </button>
                </form>
              </div>

              {/* Video Course Management */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Video Course Management
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Course Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter course title"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Instructor
                      </label>
                      <input
                        type="text"
                        placeholder="Instructor name"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Video Links (YouTube/Cloud Storage)
                    </label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Lesson 1: https://youtube.com/watch?v=..."
                          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Add
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Add video links from YouTube, Vimeo, or cloud storage. Ads will be automatically placed in video placeholders.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Course Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="99.99"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        placeholder="12 hours"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Level
                      </label>
                      <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ad Placement Settings
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable pre-roll ads (before video starts)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Enable mid-roll ads (for videos longer than 10 minutes)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable post-roll ads (after video ends)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Management Table */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Existing Content
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Title</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Type</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Downloads</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Revenue</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="p-4 text-gray-900 dark:text-white">{item.title}</td>
                          <td className="p-4 text-gray-900 dark:text-white">{item.type}</td>
                          <td className="p-4 text-gray-900 dark:text-white">{item.downloads}</td>
                          <td className="p-4 text-gray-900 dark:text-white">{item.revenue}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Page Views
                  </h4>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    45,231
                  </div>
                  <p className="text-sm text-emerald-600">+12% from last month</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Conversion Rate
                  </h4>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    3.2%
                  </div>
                  <p className="text-sm text-emerald-600">+0.5% from last month</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Avg. Session
                  </h4>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    5:42
                  </div>
                  <p className="text-sm text-emerald-600">+18s from last month</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Bounce Rate
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    28%
                  </div>
                  <p className="text-sm text-red-600">-2% from last month</p>
                </div>
              </div>
            </div>
          )}


          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Website Page Editor */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Website Page Editor
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.keys(pageSections).map((page) => (
                    <div key={page} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 cursor-pointer hover:underline" onClick={() => handleOpenEditor(page)}>
                        {page}
                      </h4>
                      <button
                        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                        onClick={() => handleOpenEditor(page)}
                      >
                        Edit Page
                      </button>
                    </div>
                  ))}
                </div>
                {/* Page Editor Modal */}
                {editorModal.open && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl relative">
                      <button
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        onClick={handleCloseEditor}
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Edit {editorModal.page} Page</h2>
                      <PageEditor
                        sections={editorModal.sections}
                        onSectionToggle={handleSectionToggle}
                        onSectionEdit={handleSectionEdit}
                        editMode={editMode}
                        setEditMode={setEditMode}
                      />
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                          onClick={handleCloseEditor}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
                          onClick={handleSaveEditor}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>


              {/* Contact Number Management */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Number</h3>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={e => setContactNumber(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={handleSaveContact}>Save</button>
                </div>
              </div>

              {/* Social Media Links Management */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Social Media Links</h3>
                <div className="space-y-2">
                  {Object.keys(socialLinks).map((platform) => (
                    <div key={platform} className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder={platform.charAt(0).toUpperCase() + platform.slice(1) + ' URL'}
                        value={socialLinks[platform]}
                        onChange={e => setSocialLinks((prev: any) => ({ ...prev, [platform]: e.target.value }))}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 mt-2" onClick={handleSaveSocial}>Save</button>
                </div>
              </div>

              {/* Privacy Policy Management */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Privacy Policy</h3>
                <textarea
                  rows={6}
                  value={privacyPolicy}
                  onChange={e => setPrivacyPolicy(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={handleSavePrivacy}>Save</button>
              </div>

              {/* Ad Management */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Advertisement Management
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Header Ad Code
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Google AdSense or custom ad code"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Sidebar Ad Code
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Sidebar advertisement code"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Video Ad Settings
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable pre-roll ads on videos</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Enable mid-roll ads (for videos 10min)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable post-roll ads</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  General Site Settings
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Site Name
                      </label>
                      <input
                        type="text"
                        defaultValue="ArchVizTrader"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        defaultValue="admin@archviztrader.com"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Site Description
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="Your premier destination for Architecture Visualization and Trading education"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Features
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable course enrollment</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable marketplace</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" defaultChecked />
                        <span className="text-gray-700 dark:text-gray-300">Enable user registrations</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Enable maintenance mode</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Save Changes
                    </button>
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      Reset
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

export default AdminDashboard;