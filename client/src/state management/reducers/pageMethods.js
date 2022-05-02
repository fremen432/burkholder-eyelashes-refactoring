import { 
    SET_PAGE__home,
    SET_PAGE__allProducts,
    SET_PAGE__cart,
    SET_PAGE__addProduct,
    SET_PAGE__login,
    SET_PAGE__signUp,
} from "../constants/actionTypes";

export default (page = 'home', action) => {

    switch (action.type) {

        case SET_PAGE__home:   
            // console.log('reducers.pageMethods.SET_PAGE__home');
            return action.payload;
        
        case SET_PAGE__allProducts:   
            // console.log('reducers.pageMethods.SET_PAGE__allProducts');
            return action.payload;
        
        case SET_PAGE__cart:   
            // console.log('reducers.pageMethods.SET_PAGE__cart');
            return action.payload;
        
        case SET_PAGE__addProduct:   
            // console.log('reducers.pageMethods.SET_PAGE__addProduct');
            return action.payload;
        
        case SET_PAGE__login:   
            // console.log('reducers.pageMethods.SET_PAGE__login');
            return action.payload;
        
        case SET_PAGE__signUp:   
            // console.log('reducers.pageMethods.SET_PAGE__signUp');
            return action.payload;
        
        default:
            // console.log('reducers.pageMethods.default');
            return page;
    }
}
