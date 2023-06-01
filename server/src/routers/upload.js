import express from 'express'
import cloudinary from '../config/cloudinary'
import multer from 'multer'
import { uploadImage } from '../controllers/upload'
const router = express.Router()
import {CloudinaryStorage} from 'multer-storage-cloudinary'



const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "assiment",
        format: ['jpg', 'png'],
    }
})

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage)

export default router