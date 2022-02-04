// Node Module imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Pages imports
import Home         from './pages/Home'
import About        from './pages/About';
import Contact      from './pages/Contact';
import FAQ          from './pages/FAQ';

// Components imports
import Navbar       from "./components/Nav";
import Login        from './components/Login';
import SignUp       from './components/SignUp';
import Admin        from './components/Admin';
import Selection    from "./pages/Selection";
import Footer       from "./components/Footer";
import Error        from "./components/NoMatch";
import Cart         from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import OrderSummary from "./components/OrderSummary";

// CSS imports
import './App.css';
import './assets/style.css'

const httpLink = createHttpLink({
  uri: '/graphql'
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

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'             component={Home}/>
          <Route exact path='/products'     component={Selection} />
          <Route exact path='/about'        component={About} />
          <Route exact path='/contact'      component={Contact} />
          <Route exact path='/faq'          component={FAQ} />
          <Route exact path='/admin'        component={Admin} />
          <Route exact path='/cart'         component={Cart} />
          <Route exact path='/orderhistory' component={OrderHistory} />
          <Route exact path='/ordersummary' component={OrderSummary} />
          <Route exact path='/login'        component={Login} />
          <Route exact path='/signup'       component={SignUp} />

          <Route                            component={Error} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
