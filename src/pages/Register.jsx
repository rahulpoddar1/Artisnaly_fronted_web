import React, { useState } from 'react';
import { User, Mail, Lock, Sparkles, Phone } from 'lucide-react';
import { registerApi } from '../api/api'; // adjust path if needed
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, userName, phoneNumber, password } = formData;


    try {
      const res = await registerApi({ firstName, lastName, email, userName, phoneNumber, password });
      setSuccess(res.data.message || "Registered successfully.");
      toast.success("Register Successfully")
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 font-sans text-gray-900">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] flex flex-col lg:flex-row">
        {/* Welcome Side */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white flex flex-col justify-center items-center text-center">
          <Sparkles size={64} className="mb-6 animate-pulse" />
          <h2 className="text-4xl font-extrabold mb-4">Welcome Aboard!</h2>
          <p className="text-lg opacity-90 mb-6">
            Create your account to unlock exclusive features.
          </p>
          <p className="text-sm opacity-70">
            Already a member? <a href="/login" className="font-semibold underline hover:text-indigo-200">Sign in here</a>
          </p>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 p-8 sm:p-10 bg-white">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register Now</h3>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          {success && <p className="text-green-600 text-center mb-4">{success}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <InputWithIcon icon={<User />} name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
            </div>
            {/* Last Name */}
            <div>
              <InputWithIcon icon={<User />} name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
            </div>
            {/* Username */}
            <div>
              <InputWithIcon icon={<User />} name="userName" placeholder="Username" onChange={handleChange} value={formData.userName} />
            </div>
            {/* Email */}
            <div>
              <InputWithIcon icon={<Mail />} name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            </div>
            {/* Phone */}
            <div>
              <InputWithIcon icon={<Phone />} name="phoneNumber" type="tel" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} />
            </div>
            {/* Password */}
            <div>
              <InputWithIcon icon={<Lock />} name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            </div>
            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg shadow-md transition-all duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable input with icon component
const InputWithIcon = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
      {icon}
    </div>
    <input
      {...props}
      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 text-gray-900 transition-all duration-300"
      required
    />
  </div>
);

export default Register;
