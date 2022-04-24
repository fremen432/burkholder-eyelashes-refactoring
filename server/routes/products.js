import express from 'express';

import { getProducts, createProduct, updateProduct } from '../controllers/products.js';

const router = express.Router();

// the '/' route is actually 'http://localhost:5000/products/'
router.get('/', getProducts)
router.post('/', createProduct)
router.patch('/:id', updateProduct)

export default router;