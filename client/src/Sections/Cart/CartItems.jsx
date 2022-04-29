import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'
import { products } from '../../assets/js/data'

import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../../actions/cartItems.js';

export function CartItems({ page, setPage }) {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems);

    const handleRemove = (item) => () => dispatch(removeCartItem(cartItems, item)) 

    const me = () => console.log(cartItems)

    return(
        <div className="COMPONENT__CartItems box">
          <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cartItems.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-24 h-24 rounded-md sm:w-48 sm:h-48 flex-shrink-0 box"
                    onClick={me}
                  />
  
                <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      <div className="flex mt-1 text-sm">
                        <p className="text-gray-500">{product.color}</p>
                        {product.size ? (
                          <p className="pl-4 ml-4 text-gray-500 border-l border-gray-200">{product.size}</p>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
  
                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label htmlFor={`quantity-${productIdx}`} className="">
                        Quantity, {product.name}
                      </label>

                      <div>{product.qty}</div>
                      <select
                        id={`quantity-${productIdx}`}
                        name={`quantity-${productIdx}`}
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value={1} >1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={8}>9</option>
                        <option value={8}>10</option>
                      </select>
  
                      <div className="absolute top-0 right-0">
                        <button onClick={handleRemove(product)} type="button" className="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Remove</span>
                          <XIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
  
                  <p className="flex mt-4 space-x-2 text-sm text-gray-700">
                    {product.inStock ? (
                      <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                    ) : (
                      <ClockIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
                    )}
  
                    <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
  }
