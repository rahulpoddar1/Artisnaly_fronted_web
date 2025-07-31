import React from 'react';
import { Eye, Target, Sparkles } from 'lucide-react'; 

const AboutUs = () => { 
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 sm:p-12 lg:p-16 text-center rounded-t-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Discover Our Story
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            At MyShop, we believe in passion, quality, and a commitment to our customers.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to **MyShop**! We are committed to providing you with the best
              products and an exceptional shopping experience. Our mission is to
              offer high-quality products at affordable prices while maintaining
              excellent customer service.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Founded in 2020, MyShop has grown rapidly thanks to our dedicated
              team and loyal customers. We carefully select our products to ensure
              they meet our strict standards of quality and reliability. We are
              passionate about what we do and constantly strive to innovate and
              improve our offerings to serve you better.
            </p>

            {/* Vision, Mission, Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
              {/* Our Vision */}
              <div className="p-6 bg-indigo-50 rounded-xl shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <Eye size={48} className="text-indigo-600 mb-4" />
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted online store where customers find great
                  products with confidence.
                </p>
              </div>
              {/* Our Mission */}
              <div className="p-6 bg-purple-50 rounded-xl shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <Target size={48} className="text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold text-purple-700 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Delivering exceptional value and service to our customers every
                  day.
                </p>
              </div>
              {/* Our Values */}
              <div className="p-6 bg-violet-50 rounded-xl shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <Sparkles size={48} className="text-violet-600 mb-4" />
                <h3 className="text-2xl font-semibold text-violet-700 mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, Customer Focus, Quality, and Innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
