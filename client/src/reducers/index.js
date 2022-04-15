import { combineReducers } from 'redux';

import products from './products';

// both key and value = products, so we just say { products }
export default combineReducers({ products });