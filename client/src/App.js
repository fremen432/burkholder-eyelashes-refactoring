// Node Module imports
import React, { useState } from "react";
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Page imports
import HomePage from "./newPages/PAGE__HomePage";

// Component Imports
import Login__COMP from "./newComponents/COMP__Login";
import SignUp__COMP from "./newComponents/COMP__SignUp";
import AllProducts from './newComponents/COMP__AllProducts'
import Cart from "./newComponents/COMP__Cart";

import Header from "./newComponents/Header/Header";
import Footer from "./newComponents/Footer";

// CSS imports
import './App.css';
import './assets/css/MediaQueries.css'
import './assets/css/Animations.css'
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
  const [cartItems, setCartItems] = useState([])

  const setPageMethods = {
    home: () => setPage('home'),
    allProducts: () => setPage('allProducts'),
    cart: () => setPage('cart'),
    login: () => setPage('login'),
    signUp: () => setPage('signUp')
  }

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
    // If the newItem.qty > 1, subtract 1 from newItem.qty.
    // else, return a new array excluding newItem.

    console.log(cartItems);
    const exist = cartItems.find( item => item.id === newItem.id );

    exist.qty > 1 ?
    setCartItems(cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item )) :
    setCartItems(cartItems.filter( item => item.id !== newItem.id )) ;

  };

  return (
      <div className="App ">
        <Header page={page} setPageMethods={setPageMethods} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <div className="Body_Content box " >
          {
            page == 'home' ? 
              <HomePage page={page} setPageMethods={setPageMethods} /> :

            page == 'allProducts' ? 
              <AllProducts page={page} setPageMethods={setPageMethods} onAdd={onAdd} onRemove={onRemove} /> :

            page == 'cart' ? 
              <Cart page={page} setPageMethods={setPageMethods} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> :

            page == 'login' ? 
              <Login__COMP page={page} setPageMethods={setPageMethods} /> :

            page == 'signUp' ? 
              <SignUp__COMP page={page} setPageMethods={setPageMethods} /> :

            <HomePage page={page} setPageMethods={setPageMethods} />
          }
          <Footer />
        </div>
      </div>
  );
}