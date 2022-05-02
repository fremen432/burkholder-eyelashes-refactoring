import { ADD_TO_CART, REMOVE_FROM_CART } from "../assets/constants/actionTypes";
export default (cartItems = [], action) => {

    switch (action.type) {

        case ADD_TO_CART:   
            // console.log('this is the ADD_TO_CART case');
            return action.payload;
        
        case REMOVE_FROM_CART:
            // console.log('this is the REMOVE_FROM_CART case');
            return action.payload;    
        
        default:
            // console.log('this is the default');
            return cartItems;
    }
}
