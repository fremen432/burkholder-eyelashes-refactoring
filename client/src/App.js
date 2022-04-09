// Node Module imports
import React from "react";
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
import HomePage from "./newPages/HomePage";
import Cart from "./newPages/Cart";
import Login_SignUp from "./newPages/Login_SignUp";

// CSS imports
import './App.css';
import './assets/style.css'
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
  return (
    <Router>
      <div className="App" >
          <Routes>
            <Route path='/' exact={true} element={ <HomePage /> } />
            {/* <Route path='/cart' element={<Cart />} />
            <Route path='/cart' element={<Login_SignUp  />} /> */}
          </Routes>
      </div>
    </Router>
  );
}