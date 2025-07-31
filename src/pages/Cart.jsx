import React, { useEffect, useState } from 'react';
import { getAllCartItems, removeFromCart } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?._id;

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    const fetchCartItems = async () => {
      try {
        const res = await getAllCartItems(userId);
        setCartItems(res.data.cart || []);
      } catch (err) {
        console.error('Error fetching cart items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId, navigate]);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart({ userId, productId });
      setCartItems((prev) => prev.filter((item) => item.product._id !== productId));
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => {
      const price = parseFloat(item.product?.discountPrice || item.product?.productPrice || 0);
      return total + price * (item.quantity || 1);
    }, 0);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading cart items...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4">SN</th>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Subtotal</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const product = item.product || {};
                  const price = parseFloat(product.discountPrice || product.productPrice || 0);
                  const quantity = item.quantity || 1;

                  return (
                    <tr key={product._id || index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded shadow"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium">{product.title}</td>
                      <td className="py-3 px-4">Rs. {price}</td>
                      <td className="py-3 px-4">{quantity}</td>
                      <td className="py-3 px-4 font-semibold">Rs. {price * quantity}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleRemove(product._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="text-right mt-6">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-green-600">Rs. {getTotal()}</span>
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
