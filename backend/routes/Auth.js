// import express from 'express'
// import { Register } from '../controllers/Auth.js'
// import  upload  from '../middleware/Multer.js'; 
// const AuthRoutes=express.Router()

// AuthRoutes.post('/register',upload.single('profile'),Register )
// AuthRoutes.post("/login")
 


// export default AuthRoutes




import upload from "../middleware/Multer.js";
import express from "express";
import { Register,Login, Logout } from "../controllers/Auth.controller.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", upload.single("profile"), Register);
AuthRoutes.post("/login",Login)
AuthRoutes.post("/logout",Logout)


export default AuthRoutes;