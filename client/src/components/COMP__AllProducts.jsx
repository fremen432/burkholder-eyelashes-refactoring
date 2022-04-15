import React, { useState } from 'react'
// import { products } from "../data"

import { useSelector } from 'react-redux';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

function ProductCard(props){
  const { product, page, onAdd, index } = props;

  product.id = index;
  return(
    <div key={product.id} className="productCard m-1 box">
      {/* Product Image */}
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="w-full h-full object-center object-cover bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80"
      />
      {/* Product Description */}
      <div className=" flex justify-between flex-col ">

        <div className="productCard-innerWrapper  ">
          <h3 className="mt-2 text-sm text-gray-700 box text-center">
          
            <a href={product.href}>
              <span className="absolute " />
              {product.name}
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          {/* <p className="productDescription" >{product.description}</p> */}
          <p className="productDescription text-xs p-1 mt-1 text-sm text-gray-500" >{description}</p>
        </div>
        
        <div className={"grid mb-2 " + (page == 'allProducts' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
          <button onClick={() => onAdd(product)} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg" + (page == 'allProducts' ? ' ' : ' hidden')}>Add to Cart</button>
          <p className=" flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
        </div>
        
      </div>
  </div>
)
}

export default function AllProducts(props) {

    // the state.products comes from reducers index.js
    const products = useSelector((state) => state.products)
    console.log(products);

    const { page, onAdd, onRemove } = props;
    return (
        <div id="Products" className="COMPONENT__AllProducts max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">All Products</h2>
            </div>

            {/* Products container */}
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4  lg:gap-y-0 lg:gap-x-8">

              {products.map((product, index) => 
                <ProductCard key={index} product={product} page={page} onAdd={onAdd} index={index} />
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