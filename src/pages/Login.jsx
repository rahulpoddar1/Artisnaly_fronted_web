import React, { useState } from 'react';
import { Mail, Lock, Sparkles } from 'lucide-react';
import { loginApi } from '../api/api'; // adjust path if needed
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, password } = formData;

    if (!userName || !password) {
      toast.error('Please enter all fields');
      return;
    }

    try {
      const res = await loginApi({ userName, password });

      toast.success(res.data.message || 'Login successful');

      localStorage.setItem('token', res.data.token); // Store token
      localStorage.setItem('user', JSON.stringify(res.data.userData)); // Optional: store user info
      // After successful login:
      if (res.data.userData.isAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/products');
      }

      window.location.reload()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
        <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] flex flex-col lg:flex-row">

          {/* Left Section: Welcome */}
          <div className="relative lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center items-center text-center lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none">
            <Sparkles size={64} className="text-white mb-6 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Welcome Back!</h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 max-w-sm">
              Sign in to your account to continue your journey with us.
            </p>
            <p className="text-sm opacity-70">
              Don't have an account?{' '}
              <a href="/register" className="font-semibold text-white hover:text-indigo-200 transition-colors duration-200 underline">
                Register here
              </a>
            </p>
          </div>

          {/* Right Section: Login Form */}
          <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-white lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign In</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <label htmlFor="userName" className="sr-only">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-gray-400" />
                  </div>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.userName}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200">
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
