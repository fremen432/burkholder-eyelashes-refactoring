// Node Module imports
import React, { useState, useEffect } from "react";
import { onAdd, onRemove } from "./assets/js/utils/onAdd-onRemove";

// use this to dispatch an action
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './state management/actions/products'
// import { addCartItem, removeCartItem } from './actions/cartItems'

// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import Login__COMP from "./components/Login";
import SignUp__COMP from "./components/SignUp";
import AllProducts from './components/All-Products'
import Cart from "./components/Cart";
import AddProduct from "./components/Add-Product";


// CSS imports
import './assets/css/main/App.css'
import './assets/css/utils/MediaQueries.css'
import './assets/css/utils/Animations.css'

export default function App() {

  const page = useSelector( state => state.pageMethods );

  const dispatch = useDispatch();

  // every time the 'dispatch' state is changed, it will call () => dispatch(getProducts()) to get all products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="App ">
      <NavBar 
        page={page} 
      />
      <div className="Body_Content box " >
        { 
          page == 'home' ?
          <HomePage 
          page={page} 
          /> :

          page == 'allProducts' ?
            <AllProducts 
            page={page} 
            /> :

          page == 'cart' ?
            <Cart 
            page={page} 
            /> :

          page == 'addProduct' ?
            <AddProduct 
            page={page} 
            /> :

          page == 'login' ?
            <Login__COMP 
            page={page} 
            /> :

          page == 'signUp' ?
            <SignUp__COMP 
            page={page} 
            /> :

            <HomePage 
            page={page} 
            />
        }
        <Footer />
      </div>
    </div>
  );
}