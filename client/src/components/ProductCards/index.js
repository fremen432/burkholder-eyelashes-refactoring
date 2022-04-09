import { products } from "../../data"

const addToCart = () => alert('added to cart')

  export default function ProductCards(props) {
    const { page } = props;

    return (
        <>
          {/* Create a product card for each product in products array */}
          {products.map(product => (
            <div key={product.id} className="productCard box">
              {/* Product Image */}
              <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className=" flex justify-between flex-col ">
                <div className="productCard-innerWrapper  ">
                  <h3 className="mt-2 text-sm text-gray-700 box h-12">
                    <a href={product.href}>
                      <span className="absolute " />
                      {/* {page} */}
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                
                <div className={"grid mt-1 " + (page == 'products' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
                  <button onClick={addToCart} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg" + (page == 'products' ? ' ' : ' hidden')}>Add to Cart</button>
                  <p className=" flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
                </div>
              </div>
            </div>
          ))}  
      </>
    )
  }