import React, { useEffect, useState } from 'react';
import {
  getAllProductApi,
  updateProductApi,
  deleteProductApi,
} from '../../api/api';
import { toast } from 'react-toastify';

const ShowAllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await getAllProductApi();
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (err) {
      toast.error('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description || '',
      productType: product.productType,
      productPrice: product.productPrice,
    });
    setImagePreview(product.image || '');
    setImageFile(null);
    setModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteProductApi(productToDelete._id);
      if (res.data.success) {
        toast.success('Product deleted successfully');
        setDeleteModalOpen(false);
        setProductToDelete(null);
        fetchProducts();
      } else {
        toast.error('Delete failed');
      }
    } catch (err) {
      toast.error('Error deleting product');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('productType', formData.productType);
      data.append('productPrice', formData.productPrice);
      if (imageFile) {
        data.append('image', imageFile);
      }

      const res = await updateProductApi(editingProduct._id, data);
      if (res.data.success) {
        toast.success('Product updated');
        setModalOpen(false);
        setEditingProduct(null);
        fetchProducts();
      } else {
        toast.error(res.data.message || 'Update failed');
      }
    } catch (err) {
      toast.error('Error updating product');
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Discount</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{product.title}</td>
                <td className="py-3 px-4">${product.productPrice}</td>
                <td className="py-3 px-4">${product.discountPrice}</td>
                <td className="py-3 px-4">
                  <button
                    className="text-purple-600 hover:underline mr-3"
                    onClick={() => openEditModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => openDeleteModal(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
            <h3 className="text-xl font-bold mb-4">Edit Product</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Product title"
                className="w-full border rounded px-4 py-2"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                placeholder="Product type"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                placeholder="Product price"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded px-4 py-2"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-32 object-cover rounded mx-auto mt-2"
                />
              )}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete{' '}
              <strong>{productToDelete?.title}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setProductToDelete(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowAllProductsPage;
