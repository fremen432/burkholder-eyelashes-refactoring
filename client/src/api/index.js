import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import axios from 'axios';

const URL = 'http://localhost:5000/products'

export const fetchProducts = () => axios.get(URL);
export const createProduct = (newProduct) => axios.post(URL, newProduct);