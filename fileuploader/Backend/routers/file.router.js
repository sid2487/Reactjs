import express from "express";
import upload from "../middleware/multer.js";
import { fetchFiles, fileUpload } from "../controllers/file.controller.js";

const router = express.Router();

router.post("/upload", upload.single('file'), fileUpload);
router.get("/fetchfiles", fetchFiles);

export default router;