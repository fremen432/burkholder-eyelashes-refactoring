// Make sure your ipAddress is added to mongodb cloud atlas
// if you have vpn on it doesn't connect

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/products.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// localhost:5000/products
app.use('/products', productRoutes);

// const MongoDB_UserName_1 = 'burkholder_eyelashes_user1'
// const MongoDB_Password_1 = '1iQsMDRr4dk3BGhe'

// const MongoDB_UserName_2 = 'cbm123'
// const MongoDB_Password_2 = 'cbm123'

// const CONNECTION_URL_1 = `mongodb+srv://burkholder_eyelashes_user1:${MongoDB_Password}@cluster0.kqcsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const CONNECTION_URL = `mongodb+srv://${MongoDB_UserName_2}:${MongoDB_Password_2}@cluster0.kqcsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));
