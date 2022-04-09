import React from 'react'

import Header from '../newComponents/Header'
import Footer from '../newComponents/Footer'

import Cart__COMP from '../newComponents/Cart__COMP'

export default function Cart() {
  return (
    <div className="Cart__PAGE">
        <Header/>
        <div className="Cart_Body">
            <Cart__COMP/>
        </div>
        <Footer/>
    </div>
  )
}
