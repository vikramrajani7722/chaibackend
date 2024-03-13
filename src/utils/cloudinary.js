import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.ClOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload file in cloudinary
        const response = await cloudinary.uploader.upload(
            localFilePath, {
            resource_type: "auto"
        })

        // file has been uploaded successfully
        console.log(`File has been uploaded in cloudinary `, response.url);
        fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove the locally saved temporary file as the upload operation got failed
        return null;

    }
}

export {uploadOnCloudinary}