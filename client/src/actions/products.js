// Action Creators are functions that return an 'action' which is an object that has the 'type' ex:) 'FETCH_ALL' and a 'payload'.

import * as api from '../api';
import { products } from '../data';

// Action Creators

// we will export this action to App.js
// the 'async (dispatch) =>' syntax comes from redux-thunk
export const getProducts = () => async (dispatch) => {
    try {

        // this gets data from the pack-end via our api
        const { data } = await api.fetchProducts();

        // dispatch the 'action' which is the object with type: 'FETCH_ALL' and payload: data
        // instead of returning the object, we will 'dispatch' it to our reducer function
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
       console.log(error.message);
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);

        // dispatch the 'action'
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}
