import React, { useState } from 'react'

export default function HamburgerIcon(props) {
    const { mobileNavLinksOpen, mobileNavToggle } = props;
    const [isRotated, setIsRotated] = useState('start')
    
    const [isRotatedLine1, setIsRotatedLine1] = useState('start')
    const [isRotatedLine2, setIsRotatedLine2] = useState('start')
    const [isRotatedLine3, setIsRotatedLine3] = useState('start')

    const rotateToggle = () => {
        console.log("isRotated = " + isRotated);
        console.log('mobileNavLinksOpen = ' + mobileNavLinksOpen)

        if (isRotated == true){
            mobileNavToggle();
            setIsRotated(false);
            setIsRotatedLine1('rotate_OUT_Line1');
            setIsRotatedLine2('rotate_OUT_Line2');
            setIsRotatedLine3('rotate_OUT_Line3');
        } else if (isRotated == false){
            mobileNavToggle();
            setIsRotated(true);
            setIsRotatedLine1('rotate_IN_Line1');
            setIsRotatedLine2('rotate_IN_Line2');
            setIsRotatedLine3('rotate_IN_Line3');
        } else {
            mobileNavToggle();
            setIsRotated(true);
            setIsRotatedLine1('rotate_IN_Line1');
            setIsRotatedLine2('rotate_IN_Line2');
            setIsRotatedLine3('rotate_IN_Line3');
        }
    }

    return (
        <a className={"HamburgerIcon box " } onClick={rotateToggle}>
            <span className={"HamburgerLine Line1 " + (isRotatedLine1)} ></span>
            <span className={"HamburgerLine Line2 " + (isRotatedLine2)} ></span>
            <span className={"HamburgerLine Line3 " + (isRotatedLine3)} ></span>
        </a>
    )
}