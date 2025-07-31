import React from 'react';
import { Sparkles, ShoppingBag, Award, Headset } from 'lucide-react'; // Icons for features

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
        {/* Optional: Background pattern or subtle animation */}
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Sparkles size={80} className="text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Welcome to <span className="text-yellow-300">Artisanly</span>
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Your one-stop destination for high-quality products and an exceptional shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href="/products"
              className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Why Choose MyShop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-indigo-50 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <ShoppingBag size={60} className="text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Explore a vast array of products, carefully curated to meet your needs and desires.
              </p>
            </div>
            <div className="p-8 bg-purple-50 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <Award size={60} className="text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand by the quality of our products, ensuring satisfaction with every purchase.
              </p>
            </div>
            <div className="p-8 bg-violet-50 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <Headset size={60} className="text-violet-600 mb-6" />
              <h3 className="text-2xl font-semibold text-violet-700 mb-3">Excellent Support</h3>
              <p className="text-gray-600">
                Our dedicated customer service team is always here to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-700 to-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl opacity-90 mb-10">
            Join the Artisnaly family today and discover a world of amazing products.
          </p>
          <a
            href="/register"
            className="px-10 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            Create Your Account
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
