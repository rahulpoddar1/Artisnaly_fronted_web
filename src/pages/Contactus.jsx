import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'; 

const ContactUs = () => { 
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Contact Information */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10 flex flex-col justify-center space-y-6 lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none">
            {/* Background pattern for visual interest - adjust opacity as needed */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            <Sparkles size={64} className="text-white mb-6 animate-pulse" /> {/* Added Sparkles icon */}
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Get in Touch
            </h2>
            <p className="text-lg opacity-90 mb-6">
              We'd love to hear from you! Whether you have a question, feedback, or a project in mind, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={24} className="flex-shrink-0" />
                <p className="text-md font-medium">Kathmandu, Nepal</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={24} className="flex-shrink-0" />
                <p className="text-md font-medium">support@myshop.com</p> {/* Updated email domain */}
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={24} className="flex-shrink-0" />
                <p className="text-md font-medium">+977-9876543210</p>
              </div>
            </div>

            {/* Optional: Social media links or a small tagline */}
            <div className="mt-8 pt-6 border-t border-purple-500 border-opacity-30 text-sm opacity-80">
              <p>&copy; 2025 MyShop. All rights reserved.</p> {/* Updated company name */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-10 bg-white lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-semibold text-gray-800 mb-1">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 text-gray-900 resize-y"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-lg text-base font-semibold rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
