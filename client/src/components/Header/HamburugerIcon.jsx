import React, { useEffect, useState } from 'react'

export default function HamburgerIcon(props) {
    const { mobileNavOpen, mobileNavToggle } = props;
    const [isRotated, setIsRotated] = useState('start')
    
    const [isRotatedLine1, setIsRotatedLine1] = useState('start')
    const [isRotatedLine2, setIsRotatedLine2] = useState('start')
    const [isRotatedLine3, setIsRotatedLine3] = useState('start')

    useEffect(() => {
        if (mobileNavOpen == 'start') return console.log("mobileNavOpen = 'start'")
        if (mobileNavOpen == true) return rotateToggle();
        if (mobileNavOpen == false) return rotateToggle();
    }, [mobileNavOpen]) 

    const rotateToggle = () => {

        switch (isRotated) {
            case 'start':
                setIsRotated(true);
                setIsRotatedLine1('rotate_IN_Line1');
                setIsRotatedLine2('rotate_IN_Line2');
                setIsRotatedLine3('rotate_IN_Line3');
                break;

            case false:
                setIsRotated(true);
                setIsRotatedLine1('rotate_IN_Line1');
                setIsRotatedLine2('rotate_IN_Line2');
                setIsRotatedLine3('rotate_IN_Line3');
                break;

            case true:
                setIsRotated(false);
                setIsRotatedLine1('rotate_OUT_Line1');
                setIsRotatedLine2('rotate_OUT_Line2');
                setIsRotatedLine3('rotate_OUT_Line3');
                break;

            default: break;
        }
    }

    return (
        <a className={"HamburgerIcon box " } onClick={mobileNavToggle}>
            <span className={ `HamburgerLine Line1 ${isRotatedLine1}` } ></span>
            <span className={ `HamburgerLine Line2 ${isRotatedLine2}` } ></span>
            <span className={ `HamburgerLine Line3 ${isRotatedLine3}` } ></span>
        </a>
    )
}
