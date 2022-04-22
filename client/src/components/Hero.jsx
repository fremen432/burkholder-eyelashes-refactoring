import React from 'react'

export default function Hero(props) {
    const { setPageMethods } = props;
    return (
        <div id="Hero" className="section SECTION_Hero topBottom_section relative bg-gray-900">
            {/* Hero Image */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
                src="https://cdn.shopify.com/s/files/1/0539/7102/6115/files/hero_img_2x_1101db36-e570-49ae-ab38-455ea9f412b1_1728x.png?v=1629399562s"
                alt=""
                className="w-full h-full object-center object-cover"
            />
            </div>

            {/* Dimming layer */}
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

            {/* Hero Text */}
            <div className="relative max-w-3xl mx-auto xxl:ml-56 py-32 px-6 flex flex-col items-start text-left sm:py-64 lg:px-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl uppercase">Become everyone's favorite lash artist</h1>
            <p className="mt-4 text-xl text-white">
                We make lashes your clients love. Stock up on lash essentials you can trust.
            </p>
            <a
                href="/#Products"
                onClick={setPageMethods.allProducts}
                className="mt-8 inline-block bg-white hover:bg-gray-100 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 uppercase"
            >
                Start Shopping
            </a>
            </div>
        </div>
    )
}
  