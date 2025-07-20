import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  Search,
  Filter,
  CheckCircle,
  Award,
  Target,
  Zap,
  Download,
  Eye
} from 'lucide-react';

const CoursePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'archviz', name: 'ArchViz' },
    { id: 'trading', name: 'Trading' },
    { id: 'software', name: 'Software' },
    { id: 'beginner', name: 'Beginner' },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const featuredCourse = {
    id: 1,
    title: "Complete Architecture Visualization Mastery",
    description: "Learn professional 3D rendering techniques from concept to photorealistic visualization",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 2500,
    duration: "15 hours",
    lessons: 45,
    price: "$199.99",
    originalPrice: "$299.99",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ArchViz",
    level: "Intermediate",
    features: [
      "Professional 3D modeling techniques",
      "Advanced lighting and materials",
      "Post-processing workflows",
      "Portfolio development",
      "Lifetime access"
    ]
  };

  const courses = [
    {
      id: 2,
      title: "Day Trading Fundamentals",
      instructor: "Mark Johnson",
      rating: 4.8,
      students: 1850,
      duration: "12 hours",
      lessons: 32,
      price: "$149.99",
      originalPrice: "$199.99",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading",
      level: "Beginner",
      bestseller: true
    },
    {
      id: 3,
      title: "Interior Design Visualization",
      instructor: "Emma Davis",
      rating: 4.7,
      students: 1200,
      duration: "10 hours",
      lessons: 28,
      price: "$129.99",
      originalPrice: "$179.99",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "ArchViz",
      level: "Intermediate",
      new: true
    },
    {
      id: 4,
      title: "Forex Trading Strategies",
      instructor: "David Kim",
      rating: 4.9,
      students: 980,
      duration: "8 hours",
      lessons: 24,
      price: "$99.99",
      originalPrice: "$149.99",
      image: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading",
      level: "Advanced",
      hot: true
    },
    {
      id: 5,
      title: "Blender for Architects",
      instructor: "Alex Rodriguez",
      rating: 4.6,
      students: 1600,
      duration: "14 hours",
      lessons: 38,
      price: "$169.99",
      originalPrice: "$229.99",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Software",
      level: "Beginner"
    },
    {
      id: 6,
      title: "Cryptocurrency Trading",
      instructor: "Lisa Wang",
      rating: 4.5,
      students: 750,
      duration: "6 hours",
      lessons: 18,
      price: "$79.99",
      originalPrice: "$119.99",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Trading",
      level: "Intermediate"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getBadgeColor = (type: string) => {
    const colors = {
      bestseller: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      new: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      hot: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return colors[type as keyof typeof colors] || '';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Learn from industry experts and master ArchViz and Trading with our comprehensive courses
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={featuredCourse.image}
                  alt={featuredCourse.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Course
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredCourse.category}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredCourse.level}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredCourse.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredCourse.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{featuredCourse.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {featuredCourse.students} students
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {featuredCourse.duration}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What you'll learn:
                  </h4>
                  <ul className="space-y-2">
                    {featuredCourse.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">
                      {featuredCourse.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {featuredCourse.originalPrice}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              All Courses
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from our comprehensive collection of professional courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-slate-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {course.bestseller && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('bestseller')}`}>
                        Bestseller
                      </span>
                    )}
                    {course.new && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('new')}`}>
                        New
                      </span>
                    )}
                    {course.hot && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor('hot')}`}>
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {course.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Professional education designed for real-world success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with proven track records"
              },
              {
                icon: <Target className="w-8 h-8 text-emerald-600" />,
                title: "Practical Projects",
                description: "Build real-world skills through hands-on projects and assignments"
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Lifetime Access",
                description: "Access your courses anytime, anywhere with lifetime updates"
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Community Support",
                description: "Join our active community of learners and professionals"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have transformed their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;