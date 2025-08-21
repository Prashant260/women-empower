import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-bold">
                Women's Legal <span className="text-rose-500">Awareness</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering women through legal knowledge. Understanding your constitutional rights 
              and criminal law protections is the first step towards justice and equality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>National Women Helpline: 181</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Police Helpline: 100</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/constitutional-rights" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Constitutional Rights
                </Link>
              </li>
              <li>
                <Link to="/criminal-laws" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Criminal Laws
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-rose-500 transition-colors">
                  Search Laws
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-900/30 rounded-lg border border-red-800">
                <p className="text-red-300 font-medium">Emergency: 112</p>
                <p className="text-sm text-red-200">24/7 Emergency Response</p>
              </div>
              <div className="p-3 bg-rose-900/30 rounded-lg border border-rose-800">
                <p className="text-rose-300 font-medium">Women Helpline: 181</p>
                <p className="text-sm text-rose-200">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Women's Legal Awareness. Educational content for awareness purposes. 
            Consult legal professionals for specific legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};