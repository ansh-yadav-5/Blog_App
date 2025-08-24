import express from 'express'
import dotenv from 'dotenv'
import DBcon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import cookieParser from 'cookie-parser'
import BlogsRoutes from './routes/Blog.js'
import DashboardRoutes from './routes/Dashboard.js'
import CommentsRoutes from './routes/Comments.js'
import PublicRoutes from './routes/public.js'

dotenv.config()
const PORT=process.env.PORT  || 3000
const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello from backend")
})

app.use(express.static('public'))
app.use('/auth',AuthRoutes)
app.use(cookieParser())
app.use('/blog',BlogsRoutes)
app.use('/dashboard',DashboardRoutes)
app.use('/comment',CommentsRoutes)
app.use('/public',PublicRoutes)

app.listen(PORT,()=>{
    console.log('Listening to the port 3000' )
})

// mongodb connection
DBcon()