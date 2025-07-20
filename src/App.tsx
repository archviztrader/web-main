import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchVizPage from './pages/ArchVizPage';
import TradingPage from './pages/TradingPage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CoursePage from './pages/CoursePage';
import MarketplacePage from './pages/MarketplacePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-all duration-300">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archviz" element={<ArchVizPage />} />
                <Route path="/trading" element={<TradingPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/courses" element={<CoursePage />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;