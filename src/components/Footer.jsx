import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-extrabold text-purple-400 mb-4">MyShop</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your ultimate destination for quality products and an unmatched shopping experience.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Home</a></li>
            <li><a href="/products" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Products</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <p className="text-gray-400 text-sm mb-2">Kathmandu, Nepal</p>
          <p className="text-gray-400 text-sm mb-2">Email: support@myshop.com</p>
          <p className="text-gray-400 text-sm">Phone: +977-9876543210</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
