import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/");
    },

    filename: function(req, file, cb){
        const ext = path.extname(file.originalname);  // takes the file path like ".jpg"
        const uniqueName = `${file.fieldname}-${Date.now()}${ext}`;
        cb(null, uniqueName);
    },
});

const fileFilter = (req, file, cb) => {
    cb(null, true); // accept all files
};

const upload = multer({ storage, limits:{ fileSize: 5 * 1024 * 1024} ,fileFilter });
export default upload;