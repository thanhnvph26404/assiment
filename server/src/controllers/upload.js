import cloudinary from "../config/cloudinary";

export const uploadImage = async (req, res) => {

    try {
        console.log(req.body);
        console.log(req.file);
        // const result = await cloudinary.uploader.upload(file.path)

       
    } catch (error) {
        
    }
}