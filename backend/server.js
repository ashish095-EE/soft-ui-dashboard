import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import authorRoutes from "./routes/author.route.js"

dotenv.config();
mongoose.connect('mongodb+srv://ashish_atom:nsdnfqQ0vUw4uWXT@cluster0.lmrt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("MongoDB Connected");
}).catch((err) =>{
    console.error(err);
    
});

const app = express();


// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api/authors",authorRoutes);





app.listen(3000, ()=> {
    console.log('Server running on port 3000');
  
});

//mongo db set up




