// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connection from "./config/connectDB.js";
import userRouter from "./routes/userRouter.js";
import questionRouter from "./routes/questionRouter.js";
import path from "path";
import cors from "cors";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Configure CORS
const corsOptions = {
  origin: process.env.NODE_ENV === "production"
    ? "https://prepmonk.onrender.com"
    : "http://localhost:3050",
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes (define these **before** static file handling)
app.use("/api/v1/user", userRouter);
app.use("/api/v1/question", questionRouter);

// Connect to the database
connection();

// Static file serving (React frontend)
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static(path.join(dirPath, "./frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./frontend/dist", "index.html"));
  });
}

// Server setup
const PORT = process.env.BACKEND_URL || 4000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

export default app;
