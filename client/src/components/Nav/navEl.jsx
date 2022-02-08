import React, { Component } from 'react';

import Auth from '../../utils/auth'

class NavEl extends Component {

  logout(event) {
    event.preventDefault();
    Auth.logout();
    window.location.href="/"
  };

  loggedOutNavElements =  [
    { name: 'Home',             ref: '/', },
    { name: 'Products',         ref: 'products', },
    { name: 'About',            ref: 'about', },
    { name: 'Contact',          ref: 'contact', },
    { name: 'Admin',            ref: 'admin', },
    { name: 'Cart',             ref: 'cart', },
    { name: 'Order History',    ref: 'orderHistory', },
    { name: 'Order Summary',    ref: 'orderSummary', },
    { name: 'Log In',           ref: 'login', },
    { name: 'Sign Up',          ref: 'signup', },
  ]
  loggedInNavElements =  [
    { name: 'Home',             ref: '/', },
    { name: 'Products',         ref: 'products', },
    { name: 'About',            ref: 'about', },
    { name: 'Contact',          ref: 'contact', },
    { name: 'Admin',            ref: 'admin', },
    { name: 'Cart',             ref: 'cart', },
    { name: 'Order History',    ref: 'orderHistory', },
    { name: 'Order Summary',    ref: 'orderSummary', },
    { name: 'Log Out',          ref: '/', onClick: this.logout}
  ]
  basicClasses = ` nav-el inline-flex  items-center px-1  pt-1 text-sm  font-medium  border-b-2`
  nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
  focusedClasses = ` text-gray-900 border-indigo-500 `

  render() {
    return (
      <>
        {Auth.loggedIn() ? (
          <>
            {
              this.loggedInNavElements.map( el => 
                <a  
                  href={ el.ref } 
                  key={ el.name } 
                  onClick={ el.onClick } 
                  className={ this.basicClasses + this.nonFocusedClasses } 
                >{ el.name }</a>
              )
            }
          </>
        ) : (
          <>
            {
              this.loggedOutNavElements.map( el => 
                <a  
                  href={ el.ref } 
                  key={ el.name } 
                  onClick={ el.onClick } 
                  className={ this.basicClasses + this.nonFocusedClasses } 
                >{ el.name }</a>
              )
            }
          </>
        )}
      </>
    )
  }
}

export default NavEl;