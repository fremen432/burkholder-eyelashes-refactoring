import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    href: String,
    price: String,
    color: String,
    inStock: Boolean,
    size: String,
    imageSrc: String,
    imageAlt: String,
    featured: Boolean
})

const Product = mongoose.model('Product', productSchema);

export default Product;

//    {
//     name: 'Volume Adhesive',
//     href: '#',
//     price: '$40.00',
//     color: 'Clear',
//     inStock: true,
//     size: 'Small',
//     imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
//     imageAlt: "",
//     featured: true
//   },
