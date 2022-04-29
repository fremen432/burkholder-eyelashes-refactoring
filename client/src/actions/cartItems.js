// import { page, setPage, cartItems, setCartItems } from "../../../Global-States";

// import state.cartItems
import { useSelector } from 'react-redux'

import { ADD_TO_CART, REMOVE_FROM_CART } from '../assets/constants/actionTypes';


// const cartItems = useSelector(state => state.cartItems);

// -- NEW FUNCTIONS --
export const addCartItem = (cartItems, newItem) => async (dispatch) => {

    // First, check if newItem exists in cartItems array.
    // If the newItem already exists in cartItems, add 1 to qty,
    // else, add newItem to cartItems.
    
    try {
        console.log(cartItems);
        const exist = cartItems.find(item => item.id === newItem.id);
    
        // increment 1 to existing item
        const incrementOne = cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item)
        
        // add new item to cartItems array
        const addNewItem = [...cartItems, { ...newItem, qty: 1 }];
        console.log('this is coming from actions/cartItems')
    
        exist ?
            dispatch({ type: ADD_TO_CART, payload: incrementOne }) :
            dispatch({ type: ADD_TO_CART, payload: addNewItem }) 
        
    } catch (error) {
        console.log(error.message)
    }

};

export const removeCartItem = (cartItems, newItem) => async (dispatch) => {

    // First, check if newItem exists in cartItems array.
    // If the newItem.qty > 1, subtract 1 from newItem.qty.
    // else, return a new array excluding newItem.

    try {
        
        console.log(cartItems);
        const exist = cartItems.find(item => item.id === newItem.id);
        const decrementOne = cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item);
        const removeItem = cartItems.filter(item => item.id !== newItem.id);

        exist.qty > 1 ?
            dispatch({ type: REMOVE_FROM_CART, payload: decrementOne }) :
            dispatch({ type: REMOVE_FROM_CART, payload: removeItem })

    } catch (error) {
        console.log(error.message)
    }


};

// -- ORIGINAL FUNCTIONS --
// export const addCartItem = (newItem) => {
//     // First, check if newItem exists in cartItems array.
//     // If the newItem already exists in cartItems, add 1 to qty,
//     // else, add newItem to cartItems.

//     console.log(cartItems);
//     const exist = cartItems.find(item => item.id === newItem.id);

//     exist ?
//         setCartItems(cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item)) :
//         setCartItems([...cartItems, { ...newItem, qty: 1 }]);

// };

// export const removeCartItem = (newItem) => {
//     // First, check if newItem exists in cartItems array.
//     // If the newItem.qty > 1, subtract 1 from newItem.qty.
//     // else, return a new array excluding newItem.

//     console.log(cartItems);
//     const exist = cartItems.find(item => item.id === newItem.id);

//     exist.qty > 1 ?
//         setCartItems(cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item)) :
//         setCartItems(cartItems.filter(item => item.id !== newItem.id));

// };
