import express from 'express';

import { getProducts, createProduct } from '../controllers/products.js';

const router = express.Router();

// the '/' route is actually 'http://localhost:5000/products/'
router.get('/', getProducts)
router.post('/', createProduct)

export default router;