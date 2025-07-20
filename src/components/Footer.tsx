import React from 'react';
import { Link } from 'react-router-dom';
import { Box, TrendingUp, Youtube, MessageCircle, Github, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">ArchViz Trader</h5>
            <p className="text-slate-400 text-sm mb-2">Email: info@archviztrader.com</p>
            <p className="text-slate-400 text-sm">Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="text-slate-400 text-sm">
              <li className="mb-2"><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li className="mb-2"><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li className="mb-2"><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <p className="text-slate-400 text-sm mb-4">
              Master 3D rendering and financial markets with our comprehensive courses.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@archviz-trader" className="text-slate-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://t.me/+ZKdXe3KauzFkYWU1" className="text-slate-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/cJxGGQaWkr" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
            {/* Newsletter form can be added here */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; 2023 ArchViz Trader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;