import express from 'express'
import { Create, deletePost, getposts, update } from '../controllers/Blog.controller.js'
import upload from "../middleware/Multer.js";
import { isAdmin } from '../middleware/isAdmin.js'

const BlogsRoutes=express.Router()
BlogsRoutes.post('/create',isAdmin, upload.single('postimage'),Create)
BlogsRoutes.delete('/delete/:id',isAdmin,deletePost)
BlogsRoutes.get('/getposts',getposts)
BlogsRoutes.patch('/update/:id',isAdmin,upload.single('postimage'),update)

export default BlogsRoutes




