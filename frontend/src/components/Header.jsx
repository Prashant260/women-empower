import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scale, Shield } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-rose-600" />
            <span className="text-xl font-bold text-gray-900">
              Women's Legal <span className="text-rose-600">Awareness</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/constitutional-rights" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
            >
              Constitutional Rights
            </Link>
            <Link 
              to="/criminal-laws" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
            >
              Criminal Laws
            </Link>
            <Link 
              to="/search" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
            >
              Search Laws
            </Link>
            <Button variant="default" className="bg-rose-600 hover:bg-rose-700">
              <Shield className="h-4 w-4 mr-2" />
              Know Your Rights
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/constitutional-rights"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Constitutional Rights
            </Link>
            <Link
              to="/criminal-laws"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Criminal Laws
            </Link>
            <Link
              to="/search"
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Search Laws
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};