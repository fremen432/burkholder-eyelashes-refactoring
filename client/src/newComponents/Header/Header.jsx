import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

// Importing components
import NavEl from './navEl'
import Logo from './logo'
import MobileHamburgerBtn from './HamburugerIcon'
import HamburgerIcon from './HamburugerIcon'


import SearchBar from './searchBar'
import UserIconAndNotificationBell from './userProfile'
import CartIcon from './cartIcon'

// import MobileNavEl from './mobileNavEl'

const mobileNavClasses = `block py-2 pl-3 pr-4 text-base font-medium border-l-4`
const focusedMobileNav = `text-indigo-700 border-indigo-500 bg-indigo-50`
const UnFocusedMobileNav = `text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800`

function MobileNav(){
  return(
    <>

    </>
  )
}

export default function Header(props) {
  const { page, setPageMethods, cartItems, onAdd, onRemove } = props; 
  // const [isMobileView, setIsMobileView] = useState(true)
  const [mobileNavLinksOpen, setMobileNavLinksOpen] = useState(false);

  const mobileNavLinksToggle = () => {
    mobileNavLinksOpen == true ?
    setMobileNavLinksOpen(false) :

    mobileNavLinksOpen == false ?
    setMobileNavLinksOpen(true) :
    setMobileNavLinksOpen(false) 
  }

  // set isMobileView to true if window width <= { someWidth }.


  return (
    <div className="COMPONENT__Header cbm-border-bottom ">
      <div id="nav" className="Header_Left flex px-2 lg:px-0 ">
        <Logo setPageMethods={setPageMethods} />
        <NavEl page={page} setPageMethods={setPageMethods} />
      </div>
      <div id="header-controls" className="Header_Right ">
        {/* <SearchBar /> */}
        {/* <UserIconAndNotificationBell /> */}
        <CartIcon cartItems={cartItems} setPageMethods={setPageMethods} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <HamburgerIcon mobileNavLinksOpen={mobileNavLinksOpen} mobileNavLinksToggle={mobileNavLinksToggle} />
        {/* <MobileNav/> */}
      </div>
    </div>
  )
}
