// import express from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const MongoDB_UserName1 = 'burkholder_eyelashes'
const MongoDB_Password1 = 'Hannah38'

const MongoDB_UserName2 = 'burkholder_eyelashes_user1'
const MongoDB_Password2 = '1iQsMDRr4dk3BGhe'

const CONNECTION_URL = `mongodb+srv://${MongoDB_UserName1}:${MongoDB_Password1}@cluster0.bfmpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTechnology: true })
    // .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    // .catch((error) => console.log(`${error} did not connect`));
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
