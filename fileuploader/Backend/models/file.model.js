import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
        trim: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        enum: ['image', 'video', 'document'],
        required: true,
    }
})

export const Gallery = mongoose.model("Gallery", gallerySchema); 