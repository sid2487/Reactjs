import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import { Gallery } from "../models/file.model.js";

export const fileUpload = async (req, res) => {
    try {
        const { caption } = req.body;

        const localFilePath = req.file?.path;

        if(!localFilePath){
            return res.status(400).json({ error: "No file uploaded" });
        }

        console.log("Uploading file from:", localFilePath);


        const result = await cloudinary.uploader.upload(localFilePath, {
            folder: 'user_uploads', // files will save on cloudinary with this folder name
            resource_type: 'auto', // auto detect image, video, pdf, etc.
            timeout: 60000,
        });

        // remove local file path after uploading 
        fs.unlinkSync(localFilePath);
        console.log("Local file deleted", localFilePath)

        // determine file type
        const mime = req.file.mimetype;
        let fileType;
        if(mime.startsWith("image/")){
            fileType = "image";
        } else if(mime.startsWith("video/")){
            fileType = "video";
        } else{
            fileType = "document";
        }

        const galleryDoc = await Gallery.create({
            caption,
            fileUrl: result.secure_url, 
            fileType
        });

        res.status(201).json({ message: "Uploaded Successfully", galleryDoc });
        
    } catch (error) {
        console.error("upload error: ",error);
        res.status(500).json({ error: error?.message || "File upload failed", details: error });
    }
};

export const fetchFiles = async (req, res) => {
    try {
        const files = await Gallery.find().sort({ createdAt: -1 });
        res.status(201).json({ success: true, files });
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch files "});
    }
};