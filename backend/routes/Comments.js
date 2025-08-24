import express from 'express'
import AddComment from '../controllers/Comment.controller.js'
import { isLogin } from '../middleware/isAdmin.js'
const CommentsRoutes=express.Router()



CommentsRoutes.post('/addcomments',isLogin,AddComment)
export default CommentsRoutes