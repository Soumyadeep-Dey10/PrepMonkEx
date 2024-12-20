import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connection from './config/connectDB.js';
import userRouter from './routes/userRouter.js';
import questionRouter from './routes/questionRouter.js';
import path from 'path';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Determine the environment (development or production)
const isProduction = process.env.NODE_ENV === 'production';

// Configure CORS for both local and production
const corsOptions = {
  origin: isProduction
    ? 'https://prepmonk-five.vercel.app' // Production URL
    : 'http://localhost:3050', // Development URL
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Deployment code for serving frontend in production
if (isProduction) {
  const dirPath = path.resolve();
  app.use(express.static(path.join(dirPath, './frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirPath, './frontend/dist', 'index.html'));
  });
}

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/question', questionRouter);

// Database connection
connection();

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

export default app;
