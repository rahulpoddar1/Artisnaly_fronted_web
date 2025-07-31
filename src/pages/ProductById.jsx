import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIDApi, addToCartApi } from '../api/api';
import { Loader2, AlertCircle, Plus, Minus, ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductById = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProductByIDApi(productId);
        setProduct(response.data.product);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!user || !token) {
      toast.error('Please login to add items to cart.'); 
      return;
    }

    try {
      setAddingToCart(true);
      const data = {
        userId: user._id,
        productId: product._id,
        quantity,
      };

      await addToCartApi(data);
      toast.success('Item added to cart!');
    } catch (err) {
      toast.error('Failed to add item to cart.');
    } finally {
      setAddingToCart(false);
    }
  };

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        <Loader2 className="animate-spin text-indigo-600 mr-2" size={32} />
        <p className="text-lg">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-600">
        <AlertCircle size={36} className="mb-2" />
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x300/6b46c1/ffffff?text=Image+Error";
              }}
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{product.description}</p>

              <div className="flex items-center space-x-4 mb-3">
                <span className="text-xl font-semibold text-indigo-700">
                  ₹{product.discountPrice}
                </span>
                {product.discountPrice && product.productPrice && (
                  <span className="text-sm line-through text-gray-400">
                    ₹{product.productPrice}
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <span className="font-medium text-gray-700">Product Type:</span> {product.productType}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Added on:</span>{' '}
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
                  onClick={decreaseQty}
                  disabled={quantity === 1}
                >
                  <Minus size={18} />
                </button>
                <span className="font-semibold text-lg">{quantity}</span>
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
                  onClick={increaseQty}
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition duration-300 ease-in-out disabled:opacity-50"
              >
                {addingToCart ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2" size={18} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
