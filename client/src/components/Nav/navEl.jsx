import React, { Component } from 'react';

export default class NavEl extends React.Component {

    state = {
        navElements: [
            { name: 'Home',             ref:    '/', },
            { name: 'Products',         ref:    'products', },
            { name: 'About',            ref:    'about', },
            { name: 'Contact',          ref:    'contact', },
            { name: 'Admin',            ref:    'admin', },
            { name: 'Cart',             ref:    'cart', },
            { name: 'Order History',    ref:    'orderHistory', },
            { name: 'Order Summary',    ref:    'orderSummary', },
            { name: 'Log In',           ref:    'registration', },
            // { name: 'Sign Up',          ref:    'sign-up', },
        ],
        basicClasses: ` nav-el inline-flex  items-center px-1  pt-1 text-sm  font-medium  border-b-2`,
        nonFocusedClasses: ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`,
        focusedClasses: ` text-gray-900 border-indigo-500 `
    }

    // changeClass() {
    //     console.log("style changed");
    // }
    // onFocus={ this.state.classes = this.state.focusedClasses}
  render() {
    return (
            <>
                { this.state.navElements.map(el => <a  href={ el.ref } key={el.ref} onClick={ this.changeClass } className={ this.state.basicClasses + this.state.nonFocusedClasses } >{el.name}</a>) }
            </>
    )
  }
}
