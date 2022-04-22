import { combineReducers } from 'redux';

import products from './products';

// since both key and value = products, { products: products }
// we just say { products }
// this will be exported to the application's main index.js
export default combineReducers({ products });