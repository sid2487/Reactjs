import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/config/db.js";

dotenv.config();
connectDB();


const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));