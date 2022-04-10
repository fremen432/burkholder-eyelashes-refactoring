import React, { useState } from 'react'

import Header from '../newComponents/Header'
import Footer from '../newComponents/Footer'

import Login__COMP from '../newComponents/Login__COMP'
import SignUp__COMP from '../newComponents/SignUp__COMP'

export default function Login_SignUp() {
    const [login_OR_SignUp, setLogin_OR_SignUp] = useState('')

  return (
    <div className="Login_SignUp__PAGE">
        <Header/>
            <div className="Login_SignUp_Body">
                {login_OR_SignUp == 'login' ?
                <Login__COMP/> :
                <SignUp__COMP login_OR_SignUp={login_OR_SignUp} />
                }
            </div>
        <Footer/>    
    </div>
  )
}
