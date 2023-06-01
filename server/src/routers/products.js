import express from 'express'
import { getAll, get, create, remove, update } from '../controllers/products'
import cloudinary from '../config/cloudinary'
import multer from 'multer'
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

router.get('/products', getAll)
router.get(`/products/:id`, get)
router.post('/products',upload.single('image'), create)
router.patch('/products/:id', update)
router.delete('/products/:id', remove)
export default router