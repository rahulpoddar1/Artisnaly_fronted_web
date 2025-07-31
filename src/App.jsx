import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';


import HomePage from './pages/HomePage';
import Contactus from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductById from './pages/ProductById';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './admin/AdminDashboard';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16">
        <ToastContainer position="bottom-right" />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductById />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
