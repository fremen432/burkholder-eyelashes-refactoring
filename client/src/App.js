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
import Cart from "./newPages/PAGE__Cart";
import Login_SignUp from "./newPages/PAGE__Login_SignUp";

import Login__COMP from "./newComponents/Login__COMP";
import SignUp__COMP from "./newComponents/SignUp__COMP";
import FeaturedProducts from './newComponents/COMP__FeaturedProducts'
import AllProducts from './newComponents/COMP__AllProducts'

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

  return (
      <div className="App ">
        <Header page={page} setPageMethods={setPageMethods} />
        <div className="Body_Content box " >
          {
            page == 'home' ? <HomePage page={page} setPageMethods={setPageMethods} /> :
            page == 'allProducts' ? <AllProducts page={page} setPageMethods={setPageMethods} /> :
            page == 'cart' ? <Cart page={page} setPageMethods={setPageMethods} /> :
            page == 'login' ? <Login__COMP page={page} setPageMethods={setPageMethods} /> :
            page == 'signUp' ? <SignUp__COMP page={page} setPageMethods={setPageMethods} /> :
            <HomePage page={page} setPageMethods={setPageMethods} />
          }
          <Footer />
        </div>
      </div>
  );
}

// return (
//   <div className="App " >
//     <Header page={page} setPageMethods={setPageMethods} />
//     <div className="Body_Content box " >
//       {/* <HomePage/> */}
//       {/* <Cart/> */}

//       {
//         page == 'home' ? <HomePage /> :
//         page == 'cart' ? <Cart /> :
//         page == 'login' ? <Login__COMP /> :
//         page == 'signUp' ? <SignUp__COMP /> :
//         <HomePage />
//       }
//       <Footer />
//     </div>
//   </div>
//   );
