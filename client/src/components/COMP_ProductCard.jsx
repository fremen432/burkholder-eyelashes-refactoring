export default function ProductCard(props){
  const { product, page, onAdd, index, featured } = props;
  const addToCart = () => alert('added to cart')

  product.id = index;

  switch (product.featured) {
    case true:
      return <div key={product.id} className="productCard box">
        {/* Product Image */}
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80"
        />
        {/* Product Description */}
        <div className=" flex justify-between flex-col ">

          <div className="productCard-innerWrapper  ">
            <h3 className="mt-2 text-sm text-gray-700 box h-12">
              <a href={product.href}>
                <span className="absolute " />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          
          <div className={"grid mt-1 " + (page == 'products' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
            <button onClick={addToCart} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg " + (page == 'products' ? ' ' : ' hidden')}>Add to Cart</button>
            <p className=" flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
          </div>
          
        </div>
      </div>
  
    default:
      return <div key={product.id} className="productCard m-1 box">
          {/* Product Image */}
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80"
          />
          {/* Product Description */}
          <div className=" flex justify-between flex-col ">

            <div className="productCard-innerWrapper ">
              <h3 className="mt-2 text-sm text-gray-700 box text-center ">

                <a href={product.href}>
                  <span className="absolute " />
                  {product.name}
                </a>
              </h3>

              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              {/* <p className="productDescription" >{product.description}</p> */}
              <p className="productDescription text-xs p-1 mt-1 text-sm text-gray-500" >{product.description}</p>
            </div>

            <div className={"grid mb-2 " + (page == 'allProducts' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
              <button onClick={() => onAdd(product)} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg " + (page == 'allProducts ' ? ' ' : ' hidden ')}>Add to Cart</button>
              <p className="flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
            </div>

          </div>
        </div>
  }
}
