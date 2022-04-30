// axios will handle our http requests
import axios from 'axios';

// const URL = 'http://localhost:5000/products'
const URL = 'http://localhost:5001/products'

export const fetchProducts = () => axios.get(URL);
export const createProduct = (newProduct) => {
    // console.log(newProduct);
    axios.post(URL, newProduct)
};

// these functions are exported to actions/products.js 