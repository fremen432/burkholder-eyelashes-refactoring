// Action Creators are functions that return an 'action' which is an object that has the 'type' and a payload 
// example ->  { type: 'FETCH_ALL', payload: data }

import * as api from '../api';

// Action Creators

// we will export this action to App.js
// the 'async (dispatch) =>' syntax comes from redux-thunk
// this getProducts() is imported from app.js to be dispatched by react-redux
export const getProducts = () => async (dispatch) => {
    try {
        // this gets data from the back-end via our api, which we imported at the top
        const { data } = await api.fetchProducts();

        // instead of returning the object, we will 'dispatch' it to our reducer function
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
       console.log(error.message);
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        // const { data } = await api.createProduct(product);
        const data = await api.createProduct(product);

        // dispatch the 'action'
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}
