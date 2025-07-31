import axios from "axios";

const apis = "http://localhost:5500";
const Api = axios.create({
    baseURL: apis,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

const ApiWithFormData = axios.create({
    baseURL: apis,
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    },
})

const token = localStorage.getItem('token')

const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
}

// login api 
export const loginApi = (data) => Api.post('api/signin', data);
export const registerApi = (data) => Api.post('/api/signup', data);
export const profileApi = (id) => Api.post(`/api/profile/${id}`,);

//product
export const createProductApi = (data) => ApiWithFormData.post('/api/products', data);
export const getAllProductApi = () => Api.get('/api/products');
export const getProductByIDApi = (id) => Api.get(`/api/products/${id}`);
export const updateProductApi = (id, data) => ApiWithFormData.put(`/api/products/${id}`, data);
export const deleteProductApi = (id, ) => Api.delete(`/api/products/${id}`);

//cart
export const addToCartApi = (data) => Api.post('/api/cart/add', data);
export const getAllCartItems = (id) => Api.get(`/api/cart/get/${id}`);
// Correct removeFromCart API to send data in axios.delete config
export const removeFromCart = (data) =>
    Api.delete('/api/cart/delete', { data, headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });



export default Api;
