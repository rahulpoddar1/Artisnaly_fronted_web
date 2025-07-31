import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
  ];

  useEffect(() => {
    // Try to read user info from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-purple-700 hover:text-purple-800 transition-colors duration-200">
            MyShop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            <Link to='/cart' >
              <FiShoppingCart className="text-2xl text-gray-800 hover:text-purple-600 cursor-pointer transition-colors duration-200" />
            </Link>

            {user ? (
              <>
                <span className="text-gray-800 font-semibold px-4 py-2">
                  Hello, {user.userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm px-5 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 text-2xl focus:outline-none hover:text-purple-600 transition-colors duration-200"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block text-gray-800 font-medium hover:text-purple-600 transition-colors duration-200 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Link to="/cart">
                <FiShoppingCart className="text-2xl text-gray-800 hover:text-purple-600 cursor-pointer transition-colors duration-200" />
              </Link>
              <span className="text-gray-800">Shopping Cart</span>
            </div>

            {user ? (
              <>
                <span className="block text-gray-800 font-semibold text-center">
                  Hello, {user.userName}
                </span>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-center text-sm px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full text-center text-sm px-5 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center text-sm px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
