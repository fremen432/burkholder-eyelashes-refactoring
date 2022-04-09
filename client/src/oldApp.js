// Node Module imports
import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// oldPages imports
import Home         from './oldPages/Home'
import Login        from './oldPages/Login';
import Signup       from './oldPages/Signup';
import About        from './oldPages/About';
import Contact      from './oldPages/Contact';
import FAQ          from './oldPages/FAQ';
import Products     from "./oldPages/Products";
import OrderSummary from "./oldPages/OrderSummary";
import OrderHistory from "./oldPages/OrderHistory";
import Error        from "./oldPages/NoMatch";
import Cart         from "./oldPages/Cart";
import Admin        from './oldPages/Admin';

// newPage imports
// import HomePage from "./newPages/HomePage";
// import Cart from "./newPages/Cart";
// import Login_SignUp from "./newPages/Login_SignUp";

// Components imports
import Navbar       from "./components/Nav";
import Footer       from "./components/Footer";

// CSS imports
import './App.css';
import './assets/style.css'

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

  return(

    <ApolloProvider client = {client}>
      <div className="App" >
          <Router>
            <Navbar />

            <Switch>
              <Route exact path='/'             component={Home}/>
              <Route exact path='/products'     component={Products} />
              <Route exact path='/cart'         component={Cart} />

              <Route exact path='/about'        component={About} />
              <Route exact path='/contact'      component={Contact} />
              <Route exact path='/faq'          component={FAQ} />
              <Route exact path='/admin'        component={Admin} />
              <Route exact path='/orderhistory' component={OrderHistory} />
              <Route exact path='/ordersummary' component={OrderSummary} />
              <Route exact path='/login'        component={Login} />
              <Route exact path='/signup'       component={Signup} />

              <Route                            component={Error} />
            </Switch>
            
            <Footer />
          </Router>
      </div>
    </ApolloProvider>
  )

  // return (
  //   <div className="App" >
  //       <Routes>
  //         <Route exact path='/'             element={<HomePage />}/>
  //         <Route exact path='/cart'         element={<Cart  />} />
  //         <Route exact path='/cart'         element={<Login_SignUp  />} />
  //       </Routes>
  //   </div>
  // );
}

