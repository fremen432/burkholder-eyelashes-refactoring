import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useState } from 'react';

function HeaderCart() {
    return(
        <div className="COMPONENT__HeaderCart">

        </div>
    )
}



export default function CartIcon(props) {
    const { cartItems, setPageMethods, onAdd, onRemove } = props;

    const [isOpen, setIsOpen] = useState('start');

    const isOpen_Toggle = () => {
        console.log('headerCart')

        // isOpen == false ? setIsOpen(true) : 
        // isOpen == true ? setIsOpen(false) :
        // setIsOpen(true)
    }

    return (
        <>
            {/* Open profile button */}
            <div className="COMPONENT__HeaderCartIcon_Container" >
                <a 
                href="/#Cart" 
                // onClick={setPageMethods.cart} 
                onClick={isOpen_Toggle} 
                className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <ShoppingCartIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="cart-item-counter" >{ cartItems.length }</span>
                </a>
                {/* <HeaderCart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                /> */}

            </div>
        </>
    )
}