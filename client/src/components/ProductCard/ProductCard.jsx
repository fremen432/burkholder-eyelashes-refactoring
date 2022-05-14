import "./style/style.scss";

import { useSelector, useDispatch } from "react-redux";
import {
	addCartItem,
	removeCartItem,
} from "../../state management/actions/cartItems.js";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product, index }) {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems);

	const handleAddToCart = (product) => () =>
		dispatch(addCartItem(cartItems, product));

	const handleDeleteProduct = (product) => () =>
		dispatch(removeCartItem(cartItems, product));

	const handleUpdateProduct = (product) => {};

	// product comes from the database!
	product.id = index;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				// image="/static/images/cards/contemplative-reptile.jpg"
				image={product.imageSrc}
				alt={`Product ${product.name}`}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.productName}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					id="addToCart"
					onClick={handleAddToCart(product)}
					size="small"
				>
					Add To Cart
				</Button>
				<Button
					id="updateCartItem"
					onClick={handleUpdateProduct(product)}
					size="small"
				>
					Update
				</Button>
				<Button
					id="deleteCartItem"
					onClick={handleDeleteProduct(product)}
					size="small"
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}

// -- OLD CARD DESIGN --

// return (
//   <div key={product.id} className="productCard box shadow-lg">

//     <img
//       src={product.imageSrc}
//       alt={`Product ${product.name}`}
//       className="productCard-image shadow-lg box"
//     />

//     {/* <div className="flex items-stretch flex-col box"> */}
//     <div className=" box">

//       <div className="productCard-innerWrapper ">
//         <h3 className="mt-2 text-sm text-gray-700 box text-center ">
//           <a href={product.href}>
//             {product.productName}
//           </a>
//         </h3>

//         <h4>Created by: {product.creatorName}</h4>

//         <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//         <p className="productDescription text-xs p-1 mt-1 text-sm text-gray-500" >{product.description}</p>
//       </div>

//       <div className={"grid mb-2 " + (page == 'allProducts' ? 'grid-cols-2 ' : 'grid-cols-1 ')}>
//         <button onClick={handleAddToCart(product)} className={"productCard-checkoutBtn box " + (page == 'allProducts' ? ' ' : ' hidden ')}>Add to Cart</button>
//         <p className="flex justify-end items-center text-sm font-medium text-gray-900 text-right box">{product.price}</p>
//       </div>

//       <div className="grid grid-cols-2">
//         <button onClick={handleUpdateProduct(product)} className="update-button">Update</button>
//         <button onClick={handleDeleteProduct(product)} className="delete-button">Delete</button>
//       </div>

//     </div>

//   </div>
// )
