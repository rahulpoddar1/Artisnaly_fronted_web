import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { createProductApi } from '../../api/api'; // adjust path as needed
import { toast } from 'react-toastify';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    productType: '',
    productPrice: '',
    discountPrice: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.productPrice || !formData.productType || !formData.discountPrice) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('productType', formData.productType);
      data.append('productPrice', formData.productPrice);
      data.append('discountPrice', formData.discountPrice);
      if (imageFile) {
        data.append('image', imageFile);
      }

      const res = await createProductApi(data);
      if (res.data.success) {
        toast.success(res.data.message || 'Product created successfully');
        setFormData({
          title: '',
          description: '',
          productType: '',
          productPrice: '',
          discountPrice: '',
        });
        setImageFile(null);
        setImagePreview(null);
      } else {
        toast.error(res.data.message || 'Failed to create product');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error creating product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center tracking-wide">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-700">
            Product Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g., Hand-Painted Ceramic Mug"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-800 text-base placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Detailed product description..."
            className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-800 text-base placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-y"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Product Type */}
        <div>
          <label htmlFor="productType" className="block mb-2 text-sm font-semibold text-gray-700">
            Product Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="productType"
            name="productType"
            placeholder="e.g., Drinkware, Wall Decor"
            className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-800 text-base placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={formData.productType}
            onChange={handleChange}
            required
          />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productPrice" className="block mb-2 text-sm font-semibold text-gray-700">
              Original Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              placeholder="e.g., 300"
              className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-800 text-base placeholder-gray-400 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              value={formData.productPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="discountPrice" className="block mb-2 text-sm font-semibold text-gray-700">
              Discount Price (Optional)
            </label>
            <input
              type="number"
              id="discountPrice"
              name="discountPrice"
              placeholder="e.g., 250"
              className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-800 text-base placeholder-gray-400 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              value={formData.discountPrice}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block mb-2 text-sm font-semibold text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full rounded-lg cursor-pointer border border-gray-300 p-2 text-gray-600
            focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 rounded-md max-h-48 mx-auto object-contain shadow-md border border-gray-200"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold rounded-xl
          py-3 text-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition
          transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <PlusCircle size={24} />
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
