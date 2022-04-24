export default function ProductCard(props){
  const { product, page, onAdd, index } = props;
  
  const handleAddToCart = (product) => () => onAdd(product);

  const handleUpdateProduct = (product) => {}
  const handleDeleteProduct = (product) => {}

  // product comes from the database!
  product.id = index;


  return (
    <div key={product.id} className="productCard box shadow-lg">

        <img
          src={product.imageSrc}
          alt={`Product ${product.name}`}
          className="productCard-image bg-gray-200 shadow-lg box"
        />

        <div className="flex items-stretch flex-col box w-full">

          <div className="productCard-innerWrapper ">
            <h3 className="mt-2 text-sm text-gray-700 box text-center ">
              <a href={product.href}>
                {product.productName}
              </a>
            </h3>

            <h4>Created by: {product.creatorName}</h4>

            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            <p className="productDescription text-xs p-1 mt-1 text-sm text-gray-500" >{product.description}</p>
          </div>

          <div className={"grid mb-2 " + (page == 'allProducts' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
            <button onClick={handleAddToCart(product)} className={"productCard-checkoutBtn box " + (page == 'allProducts' ? ' ' : ' hidden ')}>Add to Cart</button>
            <p className="flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
          </div>

          <div className="grid grid-cols-2">
            <button onClick={handleUpdateProduct(product)} className="update-button">Update</button>
            <button onClick={handleDeleteProduct(product)} className="delete-button">Delete</button>
          </div>

        </div>

      </div>
  )
}


    // switch (product.featured) {
    //   case true:
    //     return (
    //       <div key={product.id} className="productCard box">
    //         {/* Product Image */}
    //         <img
    //           src={product.imageSrc}
    //           alt={product.imageAlt}
    //           // className="productCard-image object-center object-cover bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80"
    //           className="productCard-image bg-gray-200 "
    //         />
    //         {/* Product Description */}
    //         <div className=" flex justify-between flex-col ">
    
    //           <div className="productCard-innerWrapper ">
    //             <h3 className="mt-2 text-sm text-gray-700 box h-12">
    //               <a href={product.href}>
    //                 <span className="absolute " />
    //                 {product.name}
    //               </a>
    //             </h3>
    //             <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    //           </div>
              
    //           <div className={"grid mt-1 " + (page == 'products' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
    //             <button onClick={addToCart} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg " + (page == 'products' ? ' ' : ' hidden')}>Add to Cart</button>
    //             <p className=" flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
    //           </div>
              
    //         </div>
    //       </div>
    //     )
    
    //   default:
    //     return (
    //       <div key={product.id} className="productCard box">
    //           {/* Product Image */}
    //           <img
    //             src={product.imageSrc}
    //             alt={`Product ${product.name}`}
    //             // className="productCard-image object-center object-cover bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80"
    //             className="productCard-image bg-gray-200 "
    //           />
    //           {/* Product Description */}
    //           <div className=" flex justify-between flex-col ">
    
    //             <div className="productCard-innerWrapper ">
    //               <h3 className="mt-2 text-sm text-gray-700 box text-center ">
    //                 <a href={product.href}>
    //                   {/* <span className="absolute " /> */}
    //                   {product.productName}
    //                 </a>
    //               </h3>
    //               <h4>Created by: {product.creatorName}</h4>
    //               <p className="mt-1 text-sm text-gray-500">{product.color}</p>
    //               <p className="productDescription text-xs p-1 mt-1 text-sm text-gray-500" >{product.description}</p>
    //             </div>
    
    //             <div className={"grid mb-2 " + (page == 'allProducts' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
    //               <button onClick={() => onAdd(product)} className={"productCard-checkoutBtn p-1 text-sm font-medium text-gray-900 box rounded-lg " + (page == 'allProducts' ? ' ' : ' hidden ')}>Add to Cart</button>
    //               <p className="flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
    //             </div>
    
    //           </div>
    
    //         </div>
    //     )
    // }
