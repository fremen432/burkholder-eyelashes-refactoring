import { 
    SET_PAGE__home,
    SET_PAGE__allProducts,
    SET_PAGE__cart,
    SET_PAGE__addProduct,
    SET_PAGE__login,
    SET_PAGE__signUp,
} from "../constants/actionTypes";

// export const setPageMethods1 = {
//     // home:         () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'home' }),
//     // allProducts:  () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'allProducts' }),
//     // cart:         () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'cart' }),
//     // addProduct:   () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'addProduct' }),
//     // login:        () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'login' }),
//     // signUp:       () => (dispatch) => dispatch({ type: SET_PAGE__home, payload: 'signUp' })
// }

// export const setPageMethods2 = {
//     // home:         () => (dispatch) => dispatch('home'),
//     // allProducts:  () => (dispatch) => dispatch('allProducts'),
//     // cart:         () => (dispatch) => dispatch('cart'),
//     // addProduct:   () => (dispatch) => dispatch('addProduct'),
//     // login:        () => (dispatch) => dispatch('login'),
//     // signUp:       () => (dispatch) => dispatch('signUp')
// }

export const setPageMethods = {

    home: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_home')
            dispatch({type: SET_PAGE__home, payload: 'home'});
        } catch (error) {
            console.log(error.message);
        }
    },

    allProducts: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_allProducts')
            dispatch({type: SET_PAGE__allProducts, payload: 'allProducts'})
        } catch (error) {
            console.log(error.message);
        }
    },

    cart: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_cart')
            dispatch({type: SET_PAGE__cart, payload: 'cart'})
        } catch (error) {
            console.log(error.message);
        }
    },

    addProduct: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_addProduct')
            dispatch({type: SET_PAGE__addProduct, payload: 'addProduct'})
        } catch (error) {
            console.log(error.message);
        }
    },

    login: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_login')
            dispatch({type: SET_PAGE__login, payload: 'login'})
        } catch (error) {
            console.log(error.message);
        }
    },

    signUp: () => async (dispatch) => {
        try {
            // console.log('actions.pageMethods.setPage_signUp')
            dispatch({type: SET_PAGE__signUp, payload: 'signUp'})
        } catch (error) {
            console.log(error.message);
        }
    },

};


// export const setPage_home = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_home')
//         dispatch({type: SET_PAGE__home, payload: 'home'});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const setPage_allProducts = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_allProducts')
//         dispatch({type: SET_PAGE__allProducts, payload: 'allProducts'})
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const setPage_cart = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_cart')
//         dispatch({type: SET_PAGE__cart, payload: 'cart'})
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const setPage_addProduct = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_addProduct')
//         dispatch({type: SET_PAGE__addProduct, payload: 'addProduct'})
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const setPage_login = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_login')
//         dispatch({type: SET_PAGE__login, payload: 'login'})
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const setPage_signUp = () => async (dispatch) => {
//     try {
//         console.log('actions.pageMethods.setPage_signUp')
//         dispatch({type: SET_PAGE__signUp, payload: 'signUp'})
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export default { setPageMethods };