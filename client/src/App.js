// Node Module imports
import React, { useState, useEffect } from "react";
import { onAdd, onRemove } from "./assets/js/utils/onAdd-onRemove";

// use this to dispatch an action
import { useDispatch } from 'react-redux';
import { getProducts } from './actions/products'
// import { addCartItem, removeCartItem } from './actions/cartItems'

// Section imports
import HomePage from "./Sections/HomePage";
import Login__COMP from "./Sections/Login/COMP__Login";
import SignUp__COMP from "./Sections/SignUp/COMP__SignUp";
import AllProducts from './Sections/All-Products'
import Cart from "./Sections/Cart";
import AddProduct from "./Sections/Add-Product";

// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS imports
import './assets/css/main/App.css'
import './assets/css/utils/MediaQueries.css'
import './assets/css/utils/Animations.css'

export default function App() {

  const dispatch = useDispatch();

  // every time the 'dispatch' state is changed, it will call () => dispatch(getProducts()) to get all products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const [page, setPage] = useState('home')
  // const [cartItems, setCartItems] = useState([])

  const setPageMethods = {
    home:         () => setPage('home'),
    allProducts:  () => setPage('allProducts'),
    cart:         () => setPage('cart'),
    addProduct:   () => setPage('addProduct'),
    login:        () => setPage('login'),
    signUp:       () => setPage('signUp')
  }

  return (
    <div className="App ">
      <Header 
        page={page} 
        setPageMethods={setPageMethods} 
      />
      <div className="Body_Content box " >
        { 
          page == 'home' ?
          <HomePage 
          page={page} 
          setPageMethods={setPageMethods} 
          /> :

          page == 'allProducts' ?
            <AllProducts 
            page={page} 
            setPageMethods={setPageMethods} 
            /> :

          page == 'cart' ?
            <Cart 
            page={page} 
            setPageMethods={setPageMethods} 
            /> :

          page == 'addProduct' ?
            <AddProduct 
            page={page} 
            setPageMethods={setPageMethods} 
            /> :

          page == 'login' ?
            <Login__COMP 
            page={page} 
            setPageMethods={setPageMethods} 
            /> :

          page == 'signUp' ?
            <SignUp__COMP 
            page={page} 
            setPageMethods={setPageMethods} 
            /> :

            <HomePage 
            page={page} 
            setPageMethods={setPageMethods} 
            />
        }
        <Footer />
      </div>
    </div>
  );
}