import express from 'express'
import { isAdmin } from '../middleware/isAdmin.js'
import { Getalldata, GetUsers, Userdelete } from '../controllers/Dashboard.controller.js'

const DashboardRoutes=express.Router()

DashboardRoutes.get('/',isAdmin,Getalldata)
DashboardRoutes.get('/users',isAdmin,GetUsers)
DashboardRoutes.delete('/deleteuser/:id',isAdmin,Userdelete)



export default DashboardRoutes