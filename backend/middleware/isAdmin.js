
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.js';

const isAdmin=async(req,res,next)=> {
    try {
        const token= req.cookies.token
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No Token Provided'});
        }
        const decoded= jwt.verify(token,process.env.JWT_SECREATE)
        const user= await UserModel.findById(decoded.userId)

        if (!user) {
            return res.status(403).json({ success:false,  message: 'Unauthorized: User not Found'});
       }
        if (user.role != 'admin') {
            return res.status(403).json({ success:false, message: 'Unauthorized: User is not Admin'});

        }
        next()
        
    } catch (error) {
       console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})
    }
}


const isLogin=async(req,res,next)=>{
  try {
        const token= req.cookies.token
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No Token Provided'});
        }
        const decoded= jwt.verify(token,process.env.JWT_SECREATE)
        const user= await UserModel.findById(decoded.userId)

        if (!user) {
            return res.status(403).json({ success:false,  message: 'Unauthorized: User not Found'});
       }
        
        req.user=user
        next()
        
    } catch (error) {
       console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})
    }
}

export {isAdmin,isLogin} 