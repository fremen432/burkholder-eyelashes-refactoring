import { ShoppingCartIcon } from '@heroicons/react/outline'

export default function CartIcon(props) {
    const { cartItems, setPageMethods, onAdd, onRemove } = props;

    return (
        <div className="COMPONENT__HeaderCartIcon_Container" >
            <a 
            href="/#Cart" 
            onClick={setPageMethods.cart} 
            className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <ShoppingCartIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="cart-item-counter" >{ cartItems.length }</span>
            </a>
        </div>
    )
}