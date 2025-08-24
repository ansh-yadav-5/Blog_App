import UserModel from "../models/user.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


const Register=async(req,res)=>{
    try {
       const {FullName,email,password}=req.body

       const exitUser=await UserModel.find({email})
       if (!exitUser) {
        return res.status(303).json({success: false,meassage:"user already exits please login"})
       }
       const hasepasword= await bcryptjs.hashSync(password,10)
      
       
       const imagePath= req.filename
       const NewUser= new UserModel({
        FullName,email,password:hasepasword,profile:imagePath
       })
       await NewUser.save()
        return res.status(200).json({success:true,meassage:"user register successfully",user:NewUser})
              


    }catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})

    }
}


const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if (!email || !password) {
            return res.status(404).json({ success: false, message: "all fields are required" });

        }
        const FindUser= await UserModel.findOne({email})

        if (!FindUser) {
            return res.status(404).json({ success: false, message: "no user found please register"})
        }

        const comparepassword= await bcryptjs.compare(password, FindUser.password)

        if (!comparepassword) {
            return res.status(400).json({ success: false, message: "invalid password"});
        }
        const token = jwt.sign({ userId: FindUser._id }, process.env.JWT_SECREATE);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        })
        res.status(200).json({ success: true, message: "Login successfully", user: FindUser, token})

    }catch(error) {
         console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})

    }
}

const Logout= async(req,res)=> {

    try {
        res.clearCookie('token')
        res.status(200).json({ success: true, message: "Logout successfully"})

    } catch (error){
        console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})

    }
}
export {Register, Login,Logout}