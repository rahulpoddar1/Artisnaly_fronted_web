import React, { useEffect, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { getAllProductApi } from '../api/api';
import { Link } from 'react-router-dom'; // 👈 Import Link

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllProductApi();
        setProducts(response.data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Our Products
        </h1>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-indigo-600 mb-4" size={36} />
            <p className="text-gray-700 text-base">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-red-600">
            <AlertCircle className="mb-4" size={36} />
            <p className="text-base">{error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 text-gray-600 text-base">
            No products found.
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div
                  className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  <div className="h-40 bg-gray-50 overflow-hidden">
                    <img
                      src={
                        product.image ||
                        `https://placehold.co/300x200/6b46c1/ffffff?text=${encodeURIComponent(product.title || 'Product')}`
                      }
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/300x200/6b46c1/ffffff?text=Image+Error";
                      }}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description || 'No description available.'}
                    </p>
                    <div className="mt-auto pt-2 border-t border-gray-100">
                      <span className="text-lg font-bold text-indigo-600">
                        ₹{product.productPrice ? parseFloat(product.productPrice.replace(',', '')).toFixed(2) : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
