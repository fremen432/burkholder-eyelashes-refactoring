// import ProductCards from '../components/ProductCards'
import ProductCards from '../ProductCards'

export default function ProductsComp(props) {
  const {page} = props;
  return (
      <div className="SECTION__Products max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">All Products</h2>
        </div>

        {/* Products container */}
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-4  lg:gap-y-0 lg:gap-x-8">
          <ProductCards page={page} />
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Show More<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
  )
}