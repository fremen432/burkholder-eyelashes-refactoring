// Node Module imports
import React, { useState, useEffect } from "react";
import { onAdd, onRemove } from "./assets/js/utils/onAdd-onRemove";

// use this to dispatch an action
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./state management/actions/products";
// import { addCartItem, removeCartItem } from './actions/cartItems'

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

import Login__COMP from "./Pages/SignIn_Login/LogIn";
import SignUp__COMP from "./Pages/SignIn_Login/SignUp";

import PAGE_Home from "./Pages/Homepage/PAGE_Home";
import PAGE_AllProducts from "./Pages/Products/PAGE_AllProducts";
import PAGE_Cart from "./Pages/Cart/PAGE_Cart";
import PAGE_AddProduct from "./Pages/AddProducts/PAGE_AddProduct.jsx";

// CSS imports
import "./assets/css/main/App.css";
import "./assets/css/utils/MediaQueries.css";
import "./assets/css/utils/Animations.css";

export default function App() {
	const page = useSelector((state) => state.pageMethods);

	const dispatch = useDispatch();

	// every time the 'dispatch' state is changed, it will call () => dispatch(getProducts()) to get all products
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className="App ">
			<NavBar page={page} />

			<div className="Body_Content box ">
				{page == "home" ? (
					<PAGE_Home />
				) : page == "allProducts" ? (
					<PAGE_AllProducts />
				) : page == "cart" ? (
					<PAGE_Cart />
				) : page == "addProduct" ? (
					<PAGE_AddProduct />
				) : page == "login" ? (
					<Login__COMP />
				) : page == "signUp" ? (
					<SignUp__COMP />
				) : (
					<PAGE_Home />
				)}
				<Footer />
			</div>
		</div>
	);
}
