import React from 'react'
import { products } from "../assets/js/data"
import ProductCard from './ProductCard';

export default function FeaturedProducts(props) {
  const { page } = props;
  return (
      <div id="Featured" className="section SECTION__Products max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">Featured Products</h2>
        </div>

        {/* Products container */}
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4  lg:gap-y-0 lg:gap-x-8">

          {/* Create a product card for each featured product in products array */}
          { products.filter( product => product.featured )
            .map((product, index) => (
            <ProductCard
             key={index} 
             index={index} 
             product={product}
             page={page} 
             />
          ))}  


          {/* <ProductCards page={page} /> */}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Show More<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
  )
}