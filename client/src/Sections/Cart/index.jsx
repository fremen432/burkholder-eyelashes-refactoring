import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'
import { CartItems } from './CartItems';

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const onCheckout = () => alert('checkout complete');

  return (
    <div id="Cart" className="COMPONENT__Cart_Body SECTION__SinglePage box">
      <div className="bg-white">
        <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          {
            // cartItems == 0 ? 
            // <p>Your cart is empty</p> :

            <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">

              {/* CartItems List */}
              <section className="SECTION__CartItems lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <CartItems cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
              </section>

              {/* Order summary */}
              <section className="SECTION__OrderSummary px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5" >
                <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <a href="#" className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Learn more about how shipping is calculated</span>
                        <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a href="#" className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Learn more about how tax is calculated</span>
                        <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">$8.00</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">$112.00</dd>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={onCheckout}
                    // type="submit"
                    className="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
              </section>

            </form>
            
          }
        </div>
      </div>
    </div>
  )
}
