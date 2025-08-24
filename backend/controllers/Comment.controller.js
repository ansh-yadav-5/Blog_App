import e from "express"
import PostModel from "../models/Blog.js"
import CommentModel from "../models/comments.js"


const AddComment=async(req,res)=>{
    try {
        const {postId,userId,comment}=req.body

        const newComment= new CommentModel({
            postId,userId,comment
        })

        await newComment.save()

        const exitpost= await PostModel.findById(postId)
        if (!exitpost) {
            return res.status(404).json({ success: false, message: 'Blog Post not found '});
        }
        exitpost.comments.push(newComment._id)
        await exitpost.save()
        res.status(200).json({success:true, message: 'Comment added successfully', comment: newComment});

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Inernal sever error"}) 
    }
}

export default AddComment