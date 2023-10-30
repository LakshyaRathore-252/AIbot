import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

import userRoutes from './routes/user.js';

// Instanced the server
const app = express();

// This will load env file
dotenv.config();

// parse application/json
app.use(express.json());

app.use(cors());

// Routes
app.use('/user', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
