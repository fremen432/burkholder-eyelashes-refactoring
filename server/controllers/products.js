import mongoose from "mongoose";
// import { products } from "../../client/src/data.js";
import Product from "../models/product.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        console.log(products);
        
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    const newProduct = new Product(product);

    try {
        await newProduct.save();

        // 201 means successful creation
        res.status(201).json(newProduct);
    } catch (error) {

        // 409 means client-side "Conflict"
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

    const updatedProduct = await ProductMessage.findByIdAndUpdate(_id, product, { new: true });

    res.json(updatedProduct);
}