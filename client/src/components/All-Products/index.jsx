import React, { useState } from 'react'
// import { products } from "../data"

// this is to keep track of the state
import { useSelector } from 'react-redux';

import ProductCard from '../../components/ProductCard';


export default function AllProducts() {

    // the 'state' parameter comes from the global react-redux 'store' property we defined in the application's index.js
    // the state.products comes from reducers index.js
    const products = useSelector( state => state.products)

    // this only returns { name, price, id } in browser
    // console.log(products);

    return (
        <div id="Products" className="COMPONENT__AllProducts max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">All Products</h2>
            </div>

            {/* Products container */}
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4  lg:gap-y-0 lg:gap-x-8">

                {products.map((product, index) => 
                    product.inStock ?
                    <ProductCard key={index} product={product} index={index} /> :
                    <></>
                )}

            </div>

            <div className="mt-8 text-sm md:hidden">
                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Show More<span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </div>
    )
}