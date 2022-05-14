import React, { useState } from "react";
// import FileBase from 'react-file-base64';
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createProduct } from "../state management/actions/products";

import toggleSwitch from "./toggle-switch/toggle-switch";

export default function Form() {
	const [productData, setProductData] = useState({
		creatorName: "Clayton",
		productName: "",
		description: "",
		price: "",
		selectedFile: "",
		featured: false,
		inStock: true,
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		// e.preventDefault();

		dispatch(createProduct(productData));
		window.location.href = "/Add-Product";

		// product data object is looking correct in browser console
		// console.log(productData);
	};
	const clear = (e) => {
		e.preventDefault();
		console.log("clear");
	};

	// const getFiles = (files) => this.setState

	return (
		<div id="Add-Product" className="COMPONENT__AddProduct ">
			<form
				className="inputProduct-form box"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h1 className="titleBasic">Insert a Product!</h1>

				<div className="form-pair">
					<p className="input-label">Creator Name</p>
					<input
						id="product-Name"
						type="text"
						value={productData.creatorName}
						onChange={(e) =>
							setProductData({
								...productData,
								creatorName: e.target.value,
							})
						}
					/>
				</div>

				<div className="form-pair">
					<p className="input-label">Product Name</p>
					<input
						id="product-Name"
						type="text"
						value={productData.productName}
						onChange={(e) =>
							setProductData({
								...productData,
								productName: e.target.value,
							})
						}
					/>
				</div>

				<div className="form-pair">
					<p className="input-label">Product Description</p>
					<input
						id="product-description"
						type="text"
						value={productData.description}
						onChange={(e) =>
							setProductData({
								...productData,
								description: e.target.value,
							})
						}
					/>
				</div>

				<div className="form-pair">
					<p className="input-label">Product Price</p>
					<input
						id="product-price"
						type="text"
						value={productData.price}
						onChange={(e) =>
							setProductData({
								...productData,
								price: e.target.value,
							})
						}
					/>
				</div>

				<div className="form-pair">
					<p className="input-label">
						Is product currently in-stock?
					</p>
					<input
						id="product-price"
						type="checkbox"
						checked
						value={productData.inStock}
						onChange={(e) =>
							setProductData({
								...productData,
								inStock: e.target.value,
							})
						}
					/>
				</div>

				<div className="form-pair">
					<p className="input-label">Product Image</p>
					<FileBase
						id="product-image"
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setProductData({ ...productData, imageSrc: base64 })
						}
					/>
				</div>

				<br />
				<button className="BTN__Indigo" type="submit">
					SUBMIT
				</button>

				<br />
				<button className="BTN__Clear" onClick={(e) => clear(e)}>
					CLEAR
				</button>
			</form>
		</div>
	);
}

{
	/*
    
    simple form 

    {
        productName,
        productDescription
        productPrice, 
    }
    

    <div id="Add-Product" >
        <form className="inputProduct-form" onSubmit={handleSubmit()}>
            
            <h1 className="titleBasic box">Insert a Product!</h1>

            <div className="form-pair" >
                <p className="input-label">Product Name</p>
                <input id='product-Name' type="text" />
            </div>

            <div className="form-pair" >
                <p className="input-label">Product Description</p>
                <input id='product-description' type="text" />
            </div>

            <div className="form-pair" >
                <p className="input-label">Product Price</p>
                <input id='product-price' type="text" />
            </div>

            <input className="btnStyle" type="submit" />

        </form>
    </div>

    */
}
{
	/*

        full form

        <div id="Add-Product" >
            <form className="inputProduct-form" onSubmit={handleSubmit()}>
                <h1 className="titleBasic box">Insert a Product!</h1>
                <div className="form-pair" >
                    <p className="input-label">Product Name</p>
                    <input id='product-Name' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Href</p>
                    <input id='product-href' type="text" />
                </div>

                {
                // <div>
                //     <!-- click here to choose file -->
                //     <input type="file " name="files[] " id="files " />
                //     <!-- click here to upload file -->
                //     <input type="hidden " name="url " id="url " />
                //     <button type="button " onclick={ uploadImage }>Upload Image</button>
                // </div>
                }

                <div className="form-pair" >
                    <p className="input-label">Product Price</p>
                    <input id='product-price' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product Color</p>
                    <input id='product-color' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product inStock</p>
                    <input id='product-inStock' type="checkbox" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product Size</p>
                    <input id='product-size' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product imageSrc</p>
                    <input id='product-imageSrc' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product imgAlt</p>
                    <input id='product-imageAlt' type="text" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product Featured</p>
                    <input id='product-featured' type="checkbox" />
                </div>
                <div className="form-pair" >
                    <p className="input-label">Product Description</p>
                    <input id='product-description' type="text" />
                </div>
                <input className="btnStyle" type="submit" />
            </form>
        </div>
    */
}
