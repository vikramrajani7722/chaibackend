import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
   
    // steps 
    // get user details from frontend
    // validation - not empty
    // check if user alreasy exists - username, email
    // check for images, check for avatar
    // upload them to cloudinary 
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {fullName, email, username, password} = req.body
    console.log("Email :", email);
});

export { registerUser }