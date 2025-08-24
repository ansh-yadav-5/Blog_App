import PostModel from "../models/Blog.js"
import UserModel from "../models/user.js"
import fs from 'fs'
import path from 'path'


const Getalldata=async(req,res)=>{
    try {
        const Users=await UserModel.find()
        const Posts=await PostModel.find()
        // comment will be get here

        if (!Users && !Posts) {
            return res.status(404).json({success: false,message:"No Data Found"})
        }
        res.status(200).json({success:true,Users,Posts})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"});
    }
}

const GetUsers=async(req,res)=>{
      try {
        const Users=await UserModel.find()
      
        // comment will be get here

        if (!Users ) {
            return res.status(404).json({success: false,message:"No Data Found"})
        }
        res.status(200).json({success:true,Users})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})
    }
}  


const Userdelete=async(req,res)=>{
    try {
        const userId=req.params.id
        const exitUser= await UserModel.findById(userId)

        if (!exitUser) {
        return res.status(404).json({success: false,message:"No Data Found"})

        }
        if (exitUser.role == 'admin') {
            return res.status(404).json({success:false,message:"Soory You are Admin Can't Delete your account"})
        }

        if (exitUser.profile) {
            const profilepath= path.join('public/images',exitUser.profile)
            fs.promises.unlink(profilepath)
            .then(()=> console.log('Post image deleted'))
            .catch(error => console.log('Error deleting post image',error))
                    
         }

        const DeleteUser= await UserModel.findByIdAndDelete(userId)

        res.status(200).json({success:true,message: "User Deleted Successfully",user:DeleteUser})


    } catch (error) {
         console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"})
    }
}

export {Getalldata,GetUsers,Userdelete}