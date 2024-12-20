import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import  connection  from './config/connectDB.js';
import userRouter from './routes/userRouter.js';
import questionRouter from "./routes/questionRouter.js"
import path from "path"

import cors from 'cors';




// Load environment variables from .env file
dotenv.config();

//creating an object of express
const app = express();

// Configure CORS with the desired options
const corsOptions = {
    origin: "http://localhost:3050", // Allow requests from this origin
    methods: ["GET", "POST"],       // Allow only GET and POST requests
  };
  
  // Use CORS middleware with the options
  app.use(cors(corsOptions))

//The cookieParser middleware reads cookies from the incoming requests and makes them accessible via req.cookies
app.use(cookieParser());

//converts the request body from JSON format into a JavaScript object, allowing you to easily access the data using req.body
app.use(express.json());

// It handles form submissions where data is sent as key-value pairs (like from an HTML form)
app.use(express.urlencoded({ extended: true }));


// ---- code for deployment ----//
if (process.env.NODE_ENV === 'production') {
    const dirPath = path.resolve();

    app.use(express.static("./frontend/dist"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirPath, "./frontend/dist","index.html"))
    })
}

// Use a default port if not provided in the environment variables
const PORT = process.env.BACKEND_URL || 4000;


// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


//define signup route
app.use("/api/v1/user", userRouter)
app.use("/api/v1/question", questionRouter)

//Establish connection with database
connection()

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

export default app;