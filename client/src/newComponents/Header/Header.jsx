import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

// Importing components
import NavEl from './NavEl.jsx'
import Logo from './logo'
import HamburgerIcon from './HamburugerIcon'


import SearchBar from './searchBar'
import UserIconAndNotificationBell from './userProfile'
import CartIcon from './cartIcon'

// import MobileNavEl from './mobileNavEl'

const mobileNavClasses = `block py-2 pl-3 pr-4 text-base font-medium border-l-4`
const focusedMobileNav = `text-indigo-700 border-indigo-500 bg-indigo-50`
const UnFocusedMobileNav = `text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800`

export default function Header(props) {
  const { page, setPageMethods, cartItems, onAdd, onRemove } = props; 
  const [mobileNavOpen, setMobileNavOpen] = useState('start');

  const mobileNavToggle = () => {
    if (mobileNavOpen == 'start') return setMobileNavOpen(false)
    if (mobileNavOpen == true) return setMobileNavOpen(false)
    if (mobileNavOpen == false) return setMobileNavOpen(true)
  }



  // set isMobileView to true if window width <= { someWidth }.
  return (
    <div className="COMPONENT__Header cbm-border-bottom">
      <div className="Header__Main ">
        <div id="nav" className="Header_Left flex px-2 lg:px-0 ">

          <Logo setPageMethods={setPageMethods} />

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
          cartItems={cartItems} 
          setPageMethods={setPageMethods} 
          cartItems={cartItems} 
          onAdd={onAdd} 
          onRemove={onRemove} 
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
