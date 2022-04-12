import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

export default function HamburgerIcon(props) {
    const { mobileNavLinksOpen, mobileNavLinksToggle } = props;
    const [animationOn , setAnimationOn] = useState('start')
    const [isFaded , setIsFaded] = useState('start')
    const [isRotated, setIsRotated] = useState('start')
    
    const [isRotatedLine1, setIsRotatedLine1] = useState('start')
    const [isRotatedLine2, setIsRotatedLine2] = useState('start')
    const [isRotatedLine3, setIsRotatedLine3] = useState('start')




    const fadeToggle = () => {
        console.log(isFaded);

        isFaded == 'fadeIN_full' ?
        setIsFaded('fadeOUT_full') :
        
        isFaded == 'fadeOUT_full' ?
        setIsFaded('fadeIN_full') :
        setIsFaded('fadeOUT_full')
    }

    const rotateToggle = () => {
        console.log(isRotated);

        if (isRotated == true){
            setIsRotated(false);
            setIsRotatedLine1('rotate_OUT_Line1');
            setIsRotatedLine2('rotate_OUT_Line2');
            setIsRotatedLine3('rotate_OUT_Line3');
        } else if (isRotated == false){
            setIsRotated(true);
            setIsRotatedLine1('rotate_IN_Line1');
            setIsRotatedLine2('rotate_IN_Line2');
            setIsRotatedLine3('rotate_IN_Line3');
        } else {
            setIsRotated(true);
            setIsRotatedLine1('rotate_IN_Line1');
            setIsRotatedLine2('rotate_IN_Line2');
            setIsRotatedLine3('rotate_IN_Line3');
        }

        // isRotated == 'rotate45_IN' ?
        // setIsRotated('rotate45_OUT') :
        
        // isRotated == 'rotate45_OUT' ?
        // setIsRotated('rotate45_IN') :
        // setIsRotated('rotate45_IN')
    }

    // const rotateToggle = () => {
    //     console.log(isRotated);

    //     isRotated == 'rotate45_IN' ?
    //     setIsRotated('rotate45_OUT') :
        
    //     isRotated == 'rotate45_OUT' ?
    //     setIsRotated('rotate45_IN') :
    //     setIsRotated('rotate45_IN')
    // }


    return (
        <a className={"HamburgerIcon box " } onClick={rotateToggle}>
            <span className={"HamburgerLine Line1 " + (isRotatedLine1)} ></span>
            <span className={"HamburgerLine Line2 " + (isRotatedLine2)} ></span>
            <span className={"HamburgerLine Line3 " + (isRotatedLine3)} ></span>
        </a>
    )
}

// return (
//     <>
//         <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//             <span className="sr-only">Open main menu</span>
//             {/* If mobile menu is open, show 'X' icon. If mobile menu is closed, show hamburger 'menu' icon */}
//             {open ? (
//             <XIcon className="block w-6 h-6" aria-hidden="true" />
//             ) : (
//             <MenuIcon className="block w-6 h-6" aria-hidden="true" />
//             )}
//         </Disclosure.Button>
//     </>
// )
