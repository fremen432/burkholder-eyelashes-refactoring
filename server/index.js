import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';

const app = express();

// localhost:5000/products
app.use('/products', productRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const MongoDB_UserName = 'burkholder_eyelashes_user1'
const MongoDB_Password = '1iQsMDRr4dk3BGhe'

const CONNECTION_URL = `mongodb+srv://burkholder_eyelashes_user1:${MongoDB_Password}@cluster0.kqcsg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));
