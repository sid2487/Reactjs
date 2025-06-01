import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import uploadRoutes from "./routers/file.router.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));

app.use("/api", uploadRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
