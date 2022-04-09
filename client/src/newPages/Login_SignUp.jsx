import React from 'react'

import Header from '../newComponents/Header'
import Footer from '../newComponents/Footer'

import Login__COMP from '../newComponents/Login__COMP'
import SignUp__COMP from '../newComponents/SignUp__COMP'

export default function Login_SignUp() {
  return (
    <div className="Login_SignUp__PAGE">
        <Header/>
            <div className="Login_SignUp_Body">
                <SignUp__COMP/>
                {/* <Login__COMP/> */}
            </div>
        <Footer/>    
    </div>
  )
}
