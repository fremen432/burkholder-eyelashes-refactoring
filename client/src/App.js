// Node Module imports
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom@next';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// newPage imports
import HomePage from "./newPages/PAGE__HomePage";
// import Cart from "./newPages/PAGE__Cart";
import Login_SignUp from "./newPages/PAGE__Login_SignUp";

import Login__COMP from "./newComponents/Login__COMP";
import SignUp__COMP from "./newComponents/SignUp__COMP";
import FeaturedProducts from './newComponents/COMP__FeaturedProducts'
import AllProducts from './newComponents/COMP__AllProducts'
import Cart from "./newComponents/COMP__Cart";

import Header from "./newComponents/Header";
import Footer from "./newComponents/Footer";

// CSS imports
import './App.css';
// import { Switch } from "@headlessui/react";

// sends http requests to server at this link
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});
 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
 
export default function App() {
  const [page, setPage] = useState('home')

  const setPageMethods = {
    home: () => setPage('home'),
    allProducts: () => setPage('allProducts'),
    cart: () => setPage('cart'),
    login: () => setPage('login'),
    signUp: () => setPage('signUp')
  }
  const [cartItems, setCartItems] = useState([])

  const onAdd = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem already exists in cartItems, add 1 to qty,
    // else, add newItem to cartItems.

    console.log(cartItems);
    const exist = cartItems.find( item => item.id === newItem.id);

    exist ?
    setCartItems( cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item )) :
    setCartItems([...cartItems, { ...newItem, qty: 1 }]);

  };
  const onRemove = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem.qty == 1, return a new array excluding newItem.
    // else, subtract 1 from newItem.qty.

    console.log(cartItems);

    const exist = cartItems.find( item => item.id === newItem.id );

    exist.qty == 1 ?
    setCartItems(cartItems.filter( item => item.id !== newItem.id )) :
    setCartItems(cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item ));

  };

  const onAdd1 = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem already exists in cartItems, add 1 to qty,
    // else, add newItem to cartItems.

    // returns the found item object if the item.id matches newItem.id
    const exist = cartItems.find( item => item.id === newItem.id);

    // If the newItem exists, then return a new array from the cartItems array. 
    if (exist) {

      // For every item in cartItems array, if item.id matches newItem.id,
      // return an object containing all previous properties from 'item' but update the quantity to be + 1.
      setCartItems( cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item ));
      
      // Else, if newItem was NOT found in the cartItems array,
    } else {

      // return an array containing all previous cartItems objects plus newItem.
      setCartItems([...cartItems, { ...newItem, qty: 1 }]);
    }

  };
  const onRemove1 = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem exists in cartItems, subtract 1 from qty,
    // else, add newItem to cartItems.

    // returns the found item object if the item.id matches newItem.id
    const exist = cartItems.find( item => item.id === newItem.id );

    // If the existing item.qty equals 1,
    if (exist.qty === 1) {

      // return a new array from cartItems. only push the item if 
      // for every item in cartItems, if item.id matches newItem.id,
      // do not push item to new array, 
      // else, push item to new array
      setCartItems(cartItems.filter( item => item.id !== newItem.id ));

      // else, if the existing item's quantity does not equal 1,
    } else {

      // return a new array from cartItems array,
      setCartItems(cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item ));
        // for every item in cartItems, 
        // if item.id matches newItem.id,
        // return an object containing all previous properties from 'item' but update the quantity to be - 1.
        // else, return item
    }
  };

  return (
      <div className="App ">
        <Header page={page} setPageMethods={setPageMethods} cartItems={cartItems} />
        <div className="Body_Content box " >
          {
            page == 'home' ? <HomePage page={page} setPageMethods={setPageMethods} /> :
            page == 'allProducts' ? <AllProducts page={page} setPageMethods={setPageMethods} onAdd={onAdd} onRemove={onRemove} /> :
            page == 'cart' ? <Cart page={page} setPageMethods={setPageMethods} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> :
            page == 'login' ? <Login__COMP page={page} setPageMethods={setPageMethods} /> :
            page == 'signUp' ? <SignUp__COMP page={page} setPageMethods={setPageMethods} /> :
            <HomePage page={page} setPageMethods={setPageMethods} />
          }
          <Footer />
        </div>
      </div>
  );
}