import { combineReducers } from 'redux';

import products from './products';
import cartItems from './cartItems';

// since both key and value = products, { products: products }
// we just say { products }
export default combineReducers({ products, cartItems });

// this will be exported to the application's main index.js