import React, { Component } from 'react';

class NavEl extends React.Component {

  navElements =  [
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
  basicClasses = ` nav-el inline-flex  items-center px-1  pt-1 text-sm  font-medium  border-b-2`
  nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
  focusedClasses = ` text-gray-900 border-indigo-500 `

  render() {
    return (
      <>
        {
          this.navElements.map( el => 
            <a  
              href={ el.ref } 
              key={ el.ref } 
              onClick={ this.changeClass } 
              className={ this.basicClasses + this.nonFocusedClasses } 
            >{ el.name }</a>
          )
        }
      </>
    )
  }
}

export default NavEl;