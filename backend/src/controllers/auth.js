import { HttpError } from "../models/errorModel.js";
import jwt from "jsonwebtoken";
import {Admin} from "../models/admin.js";
import { genSalt,hash,compare } from "bcrypt";
import { configDotenv } from "dotenv";
configDotenv();

export const registerAdmin = async (req, res, next) => {
    //steps to register a people.
    //first take all the data according to the model admin model.
    //extract the admin data from the json file.
    //also check is there not an existing email in a database.
    //validate the data.
    //validate the password.
    //hash his password .
    //store in database.
    try {
    const  {name, email, password, state, city, pincode} = req.body;
    if(!name || !email || !password || !state || !city || !pincode){
        return next(new HttpError(400, "All fields are required"));    
    }
    if(!email.includes("@")){
        return next(new HttpError(401, "Invalid Email"));
    }
    const existingAdmin = await Admin.findOne({email});
    if(existingAdmin){
        return next(new HttpError(401, "Email already exists"));
    }
    if(password.length<6) {
        return next(new HttpError(401, "Password must be atleast 6 characters long."));
    }
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const newAdmin = await Admin.create({
        name,email, password: hashedPassword, state, city, pincode
    })
    res.status(200).json(newAdmin)
     
        
    } catch (error) {
        // Handle any errors
        console.error("Error registering admin:", error);
        return next(new HttpError(500, "Internal Server Error"));
        
    }
    


    
};
export const loginAdmin = async (req, res,next) => {
  
    // Here we have to check user email or mobile against the provided password.
    // If provided info is correct, then we have to generate a token & return to the client.
    // So initially we will check for email or mobile in our database, 
    //if user exist, then will call bcrypt.compare(), function of bcryptjs.
    // Then we will call jsonwebtoken for token & send back to client.
try {
    const {email,password} = req.body
    if(!email || !password){
        return next(new HttpError(422, "All fields are required"));
    }
    const existingAdmin = await Admin.findOne({email});
     
    if(!existingAdmin){
        return next(new HttpError(401, "Email doesnot exist."));
    }

    const isPasswordCorrect = await compare(password,existingAdmin.password)
    if(!isPasswordCorrect){
        return next(new HttpError(401, "Password is incorrect."));
    }

    //jwt.sign({payload},SECRET_KEY,expiresIN)
    const generateToken = jwt.sign({
        id: existingAdmin._id,
        name: existingAdmin.name,
        email: existingAdmin.email
    },process.env.JWT_SECRET,{expiresIn:"30d"})

    res.status(200).json({
        status:"Login Successfull.",data:{token: generateToken, id: existingAdmin._id, name: existingAdmin.name, email: existingAdmin.email}})

    
        
    
        
    
    
} catch (error) {
    console.error("Error in login admin:", error);
    return next(new HttpError(500, "Login Failed. Internal Server Error."));
    
}
} 
export const editAdminDetails = async (req, res,next) => {
    try {
        const { name, email, currentPassword, newPassword,newConfirmPassword, state, city, pincode } = req.body;
        if(!name || !email || !currentPassword || !newPassword || !newConfirmPassword  || !state || !city || !pincode){
            return next(new HttpError(400, "All fields are required"));
        }
        //get current user details from the database.
        const existingAdmin = await Admin.findById(req.user.id);
        if (!existingAdmin) {
            return next(new HttpError(401, "User not found"));
        }

        //check if email is changed or not.

        if(email !=existingAdmin.email)
        {
            return next(new HttpError(401, "Email cannot be changed"));
        }
        //pasword check if current password is correct or not.
        const validatePassword  = await compare(currentPassword, existingAdmin.password);
        if (!validatePassword) {
            return next(new HttpError(401, "Current password is incorrect"));
        }
        if (newPassword !== newConfirmPassword) {
            return next(new HttpError(401, "Passwords do not match"));
        }

        //hash new password.
        const salt = await genSalt(10);
        const hashedPassword = await hash(newPassword, salt);
        const updatedAdmin = await Admin.findByIdAndUpdate(
            existingAdmin._id,
            { name, email, password: hashedPassword, state, city, pincode },
            { new: true }
        );
        res.status(200).json(updatedAdmin);
        
    } catch (error) {
        console.error("Error in editing admin details:", error);
        return next(new HttpError(500, "Internal Server Error"));
        
    }
};

export const getAdmin = async (req, res) => {
    res.send("Get Admin by id");
};
export const getAllAdmins = async (req, res) => {
    res.send("Get All Admins");
}



