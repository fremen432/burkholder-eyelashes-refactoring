import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from "../assets/constants/actionTypes";

/*
    All of the following is necessary for react-redux

    A reducer is a function that takes in a 'state' and an 'action'
    depending on what the action.type is, we will return either another action or a state change.

        const reducer = (state, action) => {
            if (action.type == 'CREATE') {

                // return either an action, or the state changed by the action
                return action

                or 

                return []
            }
        }

    because we will have multiple action types, we will use a switch statement 
    so we can change the 'state' according to the 'action.type'.
    
    first argument 'state' needs to always be equal to something
    we'll set it to an array because the products are in an array
*/

export default (products = [], action) => {

    switch (action.type) {


        case FETCH_ALL:    
            // action.payload is the argument
            // this return statement is our updated state  
            // same as setProducts
            return action.payload;    
        
        case CREATE:    
            return [...products, action.payload];    
        
        default:
            return products;
    }
}

// this function is exported to ./index.js

// We get the action.type from 
// We get the action.payload from 