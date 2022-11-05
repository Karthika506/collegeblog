import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
//acVwDtrqwyt8hNFm

app.use('/posts', postRoutes);

//const CONNECTION_URL = 'mongodb+srv://Karthika:varshini@cluster0.cg7l4h1.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () =>console.log(`server running on port: ${PORT}`)) )
    .catch((error) => console.log(error.message) );



//https://wwww.mongodb.com/cloud/atlas

//mongoose.set('useFindAndModify', false);
