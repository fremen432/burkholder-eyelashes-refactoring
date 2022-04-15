// reducer is a function that takes in a 'state' and an 'action'
// depending on action.type, we will change the state according to the action.type.

// first argument 'state' needs to always be equal to something
// we'll set it to an array because the products are in an array
export default (products = [], action) => {

    switch (action.type) {

        case "FETCH_ALL":    
            return action.payload;    
        
        case "CREATE":    
            return products;    
        
        default:
            return products;
    }
}
