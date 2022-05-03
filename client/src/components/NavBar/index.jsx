import React, { Fragment, useState } from 'react'

import './styles/styles.css'

// Importing components
import Logo from './sub-components/Logo'
import NavLinks from './sub-components/NavLinks'
import HamburgerIcon from './sub-components/Icon_Hamburger'
import CartIcon from './sub-components/Icon_Cart'

// import { useDispatch } from 'react-redux'

export default function NavBar() {
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
        <div className="NavBar cbm-border-bottom">

            <div className="DesktopView">
                <div id="Desktop_nav" className="Header_Left flex px-2 lg:px-0 ">

                    <Logo />

                    <NavLinks 
                    mobileNavToggle={mobileNavToggle} 
                    mobileNavOpen={mobileNavOpen} 
                    isMobileNav={false} 
                    />

                </div>
                <div id="Desktop_header-controls" className="Header_Right ">

                    {/* <SearchBar /> */}
                    {/* <UserIconAndNotificationBell /> */}
                    <CartIcon />

                </div>
            </div>

            <div className="MobileView">
                <div id="Mobile_nav" className="Header_Left flex px-2 lg:px-0 ">
                    <Logo />
                </div>
                <div id="Mobile_header-controls" className="Header_Right ">

                    <CartIcon />

                    <HamburgerIcon 
                    mobileNavOpen={mobileNavOpen} 
                    mobileNavToggle={mobileNavToggle} 
                    />

                </div>
                <NavLinks 
                mobileNavToggle={mobileNavToggle}
                mobileNavOpen={mobileNavOpen} 
                isMobileNav={true} 
                />
            </div>

        </div>
    )
}

