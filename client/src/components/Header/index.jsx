import React, { Fragment, useState } from 'react'

// Importing components
import NavEl from './sub-comopnents/navEl'
import Logo from './sub-comopnents/logo'
import HamburgerIcon from './sub-comopnents/HamburugerIcon'
import CartIcon from './sub-comopnents/CartIcon'

// import { useDispatch } from 'react-redux'

export default function Header(props) {
  const { 
    page, 
    setPageMethods, 
    // cartItems,
    // onAdd,
    // onRemove
   } = props; 
  const [mobileNavOpen, setMobileNavOpen] = useState('start');

  const mobileNavToggle = () => {
    switch (mobileNavOpen) {
      case 'start':
        return setMobileNavOpen(false);
      case true:
        return setMobileNavOpen(false);
      case false:
        return setMobileNavOpen(true);
      default:
        break;
    }
    // if (mobileNavOpen == 'start') return setMobileNavOpen(false)
    // if (mobileNavOpen == true) return setMobileNavOpen(false)
    // if (mobileNavOpen == false) return setMobileNavOpen(true)
  }

  return (
    <div className="COMPONENT__Header cbm-border-bottom">
      <div className="Header__Main ">
        <div id="nav" className="Header_Left flex px-2 lg:px-0 ">

          {/* <Logo setPageMethods={setPageMethods} /> */}
          <Logo />

          <NavEl 
          page={page} 
          setPageMethods={setPageMethods} 
          mobileNavToggle={mobileNavToggle} 
          mobileNavOpen={mobileNavOpen} 
          isMobileNav={false} 
          />

        </div>
        <div id="header-controls" className="Header_Right ">

          {/* <SearchBar /> */}
          {/* <UserIconAndNotificationBell /> */}

          <CartIcon 
          setPageMethods={setPageMethods} 
          // isMobileNav={false} 
          // cartItems={cartItems} 
          // onAdd={onAdd} 
          // onRemove={onRemove} 
          />

          <HamburgerIcon 
          mobileNavOpen={mobileNavOpen} 
          mobileNavToggle={mobileNavToggle} 
          />

        </div>
      </div>
        <NavEl 
        page={page} 
        setPageMethods={setPageMethods} 
        mobileNavOpen={mobileNavOpen} 
        isMobileNav={true} 
        mobileNavToggle={mobileNavToggle}
        />
    </div>
  )
}
